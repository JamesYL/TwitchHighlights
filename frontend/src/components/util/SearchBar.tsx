import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Notification from "./Notification";
const SearchBar = () => {
  const history = useHistory();
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
    <>
      <TextField
        label="Enter twitch vod URL or id"
        variant="outlined"
        onChange={(e) => setVodVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      <Button onClick={handleSubmit}>Find</Button>
      <Notification
        message={`Vod id cannot be determined from the input`}
        open={isErr}
        setOpen={setIsErr}
      />
    </>
  );
};
export default SearchBar;
