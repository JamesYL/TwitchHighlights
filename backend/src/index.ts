import { getComments } from "./twitch_api/getComments";
import express from "express";
import getVodInfo from "./twitch_api/getVodInfo";

const app = express();
const port = process.env.PORT || 8080;
if (process.env.NODE_ENV === "production") app.use(express.static("build"));
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// start the Express server
app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
