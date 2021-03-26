import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import SpeedsChart from "./SpeedsChart";
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
import Notification from "../util/Notification";
const AnalyzeVod = () => {
  const [vodInfo, setVodInfo] = React.useState<SingleVodInfo>(
    getGenericSingleVodInfo()
  );
  const [isErr, setIsErr] = React.useState(false);
  const [commentsLoaded, setCommentsLoaded] = React.useState<number | null>(-1); // -1 is nothing has started, null means finished loading
  const [saveErr, setSaveErr] = React.useState(false);
  const [saveMsg, setSaveMsg] = React.useState("");
  const width = useWidth();
  const height = useHeight();
  const { vodID } = useParams() as { vodID: string };
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
  React.useEffect(() => {
    const vodObj = getSingleVodInfo(vodID);
    if (vodObj) {
      setCommentsLoaded(null);
      setVodInfo(vodObj);
    } else {
      loadComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vodID]);
  const saveVod = async () => {
    if (vodInfo) {
      const res = addOrUpdateVod(vodID, vodInfo);
      if (res === "") return;
      else if (res === "QuotaExceededError") {
        setSaveErr(true);
        setSaveMsg(
          "Not enough memory to save the vod, remove some vods in bookmarks"
        );
      } else {
        setSaveErr(true);
        setSaveMsg(`ERROR: Could not save vod due to ${vodInfo}`);
      }
    }
  };
  return (
    <>
      <Navbar />
      {isErr ? (
        <ErrorPage />
      ) : (
        <>
          <Button onClick={loadComments}>load comments</Button>
          <Button onClick={saveVod}>Save vod</Button>
          {commentsLoaded === null && (
            <SpeedsChart
              data={vodInfo.speeds}
              width={Math.max(1000, width)}
              height={Math.max(height / 3, 400)}
              vodID={vodID}
            />
          )}
          {commentsLoaded !== null && commentsLoaded !== -1 && (
            <div>Loaded {commentsLoaded} comments</div>
          )}
          <Notification message={saveMsg} setOpen={setSaveErr} open={saveErr} />
        </>
      )}
    </>
  );
};

export default AnalyzeVod;
