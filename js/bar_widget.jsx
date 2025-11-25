import * as React from "react";
import { useRef, useEffect, useState, useCallback } from "react";
import { createRender, useModelState } from "@anywidget/react";
import { ToggleGroup } from "radix-ui";
import * as d3 from "d3";

const COLORS = ["#36A2EB", "#FFCE56", "#4BC0C0", "#FF6384"];

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

function BarCanvas({
  collections,
  activeCollection,
  width,
  height,
  nBins,
  yMin,
  yMax,
  onCollectionUpdate
}) {
  const svgRef = useRef(null);
  const isDrawingRef = useRef(false);

  const margin = { top: 20, right: 30, bottom: 30, left: 60 };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;

  // Create scales
  const xScale = d3.scaleBand()
    .range([0, innerWidth])
    .padding(0.1)
    .domain(d3.range(nBins));

  const yScale = d3.scaleLinear()
    .range([innerHeight, 0])
    .domain([Math.min(yMin, 0), yMax]);

  // Update value based on mouse position
  const updateValue = useCallback((event) => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const g = svg.select(".chart-area");
    const [xPos, yPos] = d3.pointer(event, g.node());

    const binIndex = Math.floor(nBins * xPos / innerWidth);
    const value = yScale.invert(yPos);

    if (binIndex >= 0 && binIndex < nBins) {
      const clampedValue = Math.max(yMin, Math.min(yMax, value));
      onCollectionUpdate(activeCollection, binIndex, clampedValue);
    }
  }, [activeCollection, innerWidth, nBins, yMin, yMax, yScale, onCollectionUpdate]);

  // Initialize and update chart
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    // Main group with margin
    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    // Grid
    const grid = g.append("g").attr("class", "grid");
    yScale.ticks(10).forEach(tick => {
      grid.append("line")
        .attr("x1", 0).attr("x2", innerWidth)
        .attr("y1", yScale(tick)).attr("y2", yScale(tick))
        .attr("stroke", "#ddd")
        .attr("stroke-opacity", 0.7);
    });

    // X axis
    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(xScale)
        .tickValues(xScale.domain().filter((d, i) => {
          const interval = Math.ceil(nBins / 10);
          return i % interval === 0;
        })));

    // Y axis
    g.append("g")
      .call(d3.axisLeft(yScale)
        .ticks(10)
        .tickFormat(formatAxisNumber));

    // Bars groups for each collection
    Object.keys(collections).forEach(key => {
      g.append("g").attr("class", `bars-${key}`);
    });

    // Chart border
    g.append("rect")
      .attr("width", innerWidth)
      .attr("height", innerHeight)
      .attr("fill", "none")
      .attr("stroke", "#000")
      .attr("stroke-width", 1);

    // Interaction overlay
    g.append("rect")
      .attr("class", "chart-area")
      .attr("width", innerWidth)
      .attr("height", innerHeight)
      .attr("fill", "none")
      .attr("pointer-events", "all");

  }, [width, height, nBins, yMin, yMax, innerWidth, innerHeight, margin.left, margin.top, xScale, yScale, collections]);

  // Update bars when collections change
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);

    Object.entries(collections).forEach(([key, collection]) => {
      const barsGroup = svg.select(`.bars-${key}`);
      const bars = barsGroup.selectAll(".bar").data(collection.data);

      bars.enter()
        .append("rect")
        .attr("class", "bar")
        .merge(bars)
        .attr("x", (d, i) => xScale(i))
        .attr("width", xScale.bandwidth())
        .attr("y", d => yScale(Math.max(0, d)))
        .attr("height", d => Math.abs(yScale(0) - yScale(d)))
        .attr("fill", collection.color);

      bars.exit().remove();
    });
  }, [collections, xScale, yScale]);

  // Mouse event handlers
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const chartArea = svg.select(".chart-area");

    chartArea
      .on("mousedown", (event) => {
        isDrawingRef.current = true;
        updateValue(event);
      })
      .on("mousemove", (event) => {
        if (isDrawingRef.current) {
          updateValue(event);
        }
      })
      .on("mouseup", () => {
        isDrawingRef.current = false;
      })
      .on("mouseleave", () => {
        isDrawingRef.current = false;
      });

    return () => {
      chartArea.on("mousedown", null).on("mousemove", null).on("mouseup", null).on("mouseleave", null);
    };
  }, [updateValue]);

  return (
    <svg
      ref={svgRef}
      width={width}
      height={height}
      style={{
        border: "1px solid #e5e7eb",
        borderRadius: "8px",
        backgroundColor: "#fafafa"
      }}
    />
  );
}

