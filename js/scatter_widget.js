import * as d3 from "./d3.v7.js";

function render({ model, el }) {
  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
  const color_map = {"#1f77b4": "a", "#ff7f0e": "b", "#2ca02c": "c", "#d62728": "d"};
  const height = 500;
  const width = 800;
  
  // First we need to generate a whole bunch of HTML elements. 
  let container = document.createElement("div");

  // Generate the class selector
  let fieldset_radio = document.createElement("fieldset");
  fieldset_radio.setAttribute("style", "margin-left: 1px; display:inline");
  
  let legend_radio = document.createElement("legend");
  legend_radio.innerText = "Class:";  
  fieldset_radio.appendChild(legend_radio);

  let radio_buttons = {};
  
  function add_label_elem(parent, id){
    let label = document.createElement("label");
    label.setAttribute("for", id);
    label.setAttribute("style", "padding-left: 5px; display: inline-block; vertical-align: middle; margin-right: 0px;")
    if(id == "a"){
      label.setAttribute("style", "padding-left: 10px; display: inline-block; vertical-align: middle; margin-right: 0px;")
    }
    label.innerText = id;
    parent.appendChild(label);
  }

  ["a", "b", "c", "d"].map(function(d, i){
    let radio = document.createElement("input");
    radio.setAttribute("type", "radio");  
    radio.setAttribute("name", "colorselector");
    radio.setAttribute("value", i);
    radio.setAttribute("style", "vertical-align: middle;");
    if (i == 0){
      radio.setAttribute("checked", "true");
      radio.click()
    }
    add_label_elem(fieldset_radio, d);
    radio.onclick = function(){
      selected_color = colors[i];
    }
    radio_buttons[d] = radio;
    fieldset_radio.appendChild(radio);
  });

  container.appendChild(fieldset_radio);

  // Generate the brushsize selector
  let fieldset_size = document.createElement("fieldset");
  fieldset_size.setAttribute("style", "width: 200px; margin: 10px; display:inline");

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
  size_input.setAttribute("style", "display:inline; width: 150px; margin: 0;");
  size_input.onchange = resize_brush;
  size_input.oninput = resize_brush;

  fieldset_size.appendChild(size_input);
  container.appendChild(fieldset_size);

  // Generate the reset/undo buttons
  let reset_btn = document.createElement("button");
  reset_btn.setAttribute("id", "reset");
  reset_btn.setAttribute("class", "toolbarbtn");
  reset_btn.setAttribute("style", "display:inline");
  reset_btn.innerText = "Reset";
  reset_btn.onclick = reset;
  container.appendChild(reset_btn);

  let undo_btn = document.createElement("button");
  undo_btn.setAttribute("id", "undo");
  undo_btn.setAttribute("class", "toolbarbtn");
  undo_btn.setAttribute("style", "display:inline");
  undo_btn.innerText = "Undo";
  undo_btn.onclick = undo;
  container.appendChild(undo_btn);

  // Generate the widget that contains the counts
  let div = document.createElement("div");
  div.setAttribute("style", "display:inline; padding-left: 10px;");
  
  let count_spans = {};
  ["a", "b", "c", "d"].map(function(d, i){
    let background_colors = ["#a4c8e0", "#ffcb9e", "#aad8aa", "#eea8a8"]
    let span = document.createElement("span");
    span.setAttribute("style", `background-color: ${background_colors[i]}`)
    span.innerText = `${d}: 0`;
    span.setAttribute("class", "count")
    count_spans[d] = span;
    div.appendChild(span);
  });

  container.appendChild(div);
  el.appendChild(container);

  let data = model.get("data");
  let svg = d3.select(container).append("svg").style("display", "block").style("cursor", "crosshair");
  let selected_color = colors[0];
  let batch = 0;

  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", "#eeeeee")
    .call(
      d3.drag().on("start", drag_start).on("drag", dragged).on("end", drag_end)
    )
    .on("mousemove", mousemove);

  function redraw_from_scratch(){
    svg.selectAll("circle.drawn").remove();

    data.map(function(d){
      svg
          .append("circle")
          .attr("cx", d.x)
          .attr("cy", height - d.y)
          .attr("r", 4)
          .style("fill", d.color)
          .attr("class", `batch_${d.batch} drawn`);
    });

    update_counts();
  }

  redraw_from_scratch();
  model.on("change:data", function(){
    update_counts();
  });

  model.on("change:brushsize", function(){ 
    circle_brush.attr("r", size_input.value)
  })

  let circle_brush = svg
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", model.get("brushsize"))
    .style("fill-opacity", 0.1);

  function drag_start(event) {
    // You could restart the browser and the HTML may remember the
    // checked state without the JS knowing about it. Hence this check.
    ["a", "b", "c", "d"].map(function (d, i) {
      if (radio_buttons[d].checked) {
        selected_color = colors[i];
      }
    });
  }

  function mousemove(event) {
    // The brush needs to move along with the mouse
    let rect = svg.node().getBoundingClientRect();
    circle_brush
      .attr("cx", event.pageX - rect["x"] + "px")
      .attr("cy", event.pageY - rect["top"] + "px");
  }

  function resize_brush() {
    // We want the paintbrush to show the size param, hence this update
    model.set("brushsize", Number(size_input.value));
  }

  function dragged(event) {
    // Add new datapoints to the screen, but not to the datastore just yet
    let r1 = container.getBoundingClientRect();
    let r2 = svg.node().getBoundingClientRect();
    let size = size_input.value;
    let new_x = event.x + (Math.random() - 0.5) * size;
    let corrected_y = event.y - (r2.y - r1.y);
    let new_y = corrected_y + (Math.random() - 0.5) * size;
    let label = color_map[selected_color];
    svg
      .append("circle")
      .attr("cx", new_x)
      .attr("cy", new_y)
      .attr("r", 4)
      .style("fill", selected_color)
      .attr("class", `batch_${batch} drawn`);
    data.push({ x: new_x, y: height - new_y, color: selected_color, label: label, batch: batch });
    circle_brush.attr("cx", event.x + "px").attr("cy", corrected_y + "px");
  }

  function drag_end(event) {
    // The `model.save_changes` method might be depending on what we've
    // drawn, so we only run it once dragging is done. Saves bunch of compute!
    model.set("data", grab_data());
    model.save_changes();
    batch = Math.max(...data.map(function(d){return d.batch }), 0 ) + 1;
    update_counts();
  }

  function grab_data() {
    // We need to account for the fact that we draw the y-axis other way around in svg land
    return data.map(function(d){return { x: d.x, y: d.y, color: d.color, label: d.label }});
  }

  function reset() {
    data = [];
    model.set("data", []);
    model.save_changes();
    svg.selectAll("circle.drawn").remove();
    update_counts();
  }

  function undo(){
    let batch = Math.max(...data.map(function(d){return d.batch }), 0 );
    d3.selectAll(`circle.batch_${batch}`).remove();
    data = data.filter(function(d){return d.batch != batch});
    model.set("data", grab_data());
    model.save_changes();
    update_counts();
  }

  function update_counts(){
    ["a", "b", "c", "d"].map(function(d, i){
      let count = data.filter(function(d){return d.color == colors[i]}).length;
      count_spans[d].innerText = `${d}: ${count}`
    })
  }

  return () => {
    d3.select(container).remove();
  }
}

export default { render };
