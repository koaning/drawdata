import * as d3 from "./d3.v7.js";

function render({ model, el }) {
  // Use fixed color values that match the original for API compatibility
  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
  const color_map = {"#1f77b4": "a", "#ff7f0e": "b", "#2ca02c": "c", "#d62728": "d"};
  
  // Get dimensions with fallbacks
  const height = model.get("height") || 400;
  const width = model.get("width") || 800;

  // Scale factor for brush size relative to base 800px width
  const brushScale = width / 800;
  
  // Create main container with appropriate class for styling
  let container = document.createElement("div");
  container.className = "dd-scatter-container";

  // Apply theme immediately
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    container.classList.add('dark-theme');
  }

  // Create compact controls container - single row
  let controls = document.createElement("div");
  controls.className = "dd-scatter-controls";
  controls.style.display = "flex";
  controls.style.alignItems = "center";
  controls.style.gap = "0.5rem";
  controls.style.flexWrap = "wrap";
  controls.style.marginBottom = "0.25rem";
  container.appendChild(controls);

  let selectedClassButton = null;
  let selectedColor = colors[0];

  // Class buttons - compact
  ["a", "b", "c", "d"].forEach(function(d, i) {
    let button = document.createElement("button");
    button.className = "class-button";
    button.setAttribute("data-class", d);
    button.setAttribute("aria-label", `Select class ${d}`);
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.padding = "0.25rem 0.5rem";
    button.style.cursor = "pointer";
    button.style.border = "1px solid var(--dd-border-color)";
    button.style.borderRadius = "0.25rem";
    button.style.backgroundColor = "var(--dd-bg-color)";
    button.style.color = "var(--dd-text-color)";
    button.style.fontWeight = "500";
    button.style.fontSize = "0.8rem";
    button.style.transition = "all 0.15s ease";

    // Color dot
    let colorDot = document.createElement("span");
    colorDot.style.display = "inline-block";
    colorDot.style.width = "10px";
    colorDot.style.height = "10px";
    colorDot.style.borderRadius = "50%";
    colorDot.style.marginRight = "4px";
    colorDot.style.backgroundColor = colors[i];

    button.appendChild(colorDot);
    button.appendChild(document.createTextNode(d));

    button.onclick = function() {
      if (selectedClassButton) {
        selectedClassButton.style.backgroundColor = "var(--dd-bg-color)";
        selectedClassButton.style.borderColor = "var(--dd-border-color)";
        selectedClassButton.style.color = "var(--dd-text-color)";
      }
      selectedClassButton = button;
      selectedColor = colors[i];
      button.style.backgroundColor = colors[i];
      button.style.borderColor = colors[i];
      button.style.color = "white";

      circle_brush
        .style("fill", selectedColor)
        .style("fill-opacity", 0.3)
        .style("stroke", selectedColor)
        .style("stroke-width", 2);
    };

    controls.appendChild(button);

    if (i === 0) {
      selectedClassButton = button;
      button.click();
    }
  });

  // Separator
  let sep1 = document.createElement("span");
  sep1.style.borderLeft = "1px solid var(--dd-border-color)";
  sep1.style.height = "20px";
  sep1.style.margin = "0 0.25rem";
  controls.appendChild(sep1);

  // Brush size slider - compact inline
  let size_input = document.createElement("input");
  size_input.setAttribute("type", "range");
  size_input.setAttribute("min", "5");
  size_input.setAttribute("max", "100");
  size_input.setAttribute("value", model.get("brushsize"));
  size_input.setAttribute("aria-label", "Brush size");
  size_input.style.width = "80px";
  size_input.style.height = "4px";
  size_input.style.cursor = "pointer";
  size_input.style.verticalAlign = "middle";

  let size_value = document.createElement("span");
  size_value.style.fontSize = "0.75rem";
  size_value.style.minWidth = "1.5rem";
  size_value.style.marginLeft = "0.25rem";
  size_value.innerText = model.get("brushsize");

  size_input.oninput = function() {
    resize_brush();
    size_value.innerText = this.value;
  };

  controls.appendChild(size_input);
  controls.appendChild(size_value);

  // Separator
  let sep2 = document.createElement("span");
  sep2.style.borderLeft = "1px solid var(--dd-border-color)";
  sep2.style.height = "20px";
  sep2.style.margin = "0 0.25rem";
  controls.appendChild(sep2);

  // Reset button - compact, icon only
  let reset_btn = document.createElement("button");
  reset_btn.setAttribute("aria-label", "Reset");
  reset_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>';
  reset_btn.style.padding = "0.25rem";
  reset_btn.style.cursor = "pointer";
  reset_btn.style.border = "1px solid var(--dd-border-color)";
  reset_btn.style.borderRadius = "0.25rem";
  reset_btn.style.backgroundColor = "var(--dd-bg-color)";
  reset_btn.style.color = "var(--dd-text-color)";
  reset_btn.style.display = "inline-flex";
  reset_btn.style.alignItems = "center";
  reset_btn.onclick = reset;
  controls.appendChild(reset_btn);

  // Undo button - compact, icon only
  let undo_btn = document.createElement("button");
  undo_btn.setAttribute("aria-label", "Undo");
  undo_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H4"></path></svg>';
  undo_btn.style.padding = "0.25rem";
  undo_btn.style.cursor = "pointer";
  undo_btn.style.border = "1px solid var(--dd-border-color)";
  undo_btn.style.borderRadius = "0.25rem";
  undo_btn.style.backgroundColor = "var(--dd-bg-color)";
  undo_btn.style.color = "var(--dd-text-color)";
  undo_btn.style.display = "inline-flex";
  undo_btn.style.alignItems = "center";
  undo_btn.onclick = undo;
  controls.appendChild(undo_btn);

  el.appendChild(container);

  let data = model.get("data") || [];
  
  // Create SVG with responsive dimensions
  let svg_container = document.createElement("div");
  svg_container.className = "dd-scatter-svg-container";
  container.appendChild(svg_container);
  
  // Determine a good aspect ratio that will work across environments
  const aspectRatio = width / height;
  
  let svg = d3.select(svg_container)
              .append("svg")
              .attr("preserveAspectRatio", "xMidYMid meet")
              .attr("viewBox", `0 0 ${width} ${height}`)
              .attr("width", "100%")
              .attr("height", "auto")
              .attr("aria-label", "Scatter plot drawing area")
              .attr("role", "img")
              .style("aspect-ratio", aspectRatio)
              .style("max-width", `${width}px`);
  
  let batch = 0;
  let isDragging = false;

  // Add event handlers with proper bindings
  svg.attr("class", "dd-scatter-svg")
     .call(d3.drag()
        .on("start", drag_start)
        .on("drag", dragged)
        .on("end", drag_end))
     .on("click", mouseclick)
     .on("mousemove", mousemove);
     
  // Add grid lines for better orientation
  function createGrid() {
    // Create a group for gridlines to make them easier to manage
    const grid = svg.append("g")
                   .attr("class", "grid-lines");
                   
    // Add gridlines for x-axis
    for (let i = 0; i <= width; i += 100) {
      grid.append("line")
         .attr("x1", i)
         .attr("y1", 0)
         .attr("x2", i)
         .attr("y2", height)
         .attr("stroke", "var(--dd-border-color, #e5e7eb)")
         .attr("stroke-width", i % 200 === 0 ? 0.75 : 0.5)
         .attr("opacity", i % 200 === 0 ? 0.4 : 0.2);
    }
    
    // Add gridlines for y-axis
    for (let i = 0; i <= height; i += 100) {
      grid.append("line")
         .attr("x1", 0)
         .attr("y1", i)
         .attr("x2", width)
         .attr("y2", i)
         .attr("stroke", "var(--dd-border-color, #e5e7eb)")
         .attr("stroke-width", i % 200 === 0 ? 0.75 : 0.5)
         .attr("opacity", i % 200 === 0 ? 0.4 : 0.2);
    }
  }
  
  createGrid();

  // Drawing function with styles
  function redraw_from_scratch() {
    svg.selectAll("circle.drawn").remove();

    if (!data) return;
    
    data.forEach(function(d) {
      svg.append("circle")
         .attr("cx", d.x)
         .attr("cy", height - d.y)
         .attr("r", 3)
         .style("fill", d.color)
         .style("stroke", "white")
         .style("stroke-width", 1)
         .style("opacity", 0.85)
         .attr("class", `batch_${d.batch || 0} drawn`);
    });

  }

  redraw_from_scratch();
  
  // Set up model change handlers
  model.on("change:data", function() {
    data = model.get("data") || [];
    redraw_from_scratch();
  });

  model.on("change:brushsize", function() {
    circle_brush.attr("r", size_input.value * brushScale);
    size_value.innerText = size_input.value;
  });

  // Update dimensions on model changes
  model.on("change:width", function() {
    updateDimensions();
  });
  
  model.on("change:height", function() {
    updateDimensions();
  });
  
  function updateDimensions() {
    const newWidth = model.get("width") || width;
    const newHeight = model.get("height") || height;
    
    // Update the SVG viewBox and aspect ratio
    svg.attr("viewBox", `0 0 ${newWidth} ${newHeight}`);
    svg.style("aspect-ratio", newWidth / newHeight);
    
    // Remove old grid and create new one
    svg.selectAll(".grid-lines").remove();
    svg.selectAll("text").remove();
    createGrid();
    
    // Redraw to account for new dimensions if needed
    if (data && data.length > 0) {
      redraw_from_scratch();
    }
  }

  // Visual brush indicator with higher visibility
  let circle_brush = svg
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", model.get("brushsize") * brushScale)
    .style("fill", selectedColor)
    .style("fill-opacity", 0.3)
    .style("stroke", selectedColor)
    .style("stroke-width", 2)
    .style("stroke-opacity", 0.9)
    .attr("class", "brush-indicator");

  function drag_start(event) {
    isDragging = false;
  }

  function mousemove(event) {
    // Get pointer coordinates
    const [x, y] = d3.pointer(event, svg.node());
    update_brush(x, y);
  }

  function mouseclick(event) {
    if (!isDragging) {
      // Use d3.pointer for more reliable coordinate detection
      const [x, y] = d3.pointer(event, svg.node());
      let size = parseInt(size_input.value, 10) * brushScale;
      let new_x = x + (Math.random() - 0.5) * size;
      let new_y = y + (Math.random() - 0.5) * size;
      add_point(new_x, new_y);
      finish_batch();
    }
  }

  function update_brush(x, y) {
    circle_brush
      .attr("cx", x)
      .attr("cy", y);
  }

  function resize_brush() {
    // We want the paintbrush to show the size param, hence this update
    model.set("brushsize", Number(size_input.value));
    circle_brush.attr("r", size_input.value * brushScale);
  }

  function add_point(new_x, new_y) {
    let label = color_map[selectedColor];
    svg
      .append("circle")
      .attr("cx", new_x)
      .attr("cy", new_y)
      .attr("r", 3)
      .style("fill", selectedColor)
      .style("stroke", "white")
      .style("stroke-width", 1)
      .style("opacity", 0.85)
      .attr("class", `batch_${batch} drawn`);
    
    // Initialize data array if it doesn't exist
    if (!data) data = [];
    
    data.push({ 
      x: new_x, 
      y: height - new_y, 
      color: selectedColor, 
      label: label, 
      batch: batch 
    });
  }

  function finish_batch() {
    // The `model.save_changes` method might be depending on what we've
    // drawn, so we only run it once dragging is done. Saves bunch of compute!
    model.set("data", grab_data());
    model.save_changes();
    
    // Calculate next batch number safely
    if (data && data.length > 0) {
      const batchValues = data.map(d => d.batch || 0);
      batch = Math.max(...batchValues) + 1;
    } else {
      batch = 0;
    }
  }

  function dragged(event) {
    isDragging = true;
    // Use d3.pointer for more reliable coordinate detection
    const [x, y] = d3.pointer(event, svg.node());
    let size = parseInt(size_input.value, 10) * brushScale;
    let new_x = x + (Math.random() - 0.5) * size;
    let new_y = y + (Math.random() - 0.5) * size;
    add_point(new_x, new_y);
    update_brush(x, y);
  }

  function drag_end(event) {
    finish_batch();
  }

  function grab_data() {
    // We need to account for the fact that we draw the y-axis other way around in svg land
    if (!data) return [];
    return data.map(function(d) { 
      return { 
        x: d.x, 
        y: d.y, 
        color: d.color, 
        label: d.label,
        batch: d.batch || 0
      }; 
    });
  }

  function reset() {
    data = [];
    model.set("data", []);
    model.save_changes();
    svg.selectAll("circle.drawn").remove();
    batch = 0;
  }

  function undo() {
    if (!data || data.length === 0) return;
    
    try {
      // Find max batch number
      let maxBatch = 0;
      for (const d of data) {
        if ((d.batch || 0) > maxBatch) maxBatch = d.batch || 0;
      }
      
      // Remove points from the last batch
      svg.selectAll(`circle.batch_${maxBatch}`).remove();
      data = data.filter(function(d) { return (d.batch || 0) !== maxBatch; });
      
      // Update model
      model.set("data", grab_data());
      model.save_changes();
    } catch (error) {
      console.error("Error in undo function:", error);
    }
  }
  
  // Detect notebook environments
  const notebook = el.closest('.jp-OutputArea') || 
                  el.closest('.jupyter-widgets-output-area') ||
                  el.closest('.output_subarea');
                  
  if (notebook) {
    container.classList.add('notebook-env');
  }

  return () => {
    d3.select(container).remove();
  };
}

export default { render };