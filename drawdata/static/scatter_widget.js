import * as d3 from "https://esm.sh/d3@7";

function render({ model, el }) {
  let container = document.createElement("div");
  container.setAttribute("id", "drawhere");
  container.innerHTML = `
    <fieldset style="width: 200px; margin: 10px; display:inline">
    <legend>Class:</legend>
    <input type="radio" id="a" name="drone" value="0" checked onchange="selected_color = colors[0]" />
    <label for="a">a</label>
    <input type="radio" id="b" name="drone" value="1" onchange="selected_color = colors[1]" />
    <label for="b">b</label>
    <input type="radio" id="c" name="drone" value="2" onchange="selected_color = colors[2]"/>
    <label for="c">c</label>
    <input type="radio" id="d" name="drone" value="3" onchange="selected_color = colors[3]"/>
    <label for="d">d</label>
    </fieldset>
    <fieldset style="width: 200px; margin: 10px; display:inline">
    <legend>Brushsize:</legend>
    <input type='range' id='size' name='size' min='5' max='100' value='10' style="display:inline"/>
    </fieldset>                     
    <button id="reset" style="display:inline">Reset</button>
    <button id="undo" style="display:inline">Undo</button>
    <p style="display:inline">
      a: <span id="count_a">0</span>
      b: <span id="count_b">0</span>
      c: <span id="count_c">0</span>
      d: <span id="count_d">0</span>
    </p>
    <br><br>
    <div id="drawhere">
        <svg id="svg"></svg>
    </div>
    `;
  el.appendChild(container);

  const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
  const height = 500;
  const width = 800;

  let data = [];
  let svg = d3.select("#svg")
  let selected_color = colors[0];
  let brush_size = Number(document.getElementById("size").value);
  let batch = 0;

  svg
    .attr("width", width)
    .attr("height", height)
    .style("background", "#eeeeee")
    .call(
      d3.drag().on("start", drag_start).on("drag", dragged).on("end", drag_end)
    )
    .on("mousemove", mousemove);

  let circle_brush = svg
    .append("circle")
    .attr("cx", width / 2)
    .attr("cy", height / 2)
    .attr("r", brush_size)
    .style("fill-opacity", 0.1);

  function drag_start(event) {
    // You could restart the browser and the HTML may remember the
    // checked state without the JS knowing about it. Hence this check.
    ["a", "b", "c", "d"].map(function (d, i) {
      if (document.getElementById(d).checked) {
        selected_color = colors[i];
      }
    });
  }

  function mousemove(event) {
    // The brush needs to move along with the mouse
    let rect = document.getElementById("svg").getBoundingClientRect();
    circle_brush
      .attr("cx", event.pageX - rect["x"] + "px")
      .attr("cy", event.pageY - rect["top"] + "px");
  }

  function resize_brush() {
    // We want the paintbrush to show the size param, hence this update
    circle_brush.attr("r", document.getElementById("size").value);
  }

  function dragged(event) {
    // Add new datapoints to the screen, but not to the datastore just yet
    let size = Number(document.getElementById("size").value);
    let new_x = event.x + (Math.random() - 0.5) * size;
    let corrected_y = event.y;
    let new_y = corrected_y + (Math.random() - 0.5) * size;
    svg
      .append("circle")
      .attr("cx", new_x)
      .attr("cy", new_y)
      .attr("r", 4)
      .style("fill", selected_color)
      .attr("class", `batch_${batch} drawn`);
    data.push({ x: new_x, y: new_y, color: selected_color, batch: batch });
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
    return data.map(function(d){return { x: d.x, y: height - d.y, color: d.color }});
  }

  function reset() {
    data = [];
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
    document.getElementById("count_a").innerText = data.filter(function(d){return d.color == colors[0]}).length
    document.getElementById("count_b").innerText = data.filter(function(d){return d.color == colors[1]}).length
    document.getElementById("count_c").innerText = data.filter(function(d){return d.color == colors[2]}).length
    document.getElementById("count_d").innerText = data.filter(function(d){return d.color == colors[3]}).length
  }

  // These have to be declared from JS, we can't apply it via the `innerHTML` trick.
  document.getElementById("size").onchange = resize_brush;
  document.getElementById("size").oninput = resize_brush;
  document.getElementById("reset").onclick = reset;
  document.getElementById("undo").onclick = undo;

  return () => {
    d3.select("#drawhere").remove();
  }
}

export default { render };
