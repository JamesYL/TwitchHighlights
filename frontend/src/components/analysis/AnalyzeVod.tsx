import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../util/Navbar";
import { getCommentsData } from "../../services/speeds";
import ErrorVodPage from "./ErrorVodPage";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Theme,
} from "@material-ui/core";
import Notification from "../util/Notification";
import { Comment } from "../../twitch_api/getComments";
import VodInfoCard from "./Cards/VodInfoCard";
import SpeedsChartCard from "./Cards/SpeedsChartCard";
import KeywordsCard from "./Cards/KeywordsCard";
import {
  getVodFullInfo,
  getVodFullInfoDB,
  saveVods,
  VodWithAllInfo,
} from "../../services/storage";
import { getNumVods } from "../../local_db/vod";
import getVodInfo, { VodInfo } from "../../twitch_api/getVodInfo";
const useStyles = makeStyles((theme: Theme) => ({
  loadedText: {
    margin: theme.spacing(5),
    fontFamily: "'Delta Gothic One', cursive",
  },
}));
const AnalyzeVod = () => {
  const classes = useStyles();
  const { vodID } = useParams() as { vodID: string };

  const [vodInfo, setVodInfo] = React.useState<VodWithAllInfo | null>(null);
  const [comments, setComments] = React.useState<Comment[]>([]);
  const [twitchVodInfo, setTwitchVodInfo] = React.useState<VodInfo | null>(
    null
  );

  const [isErr, setIsErr] = React.useState(false);

  // -1 (done loading) >= 0 (number of comments that have been loaded)
  const [commentsLoaded, setCommentsLoaded] = React.useState<number>(-2);

  const [saveErr, setSaveErr] = React.useState(false);
  const [saveMsg, setSaveMsg] = React.useState("");
  const [bookmarkNum, setBookmarkNum] = React.useState<number>(0);
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
    return comments;
  };
  React.useEffect(() => {
    (async () => {
      const vodFullInfo = await getVodFullInfoDB(vodID);
      setVodInfo(vodFullInfo);
      setBookmarkNum(await getNumVods());
      if (vodFullInfo) {
        setCommentsLoaded(-1);
      } else {
        const comments = await loadComments();
        const twitchVodInfo = await getVodInfo(vodID);
        setTwitchVodInfo(twitchVodInfo);
        setVodInfo(getVodFullInfo(vodID, twitchVodInfo, comments));
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [vodID]);
  const saveVod = async () => {
    const savedInfo = await getVodFullInfoDB(vodID);
    if (savedInfo) {
      setSaveErr(true);
      setSaveMsg("Already saved");
      return;
    }
    setBookmarkNum(bookmarkNum + 1);
    if (twitchVodInfo) {
      try {
        saveVods(vodID, twitchVodInfo, comments);
      } catch (err) {
        setSaveErr(true);
        setSaveMsg("Failed to save vod");
      }
    }
  };
  const downloadComments = async () => {
    if (vodInfo) {
      const content = `VodID: ${vodInfo.vodID}\n${vodInfo.comments
        .map((item) => `${item.commenter}[${item.seconds}s]: ${item.message}`)
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
                      loadComments={loadComments}
                    />
                  </Grid>
                  {vodInfo && (
                    <Grid item xs={12} xl={6}>
                      <SpeedsChartCard elevation={5} vodInfo={vodInfo} />
                    </Grid>
                  )}
                  {vodInfo && (
                    <Grid item xs={12} xl={6}>
                      <KeywordsCard elevation={5} vodInfo={vodInfo} />
                    </Grid>
                  )}
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
