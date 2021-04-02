"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import mongoose from "mongoose";
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// import route from "./controllers/mainRoute";
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = express_1.default();
if (process.env.NODE_ENV !== "production")
    app.use(cors_1.default());
const port = process.env.PORT || 8000;
// const databaseType =
//   process.env.NODE_ENV === "production"
//     ? "twitchhighlights"
//     : process.env.NODE_ENV === "development"
//     ? "twitchhighlightsdev"
//     : "twtichhighlightstest";
if (process.env.NODE_ENV === "production")
    app.use(express_1.default.static("build"));
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
//# sourceMappingURL=index.js.map