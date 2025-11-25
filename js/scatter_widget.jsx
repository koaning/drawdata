import * as React from "react";
import { useRef, useEffect, useState, useCallback } from "react";
import { createRender, useModelState } from "@anywidget/react";
import { Slider, ToggleGroup } from "radix-ui";
import * as d3 from "d3";

// Color configuration
const COLORS = ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728"];
const CLASSES = ["a", "b", "c", "d"];
const COLOR_MAP = {
  "#1f77b4": "a",
  "#ff7f0e": "b",
  "#2ca02c": "c",
  "#d62728": "d"
};

function ScatterCanvas({
  data,
  width,
  height,
  brushSize,
  selectedColor,
  onDataChange
}) {
  const svgRef = useRef(null);
  const brushRef = useRef(null);
  const batchRef = useRef(0);
  const isDraggingRef = useRef(false);
  const localDataRef = useRef(data || []);

  // Keep local data in sync with prop
  useEffect(() => {
    localDataRef.current = data || [];
  }, [data]);

  // Initialize D3 SVG
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Create grid - uses CSS custom properties for theming
    const grid = svg.append("g").attr("class", "grid-lines");

    for (let i = 0; i <= width; i += 100) {
      grid.append("line")
        .attr("x1", i).attr("y1", 0)
        .attr("x2", i).attr("y2", height)
        .attr("stroke", "var(--widget-grid)")
        .attr("stroke-width", i % 200 === 0 ? 0.75 : 0.5)
        .attr("opacity", i % 200 === 0 ? 0.4 : 0.2);
    }

    for (let i = 0; i <= height; i += 100) {
      grid.append("line")
        .attr("x1", 0).attr("y1", i)
        .attr("x2", width).attr("y2", i)
        .attr("stroke", "var(--widget-grid)")
        .attr("stroke-width", i % 200 === 0 ? 0.75 : 0.5)
        .attr("opacity", i % 200 === 0 ? 0.4 : 0.2);
    }

    // Axis labels
    svg.append("text")
      .attr("x", width / 2).attr("y", height - 10)
      .attr("text-anchor", "middle")
      .attr("fill", "var(--widget-text-muted)")
      .attr("opacity", 0.5)
      .attr("font-size", "12px").text("X");

    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2).attr("y", 15)
      .attr("text-anchor", "middle")
      .attr("fill", "var(--widget-text-muted)")
      .attr("opacity", 0.5)
      .attr("font-size", "12px").text("Y");

    // Points group
    svg.append("g").attr("class", "points");

    // Brush indicator
    brushRef.current = svg.append("circle")
      .attr("cx", width / 2).attr("cy", height / 2)
      .attr("r", brushSize)
      .style("fill", selectedColor)
      .style("fill-opacity", 0.3)
      .style("stroke", selectedColor)
      .style("stroke-width", 2)
      .style("stroke-opacity", 0.9)
      .attr("class", "brush-indicator");

  }, [width, height]);

  // Update brush appearance
  useEffect(() => {
    if (brushRef.current) {
      brushRef.current
        .attr("r", brushSize)
        .style("fill", selectedColor)
        .style("stroke", selectedColor);
    }
  }, [brushSize, selectedColor]);

  // Redraw points when data changes
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const pointsGroup = svg.select(".points");
    pointsGroup.selectAll("circle").remove();

    if (!data) return;

    data.forEach(d => {
      pointsGroup.append("circle")
        .attr("cx", d.x)
        .attr("cy", height - d.y)
        .attr("r", 5)
        .style("fill", d.color)
        .style("stroke", "white")
        .style("stroke-width", 1.5)
        .style("opacity", 0.85)
        .attr("class", `batch_${d.batch || 0}`);
    });
  }, [data, height]);

  // Add point helper
  const addPoint = useCallback((x, y) => {
    const label = COLOR_MAP[selectedColor];
    const svg = d3.select(svgRef.current);
    const pointsGroup = svg.select(".points");

    pointsGroup.append("circle")
      .attr("cx", x).attr("cy", y)
      .attr("r", 5)
      .style("fill", selectedColor)
      .style("stroke", "white")
      .style("stroke-width", 1.5)
      .style("opacity", 0.85)
      .attr("class", `batch_${batchRef.current}`);

    localDataRef.current.push({
      x: x,
      y: height - y,
      color: selectedColor,
      label: label,
      batch: batchRef.current
    });
  }, [selectedColor, height]);

  // Finish batch and sync with model
  const finishBatch = useCallback(() => {
    onDataChange([...localDataRef.current]);

    if (localDataRef.current.length > 0) {
      const maxBatch = Math.max(...localDataRef.current.map(d => d.batch || 0));
      batchRef.current = maxBatch + 1;
    }
  }, [onDataChange]);

  // Mouse/drag handlers
  const handleMouseMove = useCallback((event) => {
    if (!svgRef.current || !brushRef.current) return;
    const [x, y] = d3.pointer(event, svgRef.current);
    brushRef.current.attr("cx", x).attr("cy", y);
  }, []);

  const handleClick = useCallback((event) => {
    if (isDraggingRef.current) return;
    const [x, y] = d3.pointer(event, svgRef.current);
    const newX = x + (Math.random() - 0.5) * brushSize;
    const newY = y + (Math.random() - 0.5) * brushSize;
    addPoint(newX, newY);
    finishBatch();
  }, [brushSize, addPoint, finishBatch]);

  const handleDragStart = useCallback(() => {
    isDraggingRef.current = false;
  }, []);

  const handleDrag = useCallback((event) => {
    isDraggingRef.current = true;
    const [x, y] = d3.pointer(event, svgRef.current);
    const newX = x + (Math.random() - 0.5) * brushSize;
    const newY = y + (Math.random() - 0.5) * brushSize;
    addPoint(newX, newY);
    if (brushRef.current) {
      brushRef.current.attr("cx", x).attr("cy", y);
    }
  }, [brushSize, addPoint]);

  const handleDragEnd = useCallback(() => {
    finishBatch();
  }, [finishBatch]);

  // Set up D3 drag behavior
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    svg
      .call(d3.drag()
        .on("start", handleDragStart)
        .on("drag", handleDrag)
        .on("end", handleDragEnd))
      .on("click", handleClick)
      .on("mousemove", handleMouseMove);

    return () => {
      svg.on(".drag", null).on("click", null).on("mousemove", null);
    };
  }, [handleClick, handleDrag, handleDragEnd, handleDragStart, handleMouseMove]);

  return (
    <svg
      ref={svgRef}
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-auto cursor-crosshair rounded-lg"
      style={{
        aspectRatio: `${width}/${height}`,
        backgroundColor: "var(--widget-bg)",
        border: "1px solid var(--widget-border)"
      }}
    />
  );
}

