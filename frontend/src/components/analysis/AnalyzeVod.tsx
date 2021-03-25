import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import Chart from "./SpeedsChart";
import { useWidth, useHeight } from "../../util/getDimensions";
import { getCommentsData, getSpeeds } from "../../services/speeds";
import ErrorPage from "./ErrorPage";
import { Button } from "@material-ui/core";
import {
  addOrUpdateVod,
  getGenericSingleVodInfo,
  getSingleVodInfo,
  SingleVodInfo,
} from "../../services/storage";
const AnalyzeVod = () => {
  const [vodInfo, setVodInfo] = React.useState<SingleVodInfo>(
    getGenericSingleVodInfo()
  );
  const [isErr, setIsErr] = React.useState(false);
  const [commentsLoaded, setCommentsLoaded] = React.useState<number | null>(-1); // -1 is nothing has started, null means finished loading
  const width = useWidth();
  const height = useHeight();
  const { vodID } = useParams() as { vodID: string };
  React.useEffect(() => {
    const vodObj = getSingleVodInfo(vodID);
    if (vodObj) {
      setCommentsLoaded(null);
      setVodInfo(vodObj);
    }
  }, [vodID]);
  const loadComments = async () => {
    try {
      setCommentsLoaded(-1);
      const comments = await getCommentsData(vodID, (prog, completed) => {
        if (completed) setCommentsLoaded(null);
        else setCommentsLoaded(prog);
      });
      const vodObj = {
        speeds: getSpeeds(comments),
      };
      setVodInfo(vodObj);
    } catch (err) {
      setIsErr(true);
    }
  };
  const saveVod = async () => {
    if (vodInfo) {
      const res = addOrUpdateVod(vodID, vodInfo); // TODO: Check for errors (out of memory and whatnot)
    }
  };
  return (
    <>
      <Navbar />
      <Button onClick={loadComments}>load comments</Button>
      <Button onClick={saveVod}>Save vod</Button>
      {isErr ? (
        <ErrorPage />
      ) : (
        <>
          {commentsLoaded === null && (
            <Chart
              data={vodInfo.speeds}
              width={Math.max(1000, width)}
              height={Math.max(height / 3, 400)}
            />
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
