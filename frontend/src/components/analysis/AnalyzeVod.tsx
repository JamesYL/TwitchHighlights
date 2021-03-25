import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import Chart from "./SpeedsChart";
import { useWidth, useHeight } from "../../util/getDimensions";
import { getCommentsData, getSpeeds } from "../../services/speeds";
import { Comment } from "../../twitch_api/getComments";
import ErrorPage from "./ErrorPage";
import { Button } from "@material-ui/core";
import { addOrUpdateVod } from "../../services/storage";
const AnalyzeVod = () => {
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [isErr, setIsErr] = React.useState(false);
  const [commentsLoaded, setCommentsLoaded] = React.useState<number | null>(-1);
  const width = useWidth();
  const height = useHeight();
  const { vodID } = useParams() as { vodID: string };
  const loadComments = async () => {
    try {
      const comments = await getCommentsData(vodID, (prog, completed) => {
        if (completed) setCommentsLoaded(null);
        else setCommentsLoaded(prog);
      });
      setComments(comments);
    } catch (err) {
      setIsErr(true);
    }
  };
  const saveVod = async () => {
    const vodInfo = {
      speeds: getSpeeds(comments),
    };
    const res = addOrUpdateVod(vodID, vodInfo);
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
              data={comments}
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
