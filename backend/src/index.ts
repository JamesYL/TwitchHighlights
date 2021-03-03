import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import route from "./controllers/main_route";
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
  .then(() => {
    console.log("Successfully connected to MongoDB");
    app.use("/api", route());
    app.listen(port, () => {
      console.log(`server running on port ${port}`);
    });
  })
  .catch((err) =>
    console.error("Failed to connect to MongoDB: " + err.message)
  );
