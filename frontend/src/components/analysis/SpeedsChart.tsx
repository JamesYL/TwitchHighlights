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
import { Slider, Typography } from "@material-ui/core";
import { flattenSpeed } from "./flattenSpeed";

interface ChartProps {
  data: SpeedPoint[];
  width: number;
  height: number;
}
const Chart = (props: ChartProps) => {
  const [flatten, setFlatten] = React.useState(5);
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
      return {
        y: [0, Math.max(...props.data.map((item) => item.speed))],
        x: [props.data[0].time, props.data[props.data.length - 1].time],
      };
    }
  };
  return (
    <>
      <Slider
        value={flatten}
        marks={[
          { value: 1, label: "Most detailed" },
          { value: 30, label: "Least detailed" },
        ]}
        min={1}
        max={30}
        defaultValue={1}
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
          data={flattenSpeed(
            props.data.filter(
              (d) => d.time >= zoomXDomain[0] && d.time <= zoomXDomain[1]
            ),
            flatten
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
