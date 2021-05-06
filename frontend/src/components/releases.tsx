import { Button, Container, Typography } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React from "react";
import Navbar from "./util/Navbar";
import GetAppIcon from "@material-ui/icons/GetApp";

const useStyles = makeStyles((theme: Theme) => {
  return {
    download: {
      background: theme.palette.primary.main,
      margin: 0,
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(10),
    },
    title: {
      color: "white",
      marginBottom: theme.spacing(4),
    },
    mainDownload: {
      background: "white",
      color: theme.palette.primary.main,
      "&:hover": {
        background: "#C4ACE6",
      },
      borderRadius: 20,
      fontSize: "1.5em",
      textTransform: "none",
      marginBottom: theme.spacing(15),
      marginRight: theme.spacing(1),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  };
});
const Releases = () => {
  const classes = useStyles();
  const windowsLink =
    "https://github.com/JamesYL/TwitchClips/releases/download/v1.0.1/Streamalytics-1.0.1.exe";
  const macLink =
    "https://github.com/JamesYL/TwitchClips/releases/download/v1.0.1/Streamalytics-1.0.1.dmg";
  return (
    <>
      <Navbar />
      <div className={classes.download}>
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" className={classes.title}>
            Get Streamalytics for Desktop
          </Typography>

          <Typography variant="h5" component="h3" className={classes.title}>
            Download clips of a VOD quickly and efficiently.
          </Typography>

          <Button
            variant="outlined"
            className={classes.mainDownload}
            onClick={() => window.open(windowsLink)}
          >
            <GetAppIcon className={classes.icon} />
            Download for Windows
          </Button>
          <Button
            variant="outlined"
            className={classes.mainDownload}
            onClick={() => window.open(macLink)}
          >
            <GetAppIcon className={classes.icon} />
            Download for Mac
          </Button>
          <Typography variant="h2" component="h2" className={classes.title}>
            Why Download?
          </Typography>
          <Typography variant="h5" component="h3" className={classes.title}>
            There are plenty of alternatives for downloading Twitch VODs such as
            using online VOD downloaders, ffmpeg, or youtube-dl. While these are
            perfectly valid options, they are much slower.
          </Typography>
          <Typography variant="h5" component="h3" className={classes.title}>
            This app downloads video packets directly from Twitch using all
            available internet bandwidth, and then combines that into a single
            video file through your own computer.
          </Typography>
          <Typography variant="h5" component="h3" className={classes.title}>
            There are online VOD downloaders that do this exact process, but
            then downloading a video file that is potentially hundreds of
            megabytes or gigabytes big will be a bottleneck.
          </Typography>
        </Container>
      </div>
    </>
  );
};
export default Releases;
