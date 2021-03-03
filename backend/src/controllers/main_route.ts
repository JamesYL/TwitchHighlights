import { getComments } from "./../twitch_api/getComments";
import express from "express";
import getVodInfo from "../twitch_api/getVodInfo";
import ChatSpeed from "../models/ChatSpeed";
import { getChatSpeed } from "../analysis/analyzeChat";
const router = express.Router();
const getRouter = () => {
  router.get(`/search/:id`, async (req, res) => {
    const vodInfo = await getVodInfo(req.params.id);
    if (vodInfo) res.json(vodInfo);
    else {
      res.status(400).json({ message: "Could not get twitch vod info" });
    }
  });
  router.get(`/search/speed/:id`, async (req, res) => {
    const vodInfo = await getVodInfo(req.params.id);
    if (vodInfo) {
      const chatSpeed = await ChatSpeed.findOne({ vodID: req.params.id });
      if (chatSpeed) res.json(chatSpeed);
      else {
        const allSpeeds = await getChatSpeed(await getComments(req.params.id));
        new ChatSpeed({
          vodID: req.params.id,
          increment: 2,
          speeds: allSpeeds,
        })
          .save()
          .then((savedSpeeds) => res.json(savedSpeeds));
      }
    } else {
      res.status(400).json({ message: "Could not get twitch vod info" });
    }
  });
  return router;
};
export default getRouter;
