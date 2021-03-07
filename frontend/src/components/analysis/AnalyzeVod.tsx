import React from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../util/SearchBar";
import Chart from "./Chart";
import { useWidth, useHeight } from "../../util/getDimensions";

import { getSpeeds, Speed } from "../../services/speeds";
import ErrorPage from "../util/ErrorPage";
import { Slider, Typography } from "@material-ui/core";
import { flattenSpeed } from "./flattenSpeed";
const AnalyzeVod = () => {
  const [data, setData] = React.useState<Speed[]>([]);
  const [isErr, setIsErr] = React.useState(false);
  const [chartSize, setChartSize] = React.useState(3);
  const [flatten, setFlatten] = React.useState(1);
  const width = useWidth();
  const height = useHeight();
  // @ts-ignore
  const { vodID } = useParams();
  React.useEffect(() => {
    (async () => {
      try {
        const speeds = await getSpeeds(vodID);
        setData(speeds);
      } catch (err) {
        setIsErr(true);
      }
    })();
  }, [vodID]);
  return (
    <>
      {isErr ? (
        <ErrorPage />
      ) : (
        <>
          <SearchBar />
          <div style={{ width: 200, marginLeft: 20 }}>
            <Typography>Zoom in and drag to check graph</Typography>
            <Slider
              value={chartSize}
              marks={[
                { value: 1, label: "Taller graph" },
                { value: 4, label: "Shorter graph" },
              ]}
              min={1}
              max={4}
              defaultValue={3}
              onChange={(_, newVal: number | number[]) => {
                setChartSize(newVal as number);
              }}
              aria-labelledby="slider for chart size"
            />
            <Slider
              value={flatten}
              marks={[
                { value: 1, label: "Most detailed" },
                { value: 100, label: "Least detailed" },
              ]}
              min={1}
              max={100}
              defaultValue={1}
              onChange={(_, newVal: number | number[]) => {
                setFlatten(newVal as number);
              }}
              aria-labelledby="slider for flatten size"
            />
          </div>
          <Chart
            data={flattenSpeed(data, flatten)}
            width={width}
            height={height / chartSize ** 0.75}
          />
        </>
      )}
    </>
  );
};

export default AnalyzeVod;
