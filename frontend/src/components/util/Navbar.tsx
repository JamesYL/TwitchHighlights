import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import SearchBar from "./SearchBar";
import { Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      fontFamily: "Alfa Slab One, cursive",
      color: "white",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
      marginRight: theme.spacing(2),
    },
    root: {
      flexGrow: 1,
      backgroundColor: "transparent",
    },
    search: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: "100%",
    },
  })
);

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            Streamalytics
          </Typography>
          <div className={classes.search}>
            <SearchBar />
          </div>
          <div className={classes.grow} />
          <Tooltip title="Saved vods" aria-label="saved vods">
            <IconButton aria-label="show saved vod analytics" color="inherit">
              <Badge badgeContent={1} color="secondary">
                <BookmarksIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}
