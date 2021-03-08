import express from "express";
import getVodInfo from "../twitch_api/getVodInfo";
import getSpeedRouter from "./speedRoute";

const router = express.Router();
const getRouter = () => {
  router.get(`/search/:id`, async (req, res) => {
    const vodInfo = await getVodInfo(req.params.id);
    if (vodInfo) res.json(vodInfo);
    else {
      res.status(400).json({ message: "Could not get twitch vod info" });
    }
  });
  router.use("/search", getSpeedRouter());
  return router;
};
export default getRouter;
