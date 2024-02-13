import * as d3 from "https://esm.sh/d3@7";

function render({ model, el }) {
    let container = document.createElement("div");
    container.setAttribute("id", "drawhere")
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
    <input type='range' id='size' name='size' min='5' max='100' style="display:inline"/>
    </fieldset>                     
    <button id="reset" style="display:inline" onclick="reset()">Reset</button>
    <br><br>
    <div id="drawhere">
    </div>
    `
    el.appendChild(container);
    
    const colors = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
    const height = 500;
    const width = 800;
    let data = [];
    let svg = d3.select("#drawhere").append("svg").attr("id", "svg");
    let selected_color = colors[0];
    let brush_size = Number(document.getElementById("size").value);
    
    svg.attr("width", width)
    .attr("height", height)
    .style("background", "#eeeeee")
    .call(d3.drag().on("start", drag_start).on("drag", dragged).on("end", drag_end))
    .on("mousemove", mousemove);
    
    let circle = svg.append("circle")
    .attr("cx", width/2)
    .attr("cy", height/2)
    .attr("r", brush_size)
    .style("fill-opacity", 0.1)
    .style("stroke", "black");
    
    function drag_start(event){
        // You could restart the browser and the HTML may remember the 
        // checked state without the JS knowing about it. Hence this check.
        ["a", "b", "c", "d"].map(function(d, i){
            if(document.getElementById(d).checked){
                selected_color = colors[i];
            }
        })
    }
    
    function mousemove(event) {
        // The brush needs to move along with the mouse
        let rect = document.getElementById("svg").getBoundingClientRect();
        circle.attr("cx", (event.pageX - rect['x']) + "px").attr("cy", (event.pageY - rect['y']) + "px");
    }
    
    function resize_brush(){
        // We want the paintbrush to show the size param, hence this update
        circle.attr("r", document.getElementById("size").value)
    }
    
    function dragged(event) {
        // Add new datapoints to the screen, but not to the datastore just yet
        let size = Number(document.getElementById("size").value);
        let new_x = event.x + (Math.random() - 0.5) * size;
        let new_y = event.y + (Math.random() - 0.5) * size;
        svg.append("circle").attr("class", "drawn").attr("cx", new_x).attr("cy", new_y).attr("r", 4).style("fill", selected_color);
        data.push({x: new_x, y: new_y, color: selected_color})
        circle.attr("cx", event.x + "px").attr("cy", event.y + "px")
    }

    function drag_end(event){
        // This operation might be expensive, so only do it once dragging is done
        model.set("data", grab_data());
        model.save_changes();
    }
    
    function make_data_usable(d){
        // We need to account for the fact that we draw the y-axis other way around in svg land
        return {x: d.x,  y: height - d.y, color: d.color}
    }
    
    function grab_data(){
        return data.map(make_data_usable);
    }
    
    function reset(){
        data = [];
        svg.selectAll("circle.drawn").remove()
    }
    
    // These have to be declared from JS, we can't apply it via the `innerHTML` trick.
    document.getElementById("size").onchange = resize_brush;
    document.getElementById("size").oninput = resize_brush;
    document.getElementById("reset").onclick = reset;
}

export default { render };