import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { scaleQuantize } from "d3-scale";
import worldMap from "./world-110m.json"; // TopoJSON file for the world map

// Sample data: country codes and their corresponding values
const data = [
  { countryCode: "US", value: 1000 },
  { countryCode: "IN", value: 500 },
  { countryCode: "CN", value: 2000 },
  { countryCode: "BR", value: 800 },
  { countryCode: "FR", value: 1200 },
  { countryCode: "DE", value: 1500 },
];

// Color scale for the choropleth map
const colorScale = scaleQuantize()
  .domain([0, 2000]) // Adjust based on your data range
  .range([
    "#ffedea",
    "#ffcec5",
    "#ffad9f",
    "#ff8a75",
    "#ff5533",
    "#e2492d",
    "#be3d26",
    "#9a311f",
    "#782618",
  ]);

const MapChart = () => {
  return (
    <div style={{ width: "100%", maxWidth: 800, margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>Global Data by Country</h1>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 120,
          center: [0, 20],
        }}
        style={{ width: "100%", height: "auto" }}
      >
        <Geographies geography={worldMap}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryData = data.find(
                (item) => item.countryCode === geo.properties.ISO_A2
              );
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={countryData ? colorScale(countryData.value) : "#F5F5F5"}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none", fill: "#FF5722" },
                    pressed: { outline: "none" },
                  }}
                />
              );
            })
          }
        </Geographies>
      </ComposableMap>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <strong>Legend:</strong>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          {colorScale.range().map((color, index) => (
            <div
              key={index}
              style={{
                width: 30,
                height: 15,
                backgroundColor: color,
                margin: "0 2px",
              }}
            />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>0</span>
          <span>2000</span>
        </div>
      </div>
    </div>
  );
};

export default MapChart;
