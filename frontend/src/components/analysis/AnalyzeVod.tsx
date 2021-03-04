import React from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../util/SearchBar";
import Chart from "./Chart";
import { useWidth, useHeight } from "../../util/getDimensions";

import { getSpeeds, Speed } from "../../services/speeds";
import ErrorPage from "../util/ErrorPage";
import { Slider, Typography } from "@material-ui/core";
const AnalyzeVod = () => {
  const [data, setData] = React.useState<Speed[]>([]);
  const [isErr, setIsErr] = React.useState(false);
  const [chartSize, setChartSize] = React.useState(3);
  const width = useWidth();
  const height = useHeight();
  // @ts-ignore
  const { vodID } = useParams();
  React.useEffect(() => {
    (async () => {
      try {
        setData(await getSpeeds(vodID));
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
                { value: 1, label: "Biggest" },
                { value: 4, label: "Smallest" },
              ]}
              min={1}
              max={4}
              defaultValue={3}
              onChange={(_, newVal: number | number[]) => {
                setChartSize(newVal as number);
              }}
              aria-labelledby="slider for chart size"
            />
          </div>
          <Chart
            data={data}
            width={width}
            height={height / chartSize ** 0.75}
          />
        </>
      )}
    </>
  );
};

export default AnalyzeVod;
