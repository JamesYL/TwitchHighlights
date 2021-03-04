import { VictoryLine, VictoryChart } from "victory";

interface GraphData {
  x: number;
  y: number;
}
interface ChartProps {
  data: GraphData[];
}
const Chart = (props: ChartProps) => {
  return (
    <>
      <VictoryChart>
        <VictoryLine data={props.data} />
      </VictoryChart>
    </>
  );
};

export default Chart;
