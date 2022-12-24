import React, { PureComponent } from "react";

import {
  Surface,
  Pie,
  PieChart,
  Tooltip,
  Cell,
  Legend,
  Sector,
  ResponsiveContainer
} from "recharts";

const data = [{ name: "MGA", value: 0 }, { name: "MGA", value: 5000.0 }];

export default class DoughNut extends PureComponent {
  state = { animate: false, activeIndex: 1 };
  render() {
    return (
      <ResponsiveContainer width="95%" height={180}>
        <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <defs>
            <linearGradient id="conicValue" gradientTransform="rotate(100)">
              <stop offset="0%" stopColor="#9900ff" />
              <stop offset="100%" stopColor="#cc00cc" />
            </linearGradient>
            <radialGradient
              id="radValue"
              // gradientTransform="skewY(40) "
              cx="150"
              cy="150"
              r="100"
              fx="100"
              fy="100"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#660066" />
              <stop offset="100%" stopColor="#9933ff" />
            </radialGradient>

            <linearGradient id="Gradient1" gradientTransform="rotate(45)">
              <stop offset="0%" stop-color="#6600ff" />
              <stop offset="100%" stop-color="#0000ff" />
            </linearGradient>
            <linearGradient id="Gradient2" gradientTransform="rotate(100)">
              <stop offset="0%" stop-color="#0000ff" />
              <stop offset="100%" stop-color="#cc00cc" />
            </linearGradient>
            <pattern
              id="Pattern"
              x="0"
              y="0"
              width="600"
              height="600"
              patternUnits="userSpaceOnUse"
            >
              <g transform="rotate(0, 300, 300)">
                <rect
                  shape-rendering="crispEdges"
                  x="0"
                  y="0"
                  width="300"
                  height="600"
                  fill="url(#Gradient1)"
                />
                <rect
                  shape-rendering="crispEdges"
                  x="300"
                  y="0"
                  width="300"
                  height="600"
                  fill="url(#Gradient2)"
                />
              </g>
            </pattern>
          </defs>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={renderActiveShape}
            isAnimationActive={false}
            data={data}
            cx={100}
            cy={80}
            innerRadius={70}
            outerRadius={80}
            startAngle={100}
            paddingAngle={5}
            endAngle={450}
            dataKey="value"
            // onMouseEnter={this.onPieEnter}
          >
           
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    );
  }

  onPieEnter = (data, index) => {
    this.setState({
      activeIndex: index
    });
  };
}

const renderActiveShape = props => {
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload,
    percent,
    value
  } = props;
//   console.log("payload", payload);
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={"white"}>
        {payload.name}
      </text>
      <text x={cx} y={cy} dy={25} textAnchor="middle" fill={"white"}>
        {payload.value}
      </text>

      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius - 5}
        outerRadius={outerRadius + 5}
        startAngle={startAngle}
        endAngle={endAngle}
        // fill={fill}
        // fill="url(#radValue)"
        fill="url(#conicValue)"
        //fill="url(#Pattern)"
      />
    </g>
  );
};


