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
} from "../../services/speeds";
import { Slider, Typography } from "@material-ui/core";

interface ChartProps {
  data: Speed;
  width: number;
  height: number;
}
const Chart = (props: ChartProps) => {
  const [flatten, setFlatten] = React.useState(1);
  const VictoryZoomVoronoiContainer = createContainer<
    VictoryZoomContainerProps,
    VictoryVoronoiContainerProps
  >("zoom", "voronoi");
  const [zoomXDomain, setZoomXDomain] = React.useState<
    [number, number] | [Date, Date]
  >([0, 1000000]);
  const getEntireDomain = (): DomainPropType | undefined => {
    if (props.data.speeds.length)
      return {
        x: [0, props.data.speeds.length * props.data.increment],
      };
  };
  return (
    <>
      <Slider
        value={flatten}
        marks={[
          { value: 1, label: "Most detailed (More lag)" },
          { value: 10, label: "Least detailed (Less lag)" },
        ]}
        min={1}
        max={10}
        defaultValue={flatten}
        onChange={(_, newVal: number | number[]) => {
          setFlatten(newVal as number);
        }}
        aria-labelledby="flatten size"
      />
      <div style={{ width: 200, marginLeft: 20 }}>
        <Typography>Zoom in and drag to check graph</Typography>
      </div>
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
          data={convertToSpeedPoint(flattenSpeeds(props.data, flatten)).filter(
            (d) => d.time >= zoomXDomain[0] && d.time <= zoomXDomain[1]
          )}
          interpolation="basis"
          x="time"
          y="speed"
        />
        <VictoryLabel
          text="Number of Messages Throughout the Vod"
          x={props.width / 2}
          y={30}
          style={{ fontSize: 18 }}
          textAnchor="middle"
        />
      </VictoryChart>
    </>
  );
};

export default Chart;
