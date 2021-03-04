import { getSquashedChatSpeed } from "../analysis/analyzeChat";
import { getComments } from "../twitch_api/getComments";
import express from "express";
import getVodInfo from "../twitch_api/getVodInfo";
import ChatSpeed from "../models/ChatSpeed";
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
        const INCREMENT = 4;
        const allSpeeds = await getSquashedChatSpeed(
          await getComments(req.params.id),
          null,
          INCREMENT
        );
        try {
          res.json(
            await new ChatSpeed({
              vodID: req.params.id,
              increment: INCREMENT,
              speeds: allSpeeds,
            }).save()
          );
        } catch (err) {
          // Duplicate vodIDs due to two requests at the same time
          if (err.code === 11000) {
            res.json(
              await ChatSpeed.findOne({
                vodID: req.params.id,
              })
            );
          } else {
            console.error(err.message);
          }
        }
      }
    } else {
      res.status(400).json({ message: "Could not get twitch vod info" });
    }
  });
  return router;
};
export default getRouter;
