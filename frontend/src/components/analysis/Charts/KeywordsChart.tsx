import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Keyword } from "../../../services/keywords";

interface KeywordsChartProps {
  data: Keyword[];
  setHoveredData: (item: Keyword | null) => void;
}

const Chart = ({ data, setHoveredData }: KeywordsChartProps) => {
  return (
    <div>
      <PieChart
        data={data}
        onMouseOver={(_, index) => {
          setHoveredData(data[index]);
        }}
        onMouseOut={() => {
          setHoveredData(null);
        }}
      />
    </div>
  );
};
export default Chart;
