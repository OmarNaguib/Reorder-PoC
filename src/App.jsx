import React, { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Card } from "antd";
import ReactEcharts from "echarts-for-react";

const ResponsiveGridLayout = WidthProvider(Responsive);

function App() {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 6, h: 1 },
    { i: "b", x: 6, y: 0, w: 6, h: 1 },
    { i: "c", x: 2, y: 1, w: 12, h: 1 },
    { i: "d", x: 0, y: 2, w: 6, h: 1 },
    { i: "f", x: 6, y: 2, w: 6, h: 1 },
    { i: "g", x: 2, y: 3, w: 6, h: 1 },
  ]);
  const [isEditable, setIsEditable] = useState(false);
  const toggleEditable = () => {
    setIsEditable(!isEditable);
  };

  const onLayoutChange = (newLayout) => {
    setLayout(newLayout);
  };

  const getOption = () => {
    return {
      title: {
        text: "ECharts example",
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
      >
        {layout.map((item) => (
          <Card
            key={item.i}
            data-grid={{ x: item.x, y: item.y, w: item.w, h: item.h }}
            className="dragHandle"
          >
            <ReactEcharts option={getOption()} />
          </Card>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
}

export default App;
