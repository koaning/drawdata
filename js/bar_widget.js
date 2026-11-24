import * as d3 from "./d3.v7.js";

// Same palette as the ScatterWidget, so both widgets look like one family
const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];

const RESET_ICON = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>';

function hexToRgba(hex, alpha) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function formatAxisNumber(num) {
    const absNum = Math.abs(num);
    if (absNum >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (absNum >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    } else if (absNum < 1) {
        // For numbers less than 1, show 2 decimal places
        return num.toFixed(2);
    } else if (absNum < 10) {
        // For numbers between 1 and 10, show 1 decimal place
        return num.toFixed(1);
    }
    // For numbers between 10 and 1000, show whole numbers
    return Math.round(num);
}

// Notebook hosts mark their theme on <body>/<html>: marimo uses a "dark"
// class and data-theme, JupyterLab data-jp-theme-light, VS Code vscode-dark.
// Returns null when the host doesn't say, so CSS falls back to the OS
// preference via prefers-color-scheme.
function detectHostTheme() {
    for (const node of [document.body, document.documentElement]) {
        if (!node) continue;
        const cls = node.classList;
        const data = node.dataset;
        if (cls.contains("dark") || cls.contains("dark-theme") || cls.contains("vscode-dark")
            || cls.contains("vscode-high-contrast") || data.theme === "dark" || data.jpThemeLight === "false") {
            return "dark";
        }
        if (cls.contains("light") || cls.contains("light-theme") || cls.contains("vscode-light")
            || data.theme === "light" || data.jpThemeLight === "true") {
            return "light";
        }
    }
    return null;
}

function render({ model, el }) {
    // Configuration
    const margin = { top: 12, right: 16, bottom: 28, left: 48 };
    const totalWidth = model.get("width");
    const totalHeight = model.get("height");
    const width = totalWidth - margin.left - margin.right;
    const height = totalHeight - margin.top - margin.bottom;

    // Initialize collections with names from model
    const userNames = model.get("collection_names");
    const collections = {};
    // Only create collections for the provided names (or at least one if none provided)
    const numCollections = Math.max(1, userNames.length);
    for (let i = 0; i < numCollections; i++) {
        const name = userNames[i] || `collection${i + 1}`;
        collections[name] = {
            color: COLORS[i % COLORS.length],
            data: new Array(model.get("n_bins")).fill(model.get("y_min"))
        };
    }
    const keys = Object.keys(collections);
    let activeCollection = keys[0];
    let isDrawing = false;
    let lastPoint = null;
    let minY = model.get("y_min");
    let maxY = model.get("y_max");
    let data;
    // True while updateDataOut() is syncing data to the model, so the
    // change:data handler below can tell its own echo apart from a real
    // Python-side update (model.set() fires change synchronously)
    let syncingDataOut = false;

    function getBins() {
        return model.get("n_bins");
    }

    // Labels are only used when there is exactly one per bin; otherwise
    // bins are numbered 0..n-1 like before
    function getLabels() {
        const labels = model.get("x_labels") || [];
        return labels.length === getBins() ? labels : null;
    }

    function labelFor(bin) {
        const labels = getLabels();
        return labels ? String(labels[bin]) : String(bin);
    }

    // Estimated width of the widest x label (~6.5px per character at the
    // 11px axis font)
    function maxLabelWidth(bins) {
        const labels = getLabels();
        const maxChars = labels ? d3.max(labels, l => String(l).length) : String(bins - 1).length;
        return maxChars * 6.5;
    }

    // Pick which bins get an x label: every k-th bin starting at the first,
    // with k picked so labels don't overlap. k comes from a list of "round"
    // steps so e.g. 48 half-hour bins land on whole hours (00:00, 02:00, ...).
    // The last bin also gets a label when that keeps the spacing even: it has
    // to be at least 3/4 of a step after the previous label (so 48 half-hour
    // bins end in "22:00, 23:30", but 24 numbered bins stay "..., 20, 22"
    // rather than "..., 22, 23").
    const NICE_STEPS = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32, 48, 64, 96, 128];
    function tickBins(bins) {
        const labelWidth = maxLabelWidth(bins);
        const step = width / bins;
        const raw = Math.max(1, Math.ceil((labelWidth + 24) / step));
        const k = NICE_STEPS.find(n => n >= raw) || raw;
        const ticks = d3.range(0, bins, k);
        const last = bins - 1;
        const gapBins = last - ticks[ticks.length - 1];
        if (gapBins > 0 && gapBins >= 0.75 * k && gapBins * step >= labelWidth + 12) {
            ticks.push(last);
        }
        return ticks;
    }

    // (Re)fill each collection's bins from the model's data, so data passed
    // to the constructor (or set later from Python) is reflected in the
    // chart. Bins the data doesn't cover fall back to y_min, and values are
    // clamped to the [y_min, y_max] range like drawn values are.
    function seedFromModel() {
        keys.forEach(key => {
            collections[key].data = new Array(getBins()).fill(model.get("y_min"));
        });
        (model.get("data") || []).forEach(d => {
            const collection = collections[d.collection];
            if (collection && d.bin >= 0 && d.bin < collection.data.length) {
                collection.data[d.bin] = Math.max(minY, Math.min(maxY, d.value));
            }
        });
    }

    function updateDataOut() {
        data = [];
        const labels = getLabels();
        keys.forEach(key => {
            collections[key].data.forEach((value, j) => {
                const row = { collection: key, value: value, bin: j, color: collections[key].color };
                if (labels) row.label = String(labels[j]);
                data.push(row);
            });
        });
        syncingDataOut = true;
        model.set("data", data);
        model.save_changes();
        syncingDataOut = false;
    }

    seedFromModel();
    updateDataOut();

    // Build the DOM
    const container = document.createElement("div");
    container.setAttribute("class", "dd-bar-container");
    // Match the chart width so the Clear button lines up with its right edge
    container.style.maxWidth = `${totalWidth}px`;

    // Follow the notebook's light/dark theme, including live toggles
    function applyTheme() {
        const theme = detectHostTheme();
        container.classList.toggle("dd-bar-theme-dark", theme === "dark");
        container.classList.toggle("dd-bar-theme-light", theme === "light");
    }
    applyTheme();
    const themeObserver = new MutationObserver(applyTheme);
    [document.body, document.documentElement].forEach(node => {
        if (node) {
            themeObserver.observe(node, { attributes: true, attributeFilter: ["class", "data-theme", "data-jp-theme-light"] });
        }
    });

    const controls = document.createElement("div");
    controls.className = "dd-bar-controls";
    container.appendChild(controls);

    // Only add collection buttons if there are multiple collections
    if (keys.length > 1) {
        const group = document.createElement("div");
        group.className = "dd-bar-collections";
        keys.forEach(key => {
            const color = collections[key].color;
            const btn = document.createElement("button");
            btn.setAttribute("class", "dd-bar-control");
            btn.type = "button";
            btn.dataset.collection = key;
            btn.setAttribute("aria-label", `Draw ${key}`);
            btn.style.setProperty("--dd-collection-color", color);
            btn.style.setProperty("--dd-collection-bg", hexToRgba(color, 0.18));
            const dot = document.createElement("span");
            dot.className = "dd-bar-dot";
            const text = document.createElement("span");
            text.textContent = key;
            btn.appendChild(dot);
            btn.appendChild(text);
            group.appendChild(btn);
        });
        controls.appendChild(group);
    }

    // Add a button to clear the chart
    const clear_btn = document.createElement("button");
    clear_btn.setAttribute("class", "dd-bar-reset");
    clear_btn.type = "button";
    clear_btn.innerHTML = RESET_ICON + "<span>Clear</span>";
    clear_btn.setAttribute("aria-label", "Clear all bars");
    controls.appendChild(clear_btn);

    const svgContainer = document.createElement("div");
    svgContainer.className = "dd-bar-svg-container";
    container.appendChild(svgContainer);
    el.appendChild(container);

    // Responsive SVG: draw in a fixed coordinate system and let the
    // viewBox scale it down when the output area is narrower
    const svgRoot = d3.select(svgContainer)
        .append("svg")
        .attr("class", "dd-bar-svg")
        .attr("viewBox", `0 0 ${totalWidth} ${totalHeight}`)
        .attr("preserveAspectRatio", "xMidYMid meet")
        .attr("width", "100%")
        .attr("role", "img")
        .attr("aria-label", "Bar chart drawing area")
        .style("aspect-ratio", totalWidth / totalHeight)
        .style("max-width", `${totalWidth}px`);

    const svg = svgRoot.append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.15);

    const y = d3.scaleLinear()
        .range([height, 0]);

    // Layers, bottom to top: grid, hover band, bars, axes, readout, pointer overlay
    const grid = svg.append("g").attr("class", "dd-bar-grid");
    const hoverBand = svg.append("rect")
        .attr("class", "dd-bar-hover")
        .attr("y", 0)
        .attr("height", height)
        .style("display", "none");
    const barsLayer = svg.append("g").attr("class", "dd-bar-bars");
    const xAxis = svg.append("g")
        .attr("class", "dd-bar-axis")
        .attr("transform", `translate(0,${height})`);
    const yAxis = svg.append("g").attr("class", "dd-bar-axis");

    // Small "label · value" readout for the bin under the cursor, so you can
    // tell bins apart even when only every k-th x label is shown
    const readout = svg.append("g")
        .attr("class", "dd-bar-readout")
        .style("display", "none");
    const readoutBg = readout.append("rect").attr("rx", 4);
    const readoutText = readout.append("text").attr("y", 0).attr("dy", "0.32em");
    const readoutLabel = readoutText.append("tspan").attr("class", "dd-bar-readout-label");
    const readoutValue = readoutText.append("tspan").attr("class", "dd-bar-readout-value");

    // Keep a reference per collection instead of selecting by class name,
    // so names with spaces or leading digits still work
    const collectionGroups = {};
    keys.forEach(key => {
        collectionGroups[key] = barsLayer.append("g").attr("class", "dd-bar-collection");
    });

    function updateChart() {
        const bins = getBins();

        // Update scales
        x.domain(d3.range(bins));
        y.domain([Math.min(minY, 0), maxY]);

        // Show as many x labels as fit without overlapping
        xAxis.call(d3.axisBottom(x)
            .tickSizeOuter(0)
            .tickValues(tickBins(bins))
            .tickFormat(labelFor));
        // Keep a long last label from running off the right edge of the SVG
        const lastTickText = xAxis.select(".tick:last-of-type text");
        const lastCenter = x(bins - 1) + x.bandwidth() / 2;
        lastTickText.attr("text-anchor",
            lastCenter + maxLabelWidth(bins) / 2 > width + margin.right ? "end" : null);

        yAxis.call(d3.axisLeft(y)
            .ticks(6)
            .tickSize(0)
            .tickPadding(8)
            .tickFormat(formatAxisNumber));
        yAxis.select(".domain").remove();

        grid.selectAll("line")
            .data(y.ticks(6))
            .join("line")
            .attr("x1", 0)
            .attr("x2", width)
            .attr("y1", d => y(d))
            .attr("y2", d => y(d));

        // Update bars for each collection; the active one is drawn on top
        keys.forEach(key => {
            const collection = collections[key];
            const isActive = key === activeCollection;
            collectionGroups[key]
                .classed("dd-bar-active", isActive)
                .selectAll("rect.bar")
                .data(collection.data)
                .join("rect")
                .attr("class", "bar")
                .attr("x", (d, i) => x(i))
                .attr("width", x.bandwidth())
                .attr("y", d => y(Math.max(0, d)))
                .attr("height", d => Math.abs(y(0) - y(d)))
                .attr("rx", Math.min(3, x.bandwidth() / 4))
                .attr("fill", collection.color);
        });
        collectionGroups[activeCollection].raise();
    }

    function setActiveCollection(key) {
        activeCollection = key;
        container.querySelectorAll("button.dd-bar-control").forEach(b => {
            b.classList.toggle("dd-bar-active", b.dataset.collection === key);
            b.setAttribute("aria-pressed", b.dataset.collection === key);
        });
        updateChart();
    }

    // React to Python-side updates (ScatterWidget already does this via its
    // own change: handlers)
    model.on("change:data", function() {
        if (syncingDataOut) return;
        seedFromModel();
        updateChart();
    });
    model.on("change:n_bins", function() {
        // Re-fit each collection to the new bin count, keeping the bins
        // that still exist
        keys.forEach(key => {
            const old = collections[key].data;
            collections[key].data = d3.range(getBins()).map(i =>
                i < old.length ? old[i] : model.get("y_min")
            );
        });
        hideHover();
        updateChart();
        updateDataOut();
    });
    model.on("change:x_labels", function() {
        hideHover();
        updateChart();
        updateDataOut();
    });
    model.on("change:y_min", function() {
        minY = model.get("y_min");
        updateChart();
    });
    model.on("change:y_max", function() {
        maxY = model.get("y_max");
        updateChart();
    });

    // Pointer handling (mouse, pen and touch)
    // Invisible plot-area rect, used as the coordinate reference for pointers
    const chartArea = svg.append("rect")
        .attr("class", "dd-bar-overlay")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "none");

    function pointerToBin(event) {
        // d3.pointer accounts for the viewBox scaling of the SVG. Positions
        // in the margins are clamped, so strokes may start next to the axes
        const [xPos, yPos] = d3.pointer(event, chartArea.node());
        const bins = getBins();
        const bin = Math.max(0, Math.min(bins - 1, Math.floor(bins * xPos / width)));
        const value = Math.max(minY, Math.min(maxY, y.invert(yPos)));
        return { bin, value };
    }

    function showHover(bin) {
        const step = x.step();
        hoverBand
            .style("display", null)
            .attr("x", x(bin) - (step - x.bandwidth()) / 2)
            .attr("width", step);

        readoutLabel.text(labelFor(bin));
        readoutValue.text(` \u00b7 ${formatAxisNumber(collections[activeCollection].data[bin])}`);
        readout.style("display", null);
        // Centre the readout above the bin, kept inside the plot area
        const textWidth = readoutText.node().getComputedTextLength?.() || 0;
        const padX = 6;
        const boxWidth = textWidth + 2 * padX;
        const center = x(bin) + x.bandwidth() / 2;
        const left = Math.max(0, Math.min(width - boxWidth, center - boxWidth / 2));
        readout.attr("transform", `translate(${left},${12})`);
        readoutText.attr("x", padX);
        readoutBg
            .attr("x", 0)
            .attr("y", -9)
            .attr("width", boxWidth)
            .attr("height", 18);
    }

    function hideHover() {
        hoverBand.style("display", "none");
        readout.style("display", "none");
    }

    function updateValue(event) {
        const point = pointerToBin(event);
        const values = collections[activeCollection].data;
        // Fill in bins skipped over by a fast drag
        if (lastPoint && lastPoint.bin !== point.bin) {
            const dir = point.bin > lastPoint.bin ? 1 : -1;
            const span = Math.abs(point.bin - lastPoint.bin);
            for (let k = 1; k < span; k++) {
                const t = k / span;
                values[lastPoint.bin + dir * k] = lastPoint.value + t * (point.value - lastPoint.value);
            }
        }
        values[point.bin] = point.value;
        lastPoint = point;
        updateChart();
        showHover(point.bin);
    }

    function stopDrawing(event) {
        if (!isDrawing) return;
        isDrawing = false;
        lastPoint = null;
        if (event && svgNode.hasPointerCapture?.(event.pointerId)) {
            svgNode.releasePointerCapture(event.pointerId);
        }
        // Sync once per stroke instead of on every pointer move
        updateDataOut();
    }

    // Listen on the whole SVG (not just the plot area) so a stroke that
    // starts in the margin, or leaves it mid-drag, still draws
    const svgNode = svgRoot.node();

    svgRoot.on("pointerdown", event => {
        if (event.button !== undefined && event.button !== 0) return;
        event.preventDefault();
        isDrawing = true;
        lastPoint = null;
        svgNode.setPointerCapture?.(event.pointerId);
        updateValue(event);
    });

    svgRoot.on("pointermove", event => {
        if (isDrawing) {
            updateValue(event);
        } else {
            showHover(pointerToBin(event).bin);
        }
    });

    svgRoot.on("pointerup", stopDrawing);
    svgRoot.on("pointercancel", stopDrawing);
    svgRoot.on("lostpointercapture", stopDrawing);
    svgRoot.on("pointerleave", () => {
        if (!isDrawing) hideHover();
    });

    // Handle collection selection. Scope the queries to this widget's own
    // container: document-level queries throw when the view isn't attached
    // to the document yet (some hosts render before attaching), and make
    // multiple BarWidgets on a page switch each other's active collection.
    container.querySelectorAll("button.dd-bar-control").forEach(button => {
        button.addEventListener("click", () => setActiveCollection(button.dataset.collection));
    });

    // Handle clear button
    clear_btn.addEventListener("click", () => {
        keys.forEach(key => {
            collections[key].data = new Array(getBins()).fill(model.get("y_min"));
        });
        updateChart();
        updateDataOut();
    });

    // Initialize chart
    if (keys.length > 1) {
        container.querySelector("button.dd-bar-control").click();
    } else {
        updateChart();
    }

    // anywidget calls this when the view is removed
    return () => themeObserver.disconnect();
}

export default { render };
