import React from "react";
import { Bar, ComposedChart, Tooltip, XAxis, YAxis } from "recharts";

const Chart = ({ appData }) => {
  // console.log(appData);
  const chartData = [...appData.ratings].reverse();
  return (
    <div className="-ml-15">
      <ComposedChart
        width={1000}
        height={500}
        data={chartData}
        layout="vertical"
      >
        <XAxis type="number"></XAxis>
        <YAxis dataKey={"name"} type="category"></YAxis>
        <Bar dataKey={"count"} fill="#FF8811"></Bar>
        <Tooltip></Tooltip>
      </ComposedChart>
    </div>
  );
};

export default Chart;
