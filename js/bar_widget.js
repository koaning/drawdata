import * as d3 from "./d3.v7.js";

function render({ model, el }) {
    // Configuration
    const margin = { top: 20, right: 30, bottom: 30, left: 60 };
    const width = model.get("width") - margin.left - margin.right;
    const height = model.get("height") - margin.top - margin.bottom;

    // Initialize collections with names from model
    const userNames = model.get("collection_names");
    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'];
    
    const collections = {};
    // Only create collections for the provided names (or at least one if none provided)
    const numCollections = Math.max(1, userNames.length);
    for (let i = 0; i < numCollections; i++) {
        const name = userNames[i] || `collection${i + 1}`;
        collections[name] = {
            color: colors[i],
            data: new Array(model.get("n_bins")).fill(model.get("y_min"))
        };
    }
    let activeCollection = Object.keys(collections)[0];
    let isDrawing = false;
    let minY = model.get("y_min");
    let maxY = model.get("y_max");
    let data; 
    updateDataOut();
    
    // Create SVG
    getBins();
    let container = document.createElement("div");
    
    let controls = document.createElement("div");
    controls.setAttribute("class", "controls");

    // Only add collection buttons if there are multiple collections
    if (Object.keys(collections).length > 1) {
        Object.keys(collections).forEach(key => {
            let btn = document.createElement("button");
            btn.setAttribute("class", "control")
            btn.style.position = "relative";
            btn.style.paddingLeft = "30px";
            let circle = document.createElement("span");
            circle.style.position = "absolute";
            circle.style.left = "8px";
            circle.style.top = "50%";
            circle.style.transform = "translateY(-50%)";
            circle.style.width = "12px";
            circle.style.height = "12px";
            circle.style.borderRadius = "50%";
            circle.style.backgroundColor = collections[key].color;
            circle.style.display = "inline-block";
            let text = document.createElement("span");
            text.textContent = key;
            btn.appendChild(text);
            btn.appendChild(circle);
            btn.addEventListener("click", () => {
                activeCollection = key;
                updateChart();
            });
            controls.appendChild(btn);
        });
    }

    // Add a button to clear the chart
    let clear_btn = document.createElement("button");
    clear_btn.setAttribute("class", "reset");
    
    clear_btn.innerHTML = "Clear";
    controls.appendChild(clear_btn);
    container.appendChild(controls);
    el.appendChild(container);


    const svg = d3.select(container)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create scales
    const x = d3.scaleBand()
        .range([0, width])
        .padding(0.1);

    const y = d3.scaleLinear()
        .range([height, 0]);

    // Add grid
    const grid = svg.append("g")
        .attr("class", "grid");

    // Add axes
    const xAxis = svg.append("g")
        .attr("transform", `translate(0,${height})`);

    const yAxis = svg.append("g");

    // Create collection groups
    Object.keys(collections).forEach(key => {
        svg.append("g")
            .attr("class", key);
    });

    // Add chart border
    svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "none")
        .attr("stroke", "#000")
        .attr("stroke-width", 1);

    function getBins() {
        return model.get("n_bins")
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

    function updateChart() {
        const bins = getBins();
        
        // Update scales
        x.domain(d3.range(bins));
        y.domain([minY, maxY]);

        // Update grid with fewer lines for better readability
        grid.selectAll(".horizontal-grid").remove();
        const yTickCount = Math.min(10, Math.abs(maxY - minY) / 10);
        grid.selectAll(".horizontal-grid")
            .data(y.ticks(10))
            .enter()
            .append("line")
            .attr("class", "horizontal-grid")
            .attr("x1", 0)
            .attr("x2", width)
            .attr("y1", d => y(d))
            .attr("y2", d => y(d))
            .attr("stroke", "#ddd")
            .attr("stroke-opacity", 0.7);

        // Update axes with formatted numbers
        xAxis.call(d3.axisBottom(x)
            .tickValues(x.domain().filter((d, i) => {
                // Show fewer x-axis labels based on the number of bins
                const interval = Math.ceil(bins / 10);
                return i % interval === 0;
            })));

        yAxis.call(d3.axisLeft(y)
            .ticks(10)
            .tickFormat(formatAxisNumber));

        // Update bars for each collection
        Object.entries(collections).forEach(([key, collection]) => {
            const bars = svg.select(`.${key}`)
                .selectAll(".bar")
                .data(collection.data);

            bars.enter()
                .append("rect")
                .attr("class", "bar")
                .merge(bars)
                .attr("x", (d, i) => x(i))
                .attr("width", x.bandwidth())
                .attr("y", d => y(Math.max(0, d)))
                .attr("height", d => Math.abs(y(0) - y(d)))
                .attr("fill", collection.color);

            bars.exit().remove();
        });

        updateDataOut();
    }

    function updateDataOut(){
        data = [];
        Object.keys(collections).forEach((key, i) => {
            let values = collections[key].data;
            values.forEach((value, j) => {
                data.push({collection: key, value: value, bin: j, color: collections[key].color});
            })
        });
        model.set("data", data);
        model.save_changes();
    };

    // Handle mouse events
    const chartArea = svg.append("rect")
        .attr("width", width)
        .attr("height", height)
        .attr("fill", "none")
        .attr("pointer-events", "all");

    function updateValue(event) {
        const [xPos, yPos] = d3.pointer(event);
        const binIndex = Math.floor(x.domain().length * xPos / width);
        const value = y.invert(yPos);
        
        if (binIndex >= 0 && binIndex < getBins()) {
            collections[activeCollection].data[binIndex] = Math.max(minY, Math.min(maxY, value));
            updateChart();
        }
    }

    chartArea.on("mousedown", event => {
        isDrawing = true;
        updateValue(event);
    });

    chartArea.on("mousemove", event => {
        if (isDrawing) {
            updateValue(event);
        }
    });

    chartArea.on("mouseup", () => {
        isDrawing = false;
    });

    chartArea.on("mouseleave", () => {
        isDrawing = false;
    });

    // Handle collection selection
    document.querySelectorAll('button.control').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('button.control').forEach(b => b.classList.remove('active'));
            button.classList.add('active');
            activeCollection = button.querySelector('span').textContent;
        });
    });

    // Handle clear button
    clear_btn.addEventListener('click', () => {
        Object.values(collections).forEach(collection => {
            collection.data = new Array(getBins()).fill(0);
        });
        updateChart();
    });

    document.querySelector('button.control').click();

    // Initialize chart
    updateChart();
};

export default { render };