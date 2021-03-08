import {
  Container,
  makeStyles,
  Typography,
  Theme,
  CssBaseline,
} from "@material-ui/core";
import BigSearchBar from "./BigSearchBar";
const useStyles = makeStyles((theme: Theme) => ({
  title: {
    fontFamily: "Alfa Slab One, cursive",
    position: "fixed",
    top: theme.spacing(2),
    left: theme.spacing(2),
    animation: `$comeDown 2000ms`,
    color: "white",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 200,
    height: "100vh",
    justifyContent: "center",
    overflow: "hidden",
    margin: 0,
    padding: 0,
    width: "100vw",
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
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "25% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    },
  },
  background: {
    position: "fixed",
    width: "400%",
    height: "200%",
    background:
      "radial-gradient(circle, rgba(57,226,182,1) 8%, rgba(20,176,103,1) 24%, rgba(67,145,207,1) 40%, rgba(81,40,184,1) 54%, rgba(139,79,205,1) 68%, rgba(186,60,162,1) 80%, rgba(204,139,68,1) 93%)",
    top: "-150%",
    left: "-200%",
    zIndex: -8,
    transform: "rotateZ(-10deg)",
    backgroundPosition: "80%",
    backgroundSize: "400% 400%",
    animation: "$gradient 30s ease infinite",
    overflow: "hidden",
  },
}));
const Home = () => {
  const classes = useStyles();
  return (
    <Container maxWidth={false} className={classes.root}>
      <CssBaseline />
      <div className={classes.background} />
      <Typography variant="h5" component="h4" className={classes.title}>
        Sreamalytics
      </Typography>
      <div className={classes.search}>
        <BigSearchBar />
      </div>
    </Container>
  );
};

export default Home;
