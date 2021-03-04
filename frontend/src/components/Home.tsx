import React from "react";
import { Typography } from "@material-ui/core";
import SearchBar from "./util/SearchBar";
const Home = () => {
  return (
    <>
      <Typography variant="h3" component="h6">
        Analyze Vod
      </Typography>
      <SearchBar />
    </>
  );
};

export default Home;
