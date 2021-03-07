import React from "react";
import { Container, makeStyles, Typography, Theme } from "@material-ui/core";
import BigSearchBar from "./BigSearchBar";
import { Line } from "victory";
const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: "Alfa Slab One, cursive",
    position: "fixed",
    top: theme.spacing(2),
    left: theme.spacing(2),
    animation: `$comeDown 2000ms`,
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 200,
    height: "100vh",
    justifyContent: "center",
  },
  search: {
    width: "100%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "row",
    animation: `$comeUp 2000ms`,
  },
  "@keyframes comeUp": {
    "0%": {
      opacity: 0,
      transform: "translateY(200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
  "@keyframes comeDown": {
    "0%": {
      opacity: 0,
      transform: "translateY(-200%)",
    },
    "100%": {
      opacity: 1,
      transform: "translateY(0)",
    },
  },
}));
const Home = () => {
  const classes = useStyles();

  return (
    <Container fixed maxWidth="xl" className={classes.root}>
      <Typography variant="h5" component="h4" className={classes.title}>
        Twitch Vod Analytics
      </Typography>
      <div className={classes.search}>
        <BigSearchBar />
      </div>
      <Line />
    </Container>
  );
};

export default Home;
