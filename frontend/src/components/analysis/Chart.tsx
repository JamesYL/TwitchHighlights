import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  createContainer,
  VictoryZoomContainerProps,
  VictoryVoronoiContainerProps,
} from "victory";
import React from "react";
import { Speed } from "../../services/speeds";
interface ChartProps {
  data: Speed[];
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
        <VictoryAxis dependentAxis label="Messages" tickFormat={(x) => x} />
        <VictoryAxis label="Time (s)" />
        <VictoryLine
          data={props.data.filter(
            (d) => d.time >= zoomXDomain[0] && d.time <= zoomXDomain[1]
          )}
          x="time"
          y="speed"
        />
      </VictoryChart>
    </>
  );
};

export default Chart;
