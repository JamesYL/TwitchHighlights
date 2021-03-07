import React from "react";
import { Theme, makeStyles, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import Notification from "../util/Notification";
const useStyles = makeStyles((theme: Theme) => ({
  root: {
    border: "1px solid lightgrey",
    borderRadius: 30,
    display: "flex",
    width: "100%",
    maxWidth: 800,
  },
  button: {
    marginLeft: "auto",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));
const Input = styled.input`
  border: 0;
  flex: 1;
  margin-left: 20px;
  outline-style: none;
  box-shadow: none;
  border-color: transparent;
  ::-ms-clear {
    display: none;
  }
  font-size: 25px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
`;
const BigSearchBar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [isErr, setIsErr] = React.useState(false);
  const [vodVal, setVodVal] = React.useState("");
  const handleSubmit = () => {
    let filtered: number = parseInt(vodVal);
    if (!filtered) {
      const index = vodVal.indexOf("videos/");
      if (index >= 0) {
        const tmp = vodVal.slice(index + 7);
        const secondSlash = tmp.indexOf("/");
        if (secondSlash >= 0) {
          filtered = parseInt(tmp.slice(0, secondSlash));
        } else filtered = parseInt(tmp);
      }
    }
    if (filtered) {
      history.push(`/search/${filtered}`);
    } else setIsErr(true);
  };

  return (
    <div className={classes.root}>
      <Input
        type="text"
        onChange={(e) => setVodVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
        placeholder="Analyze Vod: Enter twitch vod URL"
      />
      <IconButton onClick={handleSubmit} className={classes.button}>
        <SearchIcon />
      </IconButton>
      <Notification
        message={`Vod id cannot be determined from the input`}
        open={isErr}
        setOpen={setIsErr}
      />
    </div>
  );
};
export default BigSearchBar;
