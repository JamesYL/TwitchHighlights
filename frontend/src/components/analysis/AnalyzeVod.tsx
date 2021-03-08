import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import Chart from "./SpeedsChart";
import { useWidth, useHeight } from "../../util/getDimensions";
import { getCommentsData } from "../../services/speeds";
import { Comment } from "../../twitch_api/getComments";
import ErrorPage from "./ErrorPage";
import { CssBaseline } from "@material-ui/core";
const AnalyzeVod = () => {
  const [comments, setComments] = React.useState<Comment[]>([]);
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
        setComments(comments);
      } catch (err) {
        setIsErr(true);
      }
    })();
  }, [vodID]);
  return (
    <>
      <CssBaseline />
      <Navbar />
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
