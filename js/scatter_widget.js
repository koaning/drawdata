import * as d3 from "./d3.v7.js";

function render({ model, el }) {
  // Use fixed color values that match the original for API compatibility
  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
  const color_map = {"#1f77b4": "a", "#ff7f0e": "b", "#2ca02c": "c", "#d62728": "d"};
  
  // Get dimensions with fallbacks
  const height = model.get("height") || 500;
  const width = model.get("width") || 800;
  
  // Create main container with appropriate class for styling
  let container = document.createElement("div");
  container.className = "dd-scatter-container";

  // Apply theme immediately
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    container.classList.add('dark-theme');
  }

  // Create controls container for better layout
  let controls = document.createElement("div");
  controls.className = "dd-scatter-controls";
  container.appendChild(controls);
  
  // Generate the color selector buttons
  let colorSelector = document.createElement("div");
  colorSelector.className = "color-selector";
  colorSelector.style.marginBottom = "1rem";
  
  let colorLabel = document.createElement("div");
  colorLabel.innerText = "Class:";
  colorLabel.style.fontWeight = "600";
  colorLabel.style.marginBottom = "0.5rem";
  colorSelector.appendChild(colorLabel);
  
  let colorButtonsContainer = document.createElement("div");
  colorButtonsContainer.style.display = "flex";
  colorButtonsContainer.style.gap = "0.5rem";
  colorButtonsContainer.style.flexWrap = "wrap";
  
  let selectedClassButton = null;
  let selectedColor = colors[0];

  ["a", "b", "c", "d"].forEach(function(d, i) {
    let button = document.createElement("button");
    button.className = "class-button";
    button.setAttribute("data-class", d);
    button.setAttribute("data-color", colors[i]);
    button.setAttribute("aria-label", `Select class ${d}`);
    button.style.display = "flex";
    button.style.alignItems = "center";
    button.style.padding = "0.5rem 1rem";
    button.style.cursor = "pointer";
    button.style.border = "1px solid var(--dd-border-color)";
    button.style.borderRadius = "0.375rem";
    button.style.backgroundColor = "var(--dd-bg-color)";
    button.style.color = "var(--dd-text-color)";
    button.style.fontWeight = "500";
    button.style.transition = "all 0.15s ease";
    button.style.boxShadow = "0 1px 2px var(--dd-shadow-color)";
    
    // Add color dot
    let colorDot = document.createElement("span");
    colorDot.style.display = "inline-block";
    colorDot.style.width = "14px";
    colorDot.style.height = "14px";
    colorDot.style.borderRadius = "50%";
    colorDot.style.marginRight = "6px";
    colorDot.style.backgroundColor = colors[i];
    colorDot.style.border = "1px solid rgba(0,0,0,0.2)";
    
    button.appendChild(colorDot);
    button.appendChild(document.createTextNode(d));
    
    button.onclick = function() {
      // Remove active state from previous button
      if (selectedClassButton) {
        selectedClassButton.style.backgroundColor = "var(--dd-bg-color)";
        selectedClassButton.style.borderColor = "var(--dd-border-color)";
        selectedClassButton.style.color = "var(--dd-text-color)";
        selectedClassButton.style.boxShadow = "none";
      }
      
      // Set active state for current button using its own color
      selectedClassButton = button;
      selectedColor = colors[i];
      button.style.backgroundColor = colors[i];
      button.style.borderColor = colors[i];
      button.style.color = "white";
      button.style.boxShadow = `0 1px 2px ${colors[i]}80`; // Add 50% opacity to color
      
      // Update brush color
      circle_brush
        .style("fill", selectedColor)
        .style("fill-opacity", 0.3)
        .style("stroke", selectedColor)
        .style("stroke-width", 2);
    };
    
    colorButtonsContainer.appendChild(button);
    
    // Set first button as default selected
    if (i === 0) {
      selectedClassButton = button;
      button.click();
    }
  });
  
  colorSelector.appendChild(colorButtonsContainer);
  controls.appendChild(colorSelector);

  // Generate the brushsize selector
  let brushSizeContainer = document.createElement("div");
  brushSizeContainer.className = "brushsize-container";
  brushSizeContainer.style.marginBottom = "1rem";
  brushSizeContainer.style.padding = "0.75rem";
  brushSizeContainer.style.backgroundColor = "var(--dd-bg-color)";
  
  let brushSizeLabel = document.createElement("div");
  brushSizeLabel.innerText = "Brush Size:";
  brushSizeLabel.style.fontWeight = "600";
  brushSizeLabel.style.marginBottom = "0.75rem";
  brushSizeContainer.appendChild(brushSizeLabel);
  
  let sliderContainer = document.createElement("div");
  sliderContainer.style.display = "flex";
  sliderContainer.style.alignItems = "center";
  sliderContainer.style.gap = "0.75rem";
  
  let size_value = document.createElement("div");
  size_value.style.fontSize = "0.875rem";
  size_value.style.fontWeight = "500";
  size_value.style.minWidth = "2rem";
  size_value.style.textAlign = "center";
  size_value.innerText = model.get("brushsize");
  
  let size_input = document.createElement("input");
  size_input.setAttribute("type", "range");
  size_input.setAttribute("id", "size");
  size_input.setAttribute("name", "size");
  size_input.setAttribute("min", "5");
  size_input.setAttribute("max", "100");
  size_input.setAttribute("value", model.get("brushsize"));
  size_input.setAttribute("aria-label", "Adjust brush size");
  size_input.style.width = "100%";
  size_input.style.height = "6px";
  size_input.style.WebkitAppearance = "none";
  size_input.style.appearance = "none";
  size_input.style.background = "#e5e7eb";
  size_input.style.borderRadius = "9999px";
  size_input.style.outline = "none";
  size_input.style.cursor = "pointer";
  size_input.style.border = "none"; // Remove border as requested
  
  // Add specific styles for the thumb
  let thumbStyles = `
    #size::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--dd-primary-color, #3b82f6);
      border: 2px solid white;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      transition: background 0.15s ease;
    }
    #size::-moz-range-thumb {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: var(--dd-primary-color, #3b82f6);
      border: 2px solid white;
      cursor: pointer;
      box-shadow: 0 1px 3px rgba(0,0,0,0.2);
      transition: background 0.15s ease;
    }
  `;
  
  let style = document.createElement('style');
  style.textContent = thumbStyles;
  document.head.appendChild(style);
  
  size_input.oninput = function() {
    resize_brush();
    size_value.innerText = this.value;
  };
  
  sliderContainer.appendChild(size_input);
  sliderContainer.appendChild(size_value);
  brushSizeContainer.appendChild(sliderContainer);
  controls.appendChild(brushSizeContainer);

  // Generate the reset/undo buttons
  let buttonGroup = document.createElement("div");
  buttonGroup.className = "button-group";
  buttonGroup.style.display = "flex";
  buttonGroup.style.gap = "0.5rem";
  
  let reset_btn = document.createElement("button");
  reset_btn.setAttribute("id", "reset");
  reset_btn.setAttribute("aria-label", "Reset all data points");
  reset_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>&nbsp;Reset';
  reset_btn.style.fontWeight = "500";
  reset_btn.style.fontSize = "0.875rem";
  reset_btn.style.padding = "0.5rem 1rem";
  reset_btn.style.cursor = "pointer";
  reset_btn.style.border = "1px solid var(--dd-border-color)";
  reset_btn.style.borderRadius = "0.375rem";
  reset_btn.style.backgroundColor = "var(--dd-bg-color)";
  reset_btn.style.color = "var(--dd-text-color)";
  reset_btn.style.display = "inline-flex";
  reset_btn.style.alignItems = "center";
  reset_btn.style.transition = "all 0.15s ease";
  reset_btn.style.boxShadow = "0 1px 2px var(--dd-shadow-color)";
  
  reset_btn.onmouseover = function() {
    reset_btn.style.backgroundColor = "var(--dd-hover-color)";
    reset_btn.style.borderColor = "var(--dd-primary-color)";
  };
  
  reset_btn.onmouseout = function() {
    reset_btn.style.backgroundColor = "var(--dd-bg-color)";
    reset_btn.style.borderColor = "var(--dd-border-color)";
  };
  
  reset_btn.onclick = reset;
  buttonGroup.appendChild(reset_btn);

  let undo_btn = document.createElement("button");
  undo_btn.setAttribute("id", "undo");
  undo_btn.setAttribute("aria-label", "Undo last action");
  undo_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H4"></path></svg>&nbsp;Undo';
  undo_btn.style.fontWeight = "500";
  undo_btn.style.fontSize = "0.875rem";
  undo_btn.style.padding = "0.5rem 1rem";
  undo_btn.style.cursor = "pointer";
  undo_btn.style.border = "1px solid var(--dd-border-color)";
  undo_btn.style.borderRadius = "0.375rem";
  undo_btn.style.backgroundColor = "var(--dd-bg-color)";
  undo_btn.style.color = "var(--dd-text-color)";
  undo_btn.style.display = "inline-flex";
  undo_btn.style.alignItems = "center";
  undo_btn.style.transition = "all 0.15s ease";
  undo_btn.style.boxShadow = "0 1px 2px var(--dd-shadow-color)";
  
  undo_btn.onmouseover = function() {
    undo_btn.style.backgroundColor = "var(--dd-hover-color)";
    undo_btn.style.borderColor = "var(--dd-primary-color)";
  };
  
  undo_btn.onmouseout = function() {
    undo_btn.style.backgroundColor = "var(--dd-bg-color)";
    undo_btn.style.borderColor = "var(--dd-border-color)";
  };
  
  undo_btn.onclick = undo;
  buttonGroup.appendChild(undo_btn);
  
  controls.appendChild(buttonGroup);

  // Generate the widget that contains the counts
  let counts_div = document.createElement("div");
  counts_div.className = "counts";
  counts_div.style.display = "flex";
  counts_div.style.flexWrap = "wrap";
  counts_div.style.gap = "0.5rem";
  
  let count_spans = {};
  ["a", "b", "c", "d"].map(function(d, i) {
    let span = document.createElement("span");
    span.setAttribute("class", "count");
    span.setAttribute("data-color", d);
    span.setAttribute("aria-live", "polite");
    span.style.backgroundColor = colors[i];
    span.style.color = "white";
    span.style.fontWeight = "bold";
    span.style.padding = "0.25rem 0.75rem";
    span.style.borderRadius = "0.375rem";
    span.style.border = "1px solid rgba(0,0,0,0.2)";
    span.style.boxShadow = "0 1px 2px var(--dd-shadow-color)";
    span.style.display = "inline-flex";
    span.style.alignItems = "center";
    span.innerText = `${d}: 0`;
    count_spans[d] = span;
    counts_div.appendChild(span);
  });

  controls.appendChild(counts_div);
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
              .style("aspect-ratio", aspectRatio);
  
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
    
    // Add subtle axis labels
    svg.append("text")
       .attr("x", width / 2)
       .attr("y", height - 10)
       .attr("text-anchor", "middle")
       .attr("fill", "var(--dd-text-color, #111827)")
       .attr("opacity", 0.5)
       .attr("font-size", "12px")
       .text("X");
       
    svg.append("text")
       .attr("transform", "rotate(-90)")
       .attr("x", -height / 2)
       .attr("y", 15)
       .attr("text-anchor", "middle")
       .attr("fill", "var(--dd-text-color, #111827)")
       .attr("opacity", 0.5)
       .attr("font-size", "12px")
       .text("Y");
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
         .attr("r", 5)
         .style("fill", d.color)
         .style("stroke", "white")
         .style("stroke-width", 1.5)
         .style("opacity", 0.85)
         .attr("class", `batch_${d.batch || 0} drawn`);
    });

    update_counts();
  }

  redraw_from_scratch();
  
  // Set up model change handlers
  model.on("change:data", function() {
    data = model.get("data") || [];
    redraw_from_scratch();
  });

  model.on("change:brushsize", function() { 
    circle_brush.attr("r", size_input.value);
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
    .attr("r", model.get("brushsize"))
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
      let size = parseInt(size_input.value, 10);
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
    circle_brush.attr("r", size_input.value);
  }

  function add_point(new_x, new_y) {
    let label = color_map[selectedColor];
    svg
      .append("circle")
      .attr("cx", new_x)
      .attr("cy", new_y)
      .attr("r", 5)
      .style("fill", selectedColor)
      .style("stroke", "white")
      .style("stroke-width", 1.5)
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
    
    update_counts();
  }

  function dragged(event) {
    isDragging = true;
    // Use d3.pointer for more reliable coordinate detection
    const [x, y] = d3.pointer(event, svg.node());
    let size = parseInt(size_input.value, 10);
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
    update_counts();
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
      
      // Update model and UI
      model.set("data", grab_data());
      model.save_changes();
      update_counts();
    } catch (error) {
      console.error("Error in undo function:", error);
    }
  }

  function update_counts() {
    if (!data) return;
    
    ["a", "b", "c", "d"].map(function(d, i) {
      let count = data.filter(function(point) { 
        return point && point.color === colors[i]; 
      }).length;
      count_spans[d].innerText = `${d}: ${count}`;
    });
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