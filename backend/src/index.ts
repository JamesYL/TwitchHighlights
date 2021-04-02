import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
// import route from "./controllers/mainRoute";
// import mongoose from "mongoose";

dotenv.config();

const app = express();
if (process.env.NODE_ENV !== "production") app.use(cors());
const port = process.env.PORT || 8000;
// const databaseType =
//   process.env.NODE_ENV === "production"
//     ? "twitchhighlights"
//     : process.env.NODE_ENV === "development"
//     ? "twitchhighlightsdev"
//     : "twtichhighlightstest";
if (process.env.NODE_ENV === "production") {
  app.use(express.static("build"));
  app.get("*", function (_, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });
}

// mongoose
//   .connect(
//     `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.8ql8a.mongodb.net/${databaseType}?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useFindAndModify: false,
//       useCreateIndex: true,
//     }
//   )
//   .then(() => {
//     console.log("Successfully connected to MongoDB");
//     app.use("/api", route());
//     app.listen(port, () => {
//       console.log(`server running on port ${port}`);
//     });
//   })
//   .catch((err) =>
//     console.error("Failed to connect to MongoDB: " + err.message)
//   );

app.listen(port);