function ScatterWidget() {
  const [data, setData] = useModelState("data");
  const [brushSize, setBrushSize] = useModelState("brushsize");
  const [width] = useModelState("width");
  const [height] = useModelState("height");

  const [selectedClass, setSelectedClass] = useState("a");
  const selectedColor = COLORS[CLASSES.indexOf(selectedClass)];

  // Count points per class
  const counts = CLASSES.reduce((acc, cls, i) => {
    acc[cls] = (data || []).filter(d => d.color === COLORS[i]).length;
    return acc;
  }, {});

  const handleReset = () => {
    setData([]);
  };

  const handleUndo = () => {
    if (!data || data.length === 0) return;
    const maxBatch = Math.max(...data.map(d => d.batch || 0));
    setData(data.filter(d => (d.batch || 0) !== maxBatch));
  };

  return (
    <div
      className="p-4 flex flex-col gap-4"
      style={{ color: "var(--widget-text)" }}
    >
      {/* Controls row - all on one line */}
      <div className="flex flex-wrap gap-4 items-end">
        {/* Class selector */}
        <div>
          <div className="text-sm font-semibold mb-2">
            Class:
          </div>
          <ToggleGroup.Root
            type="single"
            value={selectedClass}
            onValueChange={(value) => value && setSelectedClass(value)}
            className="inline-flex"
          >
            {CLASSES.map((cls, i) => (
              <ToggleGroup.Item
                key={cls}
                value={cls}
                className="px-4 py-2 cursor-pointer inline-flex items-center gap-2 first:rounded-l last:rounded-r"
                style={{
                  backgroundColor: selectedClass === cls ? COLORS[i] : "var(--widget-bg-elevated)",
                  color: selectedClass === cls ? "white" : "var(--widget-text)",
                  border: "1px solid var(--widget-border)"
                }}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/20"
                  style={{ backgroundColor: COLORS[i] }}
                />
                {cls}
              </ToggleGroup.Item>
            ))}
          </ToggleGroup.Root>
        </div>

        {/* Brush size slider */}
        <div className="min-w-[150px]">
          <div className="text-sm font-semibold mb-2">
            Brush Size: {brushSize}
          </div>
          <Slider.Root
            value={[brushSize]}
            onValueChange={([value]) => setBrushSize(value)}
            min={5}
            max={100}
            step={1}
            className="relative flex items-center w-full h-5"
          >
            <Slider.Track
              className="relative grow h-1 rounded-full"
              style={{ backgroundColor: "var(--widget-border)" }}
            >
              <Slider.Range className="absolute bg-blue-500 h-full rounded-full" />
            </Slider.Track>
            <Slider.Thumb className="block w-4 h-4 bg-blue-500 rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-300" />
          </Slider.Root>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded cursor-pointer"
            style={{
              backgroundColor: "var(--widget-bg-elevated)",
              color: "var(--widget-text)",
              border: "1px solid var(--widget-border)"
            }}
          >
            Reset
          </button>
          <button
            onClick={handleUndo}
            className="px-4 py-2 rounded cursor-pointer"
            style={{
              backgroundColor: "var(--widget-bg-elevated)",
              color: "var(--widget-text)",
              border: "1px solid var(--widget-border)"
            }}
          >
            Undo
          </button>
        </div>

        {/* Counts - hidden on small screens, shown on lg+ */}
        <div className="hidden lg:flex gap-2 ml-auto">
          {CLASSES.map((cls, i) => (
            <span
              key={cls}
              className="text-white font-bold py-2 px-3 rounded text-sm"
              style={{ backgroundColor: COLORS[i] }}
            >
              {cls}: {counts[cls]}
            </span>
          ))}
        </div>
      </div>

      {/* Canvas */}
      <ScatterCanvas
        data={data}
        width={width || 800}
        height={height || 500}
        brushSize={brushSize || 40}
        selectedColor={selectedColor}
        onDataChange={setData}
      />
    </div>
  );
}

const render = createRender(ScatterWidget);

export default { render };
