import React from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../util/SearchBar";
import Chart from "./Chart";

import { getSpeeds } from "../../services/speeds";
import ErrorPage from "../util/ErrorPage";
interface GraphData {
  x: number;
  y: number;
}
const AnalyzeVod = () => {
  const [data, setData] = React.useState<GraphData[]>([]);
  const [isErr, setIsErr] = React.useState(false);
  // @ts-ignore
  const { vodID } = useParams();
  React.useEffect(() => {
    (async () => {
      try {
        setData(
          (await getSpeeds(vodID)).map((item) => {
            return { x: item.time, y: item.speed };
          })
        );
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
          <Chart data={data} />
        </>
      )}
    </>
  );
};

export default AnalyzeVod;
