import React from "react";
import { useParams } from "react-router-dom";
import SearchBar from "../util/SearchBar";
import Chart from "./SpeedsChart";
import { useWidth, useHeight } from "../../util/getDimensions";

import { getCommentsData, getSpeeds, SpeedPoint } from "../../services/speeds";
import ErrorPage from "./ErrorPage";
const AnalyzeVod = () => {
  const [data, setData] = React.useState<SpeedPoint[]>([]);
  const [isErr, setIsErr] = React.useState(false);
  const [commentsLoaded, setCommentsLoaded] = React.useState<number | null>(-1);
  const width = useWidth();
  const height = useHeight();
  const { vodID } = useParams() as { vodID: string };
  React.useEffect(() => {
    (async () => {
      try {
        const comments = await getCommentsData(vodID, (prog, completed) => {
          if (completed) setCommentsLoaded(null);
          else setCommentsLoaded(prog);
        });
        const speedsData = await getSpeeds(comments);
        setData(speedsData);
      } catch (err) {
        setIsErr(true);
      }
    })();
  }, [vodID]);
  return (
    <>
      <SearchBar />
      {isErr ? (
        <ErrorPage />
      ) : (
        <>
          {commentsLoaded === null && (
            <Chart data={data} width={width} height={height / 3} />
          )}
          {commentsLoaded !== null && commentsLoaded !== -1 && (
            <div>Loaded {commentsLoaded} comments</div>
          )}
        </>
      )}
    </>
  );
};

export default AnalyzeVod;