function BarWidget() {
  const [data, setData] = useModelState("data");
  const [nBins] = useModelState("n_bins");
  const [yMin] = useModelState("y_min");
  const [yMax] = useModelState("y_max");
  const [width] = useModelState("width");
  const [height] = useModelState("height");
  const [collectionNames] = useModelState("collection_names");

  // Initialize collections state
  const [collections, setCollections] = useState(() => {
    const cols = {};
    const names = collectionNames || ["collection1"];
    names.forEach((name, i) => {
      cols[name] = {
        color: COLORS[i % COLORS.length],
        data: new Array(nBins || 24).fill(yMin || 0)
      };
    });
    return cols;
  });

  const [activeCollection, setActiveCollection] = useState(
    collectionNames?.[0] || "collection1"
  );

  // Update data output whenever collections change
  const updateDataOutput = useCallback(() => {
    const newData = [];
    Object.entries(collections).forEach(([key, collection]) => {
      collection.data.forEach((value, bin) => {
        newData.push({
          collection: key,
          value: value,
          bin: bin,
          color: collection.color
        });
      });
    });
    setData(newData);
  }, [collections, setData]);

  useEffect(() => {
    updateDataOutput();
  }, [collections, updateDataOutput]);

  // Handle collection update from canvas
  const handleCollectionUpdate = useCallback((collectionName, binIndex, value) => {
    setCollections(prev => ({
      ...prev,
      [collectionName]: {
        ...prev[collectionName],
        data: prev[collectionName].data.map((d, i) =>
          i === binIndex ? value : d
        )
      }
    }));
  }, []);

  // Handle clear
  const handleClear = () => {
    setCollections(prev => {
      const cleared = {};
      Object.keys(prev).forEach(key => {
        cleared[key] = {
          ...prev[key],
          data: new Array(nBins || 24).fill(0)
        };
      });
      return cleared;
    });
  };

  const collectionKeys = Object.keys(collections);
  const showCollectionSelector = collectionKeys.length > 1;

  return (
    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Controls */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
          {/* Collection selector */}
          {showCollectionSelector && (
            <ToggleGroup.Root
              type="single"
              value={activeCollection}
              onValueChange={(value) => value && setActiveCollection(value)}
            >
              {collectionKeys.map((key) => (
                <ToggleGroup.Item
                  key={key}
                  value={key}
                  style={{
                    padding: "0.5rem 1rem",
                    border: "1px solid #e5e7eb",
                    backgroundColor: activeCollection === key ? collections[key].color : "white",
                    color: activeCollection === key ? "white" : "#111827",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem"
                  }}
                >
                  <span
                    style={{
                      width: "12px",
                      height: "12px",
                      borderRadius: "50%",
                      backgroundColor: collections[key].color,
                      border: "1px solid rgba(0,0,0,0.2)"
                    }}
                  />
                  {key}
                </ToggleGroup.Item>
              ))}
            </ToggleGroup.Root>
          )}

          {/* Clear button */}
          <button
            onClick={handleClear}
            style={{
              padding: "0.5rem 1rem",
              border: "1px solid #e5e7eb",
              borderRadius: "4px",
              backgroundColor: "white",
              cursor: "pointer"
            }}
          >
            Clear
          </button>
        </div>

        {/* Canvas */}
        <BarCanvas
          collections={collections}
          activeCollection={activeCollection}
          width={width || 600}
          height={height || 400}
          nBins={nBins || 24}
          yMin={yMin || 0}
          yMax={yMax || 100}
          onCollectionUpdate={handleCollectionUpdate}
        />
    </div>
  );
}

const render = createRender(BarWidget);

export default { render };
