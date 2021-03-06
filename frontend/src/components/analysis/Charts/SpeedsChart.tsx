import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  createContainer,
  VictoryZoomContainerProps,
  VictoryVoronoiContainerProps,
  VictoryLabel,
} from "victory";
import { DomainPropType } from "victory-core";
import React from "react";
import {
  convertToSpeedPoint,
  flattenSpeeds,
  Speed,
} from "../../../services/speeds";
import { useWidth } from "../../../util/util";

interface ChartProps {
  data: Speed;
  flatten: number;
}

const convertToSeconds = (num: number) => {
  const numHours = ~~(num / 3600);
  const numMins = ~~((num - numHours * 3600) / 60);
  const numSecs = num - numHours * 3600 - numMins * 60;
  return `${numHours}h ${numMins}m ${numSecs}s`;
};

const Chart = (props: ChartProps) => {
  const VictoryZoomVoronoiContainer = createContainer<
    VictoryZoomContainerProps,
    VictoryVoronoiContainerProps
  >("zoom", "voronoi");
  const [zoomXDomain, setZoomXDomain] = React.useState<
    [number, number] | [Date, Date]
  >([0, 1000000]);
  const [entireDomain, setEntireDomain] = React.useState<
    DomainPropType | undefined
  >();
  React.useEffect(() => {
    if (props.data.speeds.length) {
      setEntireDomain({
        x: [0, props.data.speeds.length * props.data.increment],
        y: [0, Math.max(...props.data.speeds) + 0.5],
      });
    }
  }, [props.data]);
  const windowWidth = useWidth();
  const [width, setWidth] = React.useState(0);
  const graphRef = React.useCallback(
    (node) => {
      if (node !== null) {
        setWidth(node.getBoundingClientRect().width);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [windowWidth]
  );

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      ref={graphRef}
      key={props.data.speeds.length}
    >
      <VictoryChart
        height={300}
        width={width}
        padding={{ top: 50, left: 80, right: 50, bottom: 50 }}
        domain={entireDomain}
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
          axisLabelComponent={<VictoryLabel dy={-20} />}
        />
        <VictoryAxis label="Time (s)" tickFormat={(x) => convertToSeconds(x)} />
        <VictoryLine
          data={convertToSpeedPoint(
            flattenSpeeds(props.data, props.flatten)
          ).filter((d) => d.time >= zoomXDomain[0] && d.time <= zoomXDomain[1])}
          interpolation="natural"
          x="time"
          y="speed"
        />
      </VictoryChart>
    </div>
  );
};

export default React.memo(Chart, (prevProps, nextProps) => {
  return (
    prevProps.flatten === nextProps.flatten &&
    prevProps.data.speeds.length === nextProps.data.speeds.length
  );
});
