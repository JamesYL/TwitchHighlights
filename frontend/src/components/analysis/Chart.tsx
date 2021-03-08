import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  createContainer,
  VictoryZoomContainerProps,
  VictoryVoronoiContainerProps,
  VictoryLabel,
} from "victory";
import React from "react";
import { SpeedPoint } from "../../services/speeds";
interface ChartProps {
  data: SpeedPoint[];
  width: number;
  height: number;
}
const Chart = (props: ChartProps) => {
  const VictoryZoomVoronoiContainer = createContainer<
    VictoryZoomContainerProps,
    VictoryVoronoiContainerProps
  >("zoom", "voronoi");
  const [zoomXDomain, setZoomXDomain] = React.useState<
    [number, number] | [Date, Date]
  >([0, 1000000]);
  interface Domain {
    y: [number, number];
    x: [number, number];
  }
  const getEntireDomain = (): Domain | undefined => {
    if (props.data.length) {
      const speed = props.data.map((item) => item.speed);
      return {
        y: [Math.min(...speed), Math.max(...speed)],
        x: [props.data[0].time, props.data[props.data.length - 1].time],
      };
    }
  };
  return (
    <>
      <VictoryChart
        padding={{ top: 50, left: 80, right: 50, bottom: 50 }}
        width={props.width}
        height={props.height}
        domain={getEntireDomain()}
        containerComponent={
          <VictoryZoomVoronoiContainer
            zoomDimension="x"
            responsive={false}
            onZoomDomainChange={(domain) => {
              setZoomXDomain(domain.x);
            }}
          />
        }
      >
        <VictoryAxis
          dependentAxis
          label="Messages"
          tickFormat={(x) => x}
          axisLabelComponent={<VictoryLabel dy={-20} />}
        />
        <VictoryAxis label="Time (s)" />
        <VictoryLine
          data={props.data.filter(
            (d) => d.time >= zoomXDomain[0] && d.time <= zoomXDomain[1]
          )}
          interpolation="basis"
          x="time"
          y="speed"
        />
      </VictoryChart>
    </>
  );
};

export default Chart;
