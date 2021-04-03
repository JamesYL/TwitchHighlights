import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import { getCommentsData, getSpeeds } from "../../services/speeds";
import ErrorVodPage from "./ErrorVodPage";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Theme,
} from "@material-ui/core";
import {
  addOrUpdateVod,
  getGenericSingleVodInfo,
  getNumVods,
  getSingleVodInfo,
  SingleVodInfo,
} from "../../services/storage";
import Notification from "../util/Notification";
import { Comment } from "../../twitch_api/getComments";
import VodInfoCard from "./VodInfoCard";
import SpeedsChartCard from "./SpeedsChartCard";
const useStyles = makeStyles((theme: Theme) => ({
  loadedText: {
    margin: theme.spacing(5),
    fontFamily: "'Delta Gothic One', cursive",
  },
}));
const AnalyzeVod = () => {
  const classes = useStyles();
  const [vodInfo, setVodInfo] = React.useState<SingleVodInfo>(
    getGenericSingleVodInfo()
  );
  const [isErr, setIsErr] = React.useState(false);
  // -1 (done loading) >= 0 (number of comments that have been loaded)
  const [commentsLoaded, setCommentsLoaded] = React.useState<number>(-2);
  const [saveErr, setSaveErr] = React.useState(false);
  const [saveMsg, setSaveMsg] = React.useState("");
  const [comments, setComments] = React.useState<Comment[] | null>(null);
  const [bookmarkNum, setBookmarkNum] = React.useState(getNumVods());
  const { vodID } = useParams() as { vodID: string };
  const loadComments = async () => {
    const comments = await getCommentsData(vodID, (prog, completed) => {
      if (completed) setCommentsLoaded(-1);
      else setCommentsLoaded(prog);
    });
    if (comments === null) {
      setIsErr(true);
      return [];
    }
    setComments(comments as Comment[]);
    const vodObj = {
      vodID,
      speeds: getSpeeds(comments as Comment[]),
    };
    setVodInfo(vodObj);

    return comments;
  };
  React.useEffect(() => {
    const vodObj = getSingleVodInfo(vodID);
    if (vodObj) {
      setCommentsLoaded(-1);
      setVodInfo(vodObj);
    } else {
      loadComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vodID]);
  const saveVod = async () => {
    if (getSingleVodInfo(vodID)) return; // Already exists
    const res = addOrUpdateVod(vodInfo);
    if (res === "") {
      setBookmarkNum(bookmarkNum + 1);
      return;
    } else if (res === "QuotaExceededError") {
      setSaveErr(true);
      setSaveMsg(
        "Not enough memory to save the vod, remove some vods in bookmarks"
      );
    } else {
      setSaveErr(true);
      setSaveMsg(`ERROR: Could not save vod due to ${res}`);
    }
  };
  const downloadComments = async () => {
    let loadedComments = comments;
    if (!loadedComments) loadedComments = await getCommentsData(vodID, null);
    if (loadedComments !== null) {
      const content = `VodID: ${vodID}\n${(loadedComments as Comment[])
        .map(
          (item) =>
            `${item.commenter.display_name}[${item.content_offset_seconds}s]: ${item.message.body}`
        )
        .join("\n")}`;
      const element = document.createElement("a");
      const file = new Blob([content], {
        type: "text/plain;charset=utf-8",
      });
      element.href = URL.createObjectURL(file);
      element.download = "comments.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  };
  return (
    <>
      <Navbar bookmarkNum={bookmarkNum} />

      <Container maxWidth="xl">
        <br />

        {isErr ? (
          <ErrorVodPage />
        ) : (
          <>
            <Grid container spacing={3}>
              {commentsLoaded === -1 && (
                <>
                  <Grid item xs={5} md={5} xl={5}>
                    <VodInfoCard
                      vodID={vodID}
                      elevation={5}
                      downloadComments={downloadComments}
                      saveVod={saveVod}
                    />
                  </Grid>
                  <Grid item xs={12} xl={6}>
                    <SpeedsChartCard elevation={5} vodInfo={vodInfo} />
                  </Grid>
                </>
              )}
            </Grid>
            {commentsLoaded >= 0 && (
              <Typography
                component="h2"
                variant="h4"
                align="center"
                className={classes.loadedText}
              >
                Loaded {commentsLoaded} comments...
              </Typography>
            )}
          </>
        )}
        <Notification message={saveMsg} setOpen={setSaveErr} open={saveErr} />
      </Container>
    </>
  );
};

export default AnalyzeVod;
