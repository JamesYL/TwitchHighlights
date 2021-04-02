"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
// import route from "./controllers/mainRoute";
// import mongoose from "mongoose";
dotenv_1.default.config();
const app = express_1.default();
if (process.env.NODE_ENV !== "production")
    app.use(cors_1.default());
const port = process.env.PORT || 8000;
if (process.env.NODE_ENV === "production") {
    app.use(express_1.default.static("build"));
    app.get("*", function (_, res) {
        res.sendFile(path_1.default.join(__dirname, "..", "build", "index.html"));
    });
}
// const databaseType =
//   process.env.NODE_ENV === "production"
//     ? "twitchhighlights"
//     : process.env.NODE_ENV === "development"
//     ? "twitchhighlightsdev"
//     : "twtichhighlightstest";
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