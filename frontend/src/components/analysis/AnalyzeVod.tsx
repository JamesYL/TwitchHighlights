import React from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../util/SearchBar";
import Chart from "./Chart";
import { useWidth, useHeight } from "../../util/getDimensions";

import { getSpeeds, SpeedPoint } from "../../services/speeds";
import ErrorPage from "./ErrorPage";
import { Slider, Typography } from "@material-ui/core";
import { flattenSpeed } from "./flattenSpeed";
const AnalyzeVod = () => {
  const [data, setData] = React.useState<SpeedPoint[]>([]);
  const [isErr, setIsErr] = React.useState(false);
  const [chartSize, setChartSize] = React.useState(3);
  const [flatten, setFlatten] = React.useState(5);
  const [ymax, setYmax] = React.useState(5);
  const [commentsLoaded, setCommentsLoaded] = React.useState<number | null>(-1);
  const width = useWidth();
  const height = useHeight();
  const { vodID } = useParams() as { vodID: string };
  React.useEffect(() => {
    (async () => {
      try {
        const speedsData = await getSpeeds(vodID);
        setData(speedsData.speeds);
        setYmax(Math.max(...speedsData.speeds.map((item) => item.speed)));
        if (speedsData.loading) setCommentsLoaded(speedsData.numCommentsLoaded);
        else setCommentsLoaded(null);
      } catch (err) {
        setIsErr(true);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              aria-labelledby="chart size"
            />
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
          </div>
          {commentsLoaded === null && (
            <Chart
              data={flattenSpeed(data, flatten)}
              width={width}
              height={height / chartSize ** 0.75}
              ymax={ymax}
            />
          )}
          {commentsLoaded !== -1 && <div>Loaded {commentsLoaded} comments</div>}
        </>
      )}
    </>
  );
};

export default AnalyzeVod;
