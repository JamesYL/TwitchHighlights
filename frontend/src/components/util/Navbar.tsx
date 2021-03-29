import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import BookmarksIcon from "@material-ui/icons/Bookmarks";
import SearchBar from "./SearchBar";
import { Tooltip } from "@material-ui/core";
import { useHistory } from "react-router";
import { getNumVods } from "../../services/storage";
import React from "react";
import Link from "@material-ui/core/Link";
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
    appbar: (props: NavProp) => {
      if (props.transparent) {
        return {
          background: "transparent",
        };
      }
      return {};
    },
  })
);
interface NavProp {
  transparent?: boolean;
  disableSearch?: boolean;
  bookmarkNum?: number;
}
export default function Navbar(props: NavProp) {
  const history = useHistory();
  const classes = useStyles(props);
  const clickBookmark = () => {
    history.push(`/bookmarks`);
    history.go(0);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.title} variant="h6">
            <Link href="/" color="inherit" variant="inherit">
              Streamalytics
            </Link>
          </Typography>
          {!props.disableSearch && (
            <div className={classes.search}>
              <SearchBar />
            </div>
          )}
          <div className={classes.grow} />
          <Tooltip title="Saved vods" aria-label="saved vods">
            <IconButton
              aria-label="show saved vod analytics"
              color="inherit"
              onClick={clickBookmark}
            >
              <Badge
                badgeContent={
                  props.bookmarkNum ? props.bookmarkNum : getNumVods()
                }
                color="secondary"
              >
                <BookmarksIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  );
}
