import { VictoryPie } from "victory";
import React from "react";
import { Keyword } from "../../services/keywords";

interface KeywordsChartProps {
  data: Keyword[];
}
const Chart = ({ data }: KeywordsChartProps) => {
  return <VictoryPie data={data} />;
};

export default Chart;
