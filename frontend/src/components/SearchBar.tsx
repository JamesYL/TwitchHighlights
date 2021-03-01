import React from "react";
import { Typography, TextField, Button } from "@material-ui/core";

const SearchBar = () => {
  const [vodVal, setVodVal] = React.useState("");
  const handleSubmit = () => {
    console.log("search submit");
  };
  return (
    <>
      <Typography variant="h3" component="h6">
        Analyze Vod
      </Typography>
      <TextField
        label="Enter twitch vod URL or id"
        variant="outlined"
        onChange={(e) => setVodVal(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSubmit();
        }}
      />
      <Button onClick={handleSubmit}>Find</Button>
    </>
  );
};
export default SearchBar;
