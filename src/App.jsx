/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Card } from "antd";
import ReactEcharts from "echarts-for-react";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [layout, setLayout] = useState([
    { i: "first", x: 0, y: 0, w: 6, h: 1, name: "first" },
    { i: "second", x: 6, y: 0, w: 6, h: 1, name: "second" },
    { i: "third", x: 2, y: 1, w: 12, h: 1, name: "third" },
    { i: "fourth", x: 0, y: 2, w: 4, h: 1, name: "fourth" },
    { i: "fifth", x: 4, y: 2, w: 4, h: 1, name: "fifth" },
    { i: "sixth", x: 8, y: 2, w: 4, h: 1, name: "sixth" },
  ]);
  const [isEditable, setIsEditable] = useState(false);
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  const getOption = (item) => {
    console.log(item);
    return {
      title: {
        text: item.i,
      },
      tooltip: {},
      legend: {
        data: ["Sales"],
      },
      xAxis: {
        data: ["shirt", "cardign", "chiffon shirt", "pants", "heels", "socks"],
      },
      yAxis: {},
      series: [
        {
          name: "Sales",
          type: "bar",
          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        width: "100vw",
      }}
    >
      <button
        onClick={toggleEditable}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          margin: "10px",
          background: "black",
          color: "white",
          fontSize: "40px",
        }}
      >
        Edit
      </button>
      <ResponsiveGridLayout
        className="layout"
        layout={layout}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 12, md: 12, sm: 12, xs: 12, xxs: 12 }}
        rowHeight={400}
        onLayoutChange={onLayoutChange}
        draggableHandle=".dragHandle"
        style={{ flexGrow: 1, maxWidth: "1200px", background: "grey" }}
        isDraggable={isEditable}
        isResizable={isEditable}
        compactType={null}
      >
        {layout.map((item) => (
          <Card
            key={item.i}
            data-grid={{
              ...item,
            }}
            className="dragHandle"
          >
            <ReactEcharts option={getOption(item)} />
          </Card>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default App;
