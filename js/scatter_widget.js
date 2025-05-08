import * as d3 from "./d3.v7.js";

function render({ model, el }) {
  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
  const color_map = {"#1f77b4": "a", "#ff7f0e": "b", "#2ca02c": "c", "#d62728": "d"};
  const height = model.get("height") || 500;
  const width = model.get("width") || 800;
  
  // Create main container with appropriate class for styling
  let container = document.createElement("div");
  container.className = "dd-scatter-container";

  // Create controls container for better layout
  let controls = document.createElement("div");
  controls.className = "dd-scatter-controls";
  container.appendChild(controls);
  
  // Generate the class selector
  let fieldset_radio = document.createElement("fieldset");
  fieldset_radio.className = "class-selector";
  
  let legend_radio = document.createElement("legend");
  legend_radio.innerText = "Class:";  
  fieldset_radio.appendChild(legend_radio);

  let radio_buttons = {};
  
  function add_label_elem(parent, id) {
    let label = document.createElement("label");
    label.setAttribute("for", id);
    label.innerText = id;
    parent.appendChild(label);
  }

  ["a", "b", "c", "d"].map(function(d, i) {
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");  
    radio.setAttribute("name", "colorselector");
    radio.setAttribute("value", i);
    if (i == 0) {
      radio.setAttribute("checked", "true");
      radio.click();
    }
    add_label_elem(fieldset_radio, d);
    radio.onclick = function() {
      selected_color = colors[i];
    };
    radio_buttons[d] = radio;
    fieldset_radio.appendChild(radio);
  });

  controls.appendChild(fieldset_radio);

  // Generate the brushsize selector
  let fieldset_size = document.createElement("fieldset");
  fieldset_size.className = "brushsize-selector";

  let legend_size = document.createElement("legend");
  legend_size.innerText = "Brushsize:";
  fieldset_size.appendChild(legend_size);

  let size_input = document.createElement("input");
  size_input.setAttribute("type", "range");
  size_input.setAttribute("id", "size");
  size_input.setAttribute("name", "size");
  size_input.setAttribute("min", "5");
  size_input.setAttribute("max", "100");
  size_input.setAttribute("value", model.get("brushsize"));
  size_input.onchange = resize_brush;
  size_input.oninput = resize_brush;

  fieldset_size.appendChild(size_input);
  controls.appendChild(fieldset_size);

  // Generate the reset/undo buttons
  let buttonGroup = document.createElement("div");
  buttonGroup.className = "button-group";
  
  let reset_btn = document.createElement("button");
  reset_btn.setAttribute("id", "reset");
  reset_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>&nbsp;Reset';
  reset_btn.onclick = reset;
  buttonGroup.appendChild(reset_btn);

  let undo_btn = document.createElement("button");
  undo_btn.setAttribute("id", "undo");
  undo_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H4"></path></svg>&nbsp;Undo';
  undo_btn.onclick = undo;
  buttonGroup.appendChild(undo_btn);
  
  controls.appendChild(buttonGroup);

  // Generate the widget that contains the counts
  let counts_div = document.createElement("div");
  counts_div.className = "counts";
  
  let count_spans = {};
  ["a", "b", "c", "d"].map(function(d, i) {
    let span = document.createElement("span");
    span.setAttribute("class", "count");
    span.setAttribute("data-color", d);
    span.innerText = `${d}: 0`;
    count_spans[d] = span;
    counts_div.appendChild(span);
  });

  controls.appendChild(counts_div);
  el.appendChild(container);

  let data = model.get("data");
  
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
              // Set height based on container width and aspect ratio for better consistency
              .style("aspect-ratio", aspectRatio);
  
  let selected_color = colors[0];
  let batch = 0;
  let isDragging = false;

  // Remove style attributes and use CSS classes instead
  svg.attr("class", "dd-scatter-svg")
     .call(d3.drag().on("start", drag_start).on("drag", dragged).on("end", drag_end))
     .on("click", mouseclick)
     .on("mousemove", mousemove);
     
  // Add grid lines for better orientation
  function createGrid() {
    // Add gridlines for x-axis
    for (let i = 0; i <= width; i += 100) {
      svg.append("line")
         .attr("x1", i)
         .attr("y1", 0)
         .attr("x2", i)
         .attr("y2", height)
         .attr("stroke", "var(--dd-border-color)")
         .attr("stroke-width", i % 200 === 0 ? 0.75 : 0.5)
         .attr("opacity", i % 200 === 0 ? 0.4 : 0.2);
    }
    
    // Add gridlines for y-axis
    for (let i = 0; i <= height; i += 100) {
      svg.append("line")
         .attr("x1", 0)
         .attr("y1", i)
         .attr("x2", width)
         .attr("y2", i)
         .attr("stroke", "var(--dd-border-color)")
         .attr("stroke-width", i % 200 === 0 ? 0.75 : 0.5)
         .attr("opacity", i % 200 === 0 ? 0.4 : 0.2);
    }
  }
  
  createGrid();

  function redraw_from_scratch() {
    svg.selectAll("circle.drawn").remove();

    data.map(function(d) {
      svg.append("circle")
         .attr("cx", d.x)
         .attr("cy", height - d.y)
         .attr("r", 5) // Slightly larger dots
         .style("fill", d.color)
         .style("stroke", "white") // Add white stroke for better visibility
         .style("stroke-width", 1.5)
         .style("opacity", 0.85) // Slight transparency
         .attr("class", `batch_${d.batch} drawn`);
    });

    update_counts();
  }

  redraw_from_scratch();
  model.on("change:data", function() {
    update_counts();
  });

  model.on("change:brushsize", function() { 
    circle_brush.attr("r", size_input.value);
  });

  // Setup responsive handling
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
    
    // Redraw to account for new dimensions if needed
    if (data.length > 0) {
      redraw_from_scratch();
    }
  }

  let circle_brush = svg
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", model.get("brushsize"))
    .style("fill", "var(--dd-primary-color)")
    .style("fill-opacity", 0.15)
    .style("stroke", "var(--dd-primary-color)")
    .style("stroke-width", 1.5)
    .style("stroke-opacity", 0.6);

  function drag_start(event) {
    isDragging = false;
    // You could restart the browser and the HTML may remember the
    // checked state without the JS knowing about it. Hence this check.
    ["a", "b", "c", "d"].map(function (d, i) {
      if (radio_buttons[d].checked) {
        selected_color = colors[i];
      }
    });
  }

  function mousemove(event) {
    // Improved coordinates calculation for consistency across environments
    let coords = getCoordinates(event);
    update_brush(coords.x, coords.y);
  }

  function mouseclick(event) {
    if (!isDragging) {
      let coords = getCoordinates(event);
      let size = size_input.value;
      let new_x = coords.x + (Math.random() - 0.5) * size;
      let new_y = coords.y + (Math.random() - 0.5) * size;
      add_point(new_x, new_y);
      finish_batch();
    }
  }

  // Improved coordinates calculation for better cross-environment consistency
  function getCoordinates(event) {
    // Get SVG element position relative to viewport
    const svgRect = svg.node().getBoundingClientRect();
    
    // Calculate relative position within SVG
    // This uses clientX/Y which are more consistent across browsers than pageX/Y
    const relativeX = event.clientX - svgRect.left;
    const relativeY = event.clientY - svgRect.top;
    
    // Get current SVG dimensions (may be different than original width/height due to resizing)
    const currentWidth = model.get("width") || width;
    const currentHeight = model.get("height") || height;
    
    // Scale coordinates to SVG viewBox dimensions
    const scaleX = currentWidth / svgRect.width;
    const scaleY = currentHeight / svgRect.height;
    
    return {
      x: relativeX * scaleX,
      y: relativeY * scaleY
    };
  }

  function update_brush(x, y) {
    circle_brush
      .attr("cx", x)
      .attr("cy", y);
  }

  function resize_brush() {
    // We want the paintbrush to show the size param, hence this update
    model.set("brushsize", Number(size_input.value));
  }

  function add_point(new_x, new_y) {
    let label = color_map[selected_color];
    svg
      .append("circle")
      .attr("cx", new_x)
      .attr("cy", new_y)
      .attr("r", 5) // Slightly larger dots
      .style("fill", selected_color)
      .style("stroke", "white") // Add white stroke for better visibility
      .style("stroke-width", 1.5)
      .style("opacity", 0.85) // Slight transparency
      .attr("class", `batch_${batch} drawn`);
    data.push({ x: new_x, y: height - new_y, color: selected_color, label: label, batch: batch });
  }

  function finish_batch() {
    // The `model.save_changes` method might be depending on what we've
    // drawn, so we only run it once dragging is done. Saves bunch of compute!
    model.set("data", grab_data());
    model.save_changes();
    batch = Math.max(...data.map(function(d) { return d.batch; }, 0)) + 1;
    update_counts();
  }

  function dragged(event) {
    isDragging = true;
    // Improved coordinate handling
    let coords = getCoordinates(event);
    let size = size_input.value;
    let new_x = coords.x + (Math.random() - 0.5) * size;
    let new_y = coords.y + (Math.random() - 0.5) * size;
    add_point(new_x, new_y);
    update_brush(coords.x, coords.y);
  }

  function drag_end(event) {
    finish_batch();
  }

  function grab_data() {
    // We need to account for the fact that we draw the y-axis other way around in svg land
    return data.map(function(d) { return { x: d.x, y: d.y, color: d.color, label: d.label }; });
  }

  function reset() {
    data = [];
    model.set("data", []);
    model.save_changes();
    svg.selectAll("circle.drawn").remove();
    update_counts();
  }

  function undo() {
    let batch = Math.max(...data.map(function(d) { return d.batch; }, 0));
    d3.selectAll(`circle.batch_${batch}`).remove();
    data = data.filter(function(d) { return d.batch != batch; });
    model.set("data", grab_data());
    model.save_changes();
    update_counts();
  }

  function update_counts() {
    ["a", "b", "c", "d"].map(function(d, i) {
      let count = data.filter(function(d) { return d.color == colors[i]; }).length;
      count_spans[d].innerText = `${d}: ${count}`;
    });
  }

  return () => {
    d3.select(container).remove();
  };
}

export default { render };