import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import route from "./controllers/main_route";
import { getComments } from "./twitch_api/getComments";
import Observable from "./util/Observable";
import getVodInfo from "./twitch_api/getVodInfo";
dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const databaseType =
  process.env.NODE_ENV === "production"
    ? "twitchhighlights"
    : process.env.NODE_ENV === "development"
    ? "twitchhighlightsdev"
    : "twtichhighlightstest";
if (process.env.NODE_ENV === "production") app.use(express.static("build"));
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.8ql8a.mongodb.net/${databaseType}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then((db) => {
    console.log("Successfully connected to MongoDB");
    app.use("/api", route(db));
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) =>
    console.error("Failed to connect to MongoDB: " + err.message)
  );
