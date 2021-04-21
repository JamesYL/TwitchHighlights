import React from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Keyword } from "../../../services/keywords";

interface KeywordsChartProps {
  data: Keyword[];
  setHoveredData: (item: Keyword | null) => void;
}

const Chart = ({ data, setHoveredData }: KeywordsChartProps) => {
  const [clickedData, setClickedData] = React.useState<Keyword | null>(null);
  return (
    <div>
      <PieChart
        data={data}
        onMouseOver={(_, index) => {
          setHoveredData(data[index]);
        }}
        onClick={(_, index) => {
          setClickedData(data[index]);
        }}
        onMouseOut={() => {
          setHoveredData(clickedData);
        }}
      />
    </div>
  );
};
export default Chart;
