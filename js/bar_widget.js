import * as d3 from "./d3.v7.js";

function render({ model, el }) {
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const colors = ["#36A2EB", "#FFCE56", "#4BC0C0", "#FF6384"];

    let width = model.get("width") - margin.left - margin.right;
    let height = model.get("height") - margin.top - margin.bottom;
    let minY = model.get("y_min");
    let maxY = model.get("y_max");
    let collections = {};
    let collectionGroups = new Map();
    let activeCollection;
    let isDrawing = false;
    let syncingDataOut = false;

    function getBins() {
        return model.get("n_bins");
    }

    function getCollectionNames() {
        const userNames = model.get("collection_names") || [];
        const count = Math.max(1, userNames.length);
        return d3.range(count).map((index) => userNames[index] || `collection${index + 1}`);
    }

    function clampValue(value) {
        return Math.max(minY, Math.min(maxY, value));
    }

    function normalizeCollections() {
        Object.values(collections).forEach((collection) => {
            collection.data = collection.data.map(clampValue);
        });
    }

    function syncCollectionsFromNames() {
        const nextCollections = {};
        getCollectionNames().forEach((name, index) => {
            const previous = collections[name];
            const previousData = previous ? previous.data : [];
            nextCollections[name] = {
                color: colors[index],
                data: d3.range(getBins()).map((bin) =>
                    bin < previousData.length ? clampValue(previousData[bin]) : minY
                ),
            };
        });
        collections = nextCollections;

        if (!collections[activeCollection]) {
            activeCollection = Object.keys(collections)[0];
        }
    }

    function seedFromModel() {
        Object.values(collections).forEach((collection) => {
            collection.data = new Array(getBins()).fill(minY);
        });
        (model.get("data") || []).forEach((datum) => {
            const collection = collections[datum.collection];
            if (collection && datum.bin >= 0 && datum.bin < collection.data.length) {
                collection.data[datum.bin] = clampValue(datum.value);
            }
        });
    }

    function collectData() {
        const data = [];
        Object.entries(collections).forEach(([name, collection]) => {
            collection.data.forEach((value, bin) => {
                data.push({ collection: name, value, bin, color: collection.color });
            });
        });
        return data;
    }

    function modelDataMatches(nextData) {
        const currentData = model.get("data") || [];
        return currentData.length === nextData.length && currentData.every((current, index) => {
            const next = nextData[index];
            return current.collection === next.collection
                && Object.is(current.value, next.value)
                && current.bin === next.bin
                && current.color === next.color;
        });
    }

    function updateDataOut() {
        const data = collectData();
        if (modelDataMatches(data)) return;

        syncingDataOut = true;
        try {
            model.set("data", data);
            model.save_changes();
        } finally {
            syncingDataOut = false;
        }
    }

    syncCollectionsFromNames();
    seedFromModel();

    const container = document.createElement("div");
    const controls = document.createElement("div");
    controls.setAttribute("class", "controls");
    container.appendChild(controls);
    el.appendChild(container);

    const svgRoot = d3.select(container)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);
    const svg = svgRoot
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.1)
        .domain(d3.range(getBins()));
    const y = d3.scaleLinear()
        .range([height, 0])
        .domain([Math.min(minY, 0), maxY]);

    const grid = svg.append("g").attr("class", "grid");
    const collectionsLayer = svg.append("g").attr("class", "collections");
    const xAxis = svg.append("g").attr("transform", `translate(0,${height})`);
    const yAxis = svg.append("g");
    const border = svg.append("rect")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-width", 1);
    const chartArea = svg.append("rect")
        .attr("fill", "none")
        .attr("pointer-events", "all");

    function formatAxisNumber(num) {
        const absNum = Math.abs(num);
        if (absNum >= 1000000) {
            return (num / 1000000).toFixed(1) + "M";
        } else if (absNum >= 1000) {
            return (num / 1000).toFixed(1) + "K";
        } else if (absNum < 1) {
            return num.toFixed(2);
        } else if (absNum < 10) {
            return num.toFixed(1);
        }
        return Math.round(num);
    }

    function updateControlState() {
        container.querySelectorAll("button.control").forEach((button) => {
            button.classList.toggle("active", button.dataset.collection === activeCollection);
        });
    }

    function renderControls() {
        controls.replaceChildren();
        const names = Object.keys(collections);
        if (names.length <= 1) return;

        names.forEach((name) => {
            const button = document.createElement("button");
            button.setAttribute("class", "control");
            button.dataset.collection = name;
            button.style.position = "relative";
            button.style.paddingLeft = "30px";

            const circle = document.createElement("span");
            circle.style.position = "absolute";
            circle.style.left = "8px";
            circle.style.top = "50%";
            circle.style.transform = "translateY(-50%)";
            circle.style.width = "12px";
            circle.style.height = "12px";
            circle.style.borderRadius = "50%";
            circle.style.backgroundColor = collections[name].color;
            circle.style.display = "inline-block";

            const text = document.createElement("span");
            text.textContent = name;
            button.appendChild(text);
            button.appendChild(circle);
            button.addEventListener("click", () => {
                activeCollection = name;
                updateControlState();
            });
            controls.appendChild(button);
        });

        const clearButton = document.createElement("button");
        clearButton.setAttribute("class", "reset");
        clearButton.textContent = "Clear";
        clearButton.addEventListener("click", () => {
            Object.values(collections).forEach((collection) => {
                collection.data = new Array(getBins()).fill(clampValue(0));
            });
            updateChart({ syncData: true });
        });
        controls.appendChild(clearButton);
        updateControlState();
    }

    function updateCollectionGroups() {
        const groups = collectionsLayer
            .selectAll("g.collection")
            .data(Object.keys(collections), (name) => name)
            .join(
                (enter) => enter.append("g").attr("class", "collection"),
                (update) => update,
                (exit) => exit.remove(),
            )
            .attr("data-collection", (name) => name);

        collectionGroups = new Map();
        groups.each(function(name) {
            collectionGroups.set(name, d3.select(this));
        });
    }

    function updateChart({ syncData = false } = {}) {
        const bins = getBins();
        x.domain(d3.range(bins));
        y.domain([Math.min(minY, 0), maxY]);

        const tickInterval = Math.ceil(bins / 10);
        xAxis.call(d3.axisBottom(x).tickValues(
            x.domain().filter((_, index) => index % tickInterval === 0)
        ));
        yAxis.call(d3.axisLeft(y).ticks(10).tickFormat(formatAxisNumber));

        grid.selectAll("line.horizontal-grid")
            .data(y.ticks(10), (value) => value)
            .join("line")
            .attr("class", "horizontal-grid")
            .attr("x1", 0)
            .attr("x2", width)
            .attr("y1", (value) => y(value))
            .attr("y2", (value) => y(value))
            .attr("stroke", "#ddd")
            .attr("stroke-opacity", 0.7);

        Object.entries(collections).forEach(([name, collection]) => {
            collectionGroups.get(name)
                .selectAll("rect.bar")
                .data(collection.data)
                .join("rect")
                .attr("class", "bar")
                .attr("x", (_, index) => x(index))
                .attr("width", x.bandwidth())
                .attr("y", (value) => y(Math.max(0, value)))
                .attr("height", (value) => Math.abs(y(0) - y(value)))
                .attr("fill", collection.color);
        });

        if (syncData) updateDataOut();
    }

    function updateDimensions() {
        width = model.get("width") - margin.left - margin.right;
        height = model.get("height") - margin.top - margin.bottom;
        svgRoot
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);
        x.range([0, width]);
        y.range([height, 0]);
        xAxis.attr("transform", `translate(0,${height})`);
        border.attr("width", width).attr("height", height);
        chartArea.attr("width", width).attr("height", height);
        updateChart();
    }

    function onDataChange() {
        if (syncingDataOut) return;
        seedFromModel();
        updateChart({ syncData: true });
    }

    function onBinsChange() {
        Object.values(collections).forEach((collection) => {
            const oldData = collection.data;
            collection.data = d3.range(getBins()).map((bin) =>
                bin < oldData.length ? clampValue(oldData[bin]) : minY
            );
        });
        updateChart({ syncData: true });
    }

    function onMinChange() {
        minY = model.get("y_min");
        normalizeCollections();
        updateChart({ syncData: true });
    }

    function onMaxChange() {
        maxY = model.get("y_max");
        normalizeCollections();
        updateChart({ syncData: true });
    }

    function onCollectionNamesChange() {
        syncCollectionsFromNames();
        seedFromModel();
        renderControls();
        updateCollectionGroups();
        updateChart({ syncData: true });
    }

    function updateValue(event) {
        const [xPos, yPos] = d3.pointer(event);
        const binIndex = Math.floor(x.domain().length * xPos / width);
        const value = y.invert(yPos);
        if (binIndex >= 0 && binIndex < getBins()) {
            collections[activeCollection].data[binIndex] = clampValue(value);
            updateChart({ syncData: true });
        }
    }

    chartArea.on("mousedown", (event) => {
        isDrawing = true;
        updateValue(event);
    });
    chartArea.on("mousemove", (event) => {
        if (isDrawing) updateValue(event);
    });
    chartArea.on("mouseup", () => {
        isDrawing = false;
    });
    chartArea.on("mouseleave", () => {
        isDrawing = false;
    });

    renderControls();
    updateCollectionGroups();
    updateDimensions();
    updateDataOut();

    const modelHandlers = {
        data: onDataChange,
        n_bins: onBinsChange,
        y_min: onMinChange,
        y_max: onMaxChange,
        width: updateDimensions,
        height: updateDimensions,
        collection_names: onCollectionNamesChange,
    };
    Object.entries(modelHandlers).forEach(([trait, handler]) => {
        model.on(`change:${trait}`, handler);
    });

    return () => {
        Object.entries(modelHandlers).forEach(([trait, handler]) => {
            model.off(`change:${trait}`, handler);
        });
        d3.select(container).remove();
    };
}

export default { render };
