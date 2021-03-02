import mongoose from "mongoose";
import express from "express";
import getVodInfo from "../twitch_api/getVodInfo";
const router = express.Router();
const getRouter = (db: typeof mongoose) => {
  router.get(`/search/:id`, async (req, res) => {
    const vodInfo = await getVodInfo(req.params.id);
    if (vodInfo) res.json(vodInfo);
    else {
      res.status(400).json({ message: "Could not get twitch vod info" });
    }
  });
  return router;
};
export default getRouter;
