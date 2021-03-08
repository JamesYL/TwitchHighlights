import { getComments } from "./../twitch_api/getComments";
import { getSquashedChatSpeed } from "./../analysis/analyzeChat";
import express from "express";
import getVodInfo from "../twitch_api/getVodInfo";
import ChatSpeed from "../models/ChatSpeed";
import Observable from "../util/Observable";

const router = express.Router();
interface Progress {
  [key: string]: number;
}
const inProgress: Progress = {};
const getSpeedRouter = () => {
  router.get(`/speed/:id`, async (req, res) => {
    const vodInfo = await getVodInfo(req.params.id);
    if (vodInfo) {
      const chatSpeed = await ChatSpeed.findOne({ vodID: req.params.id });
      if (chatSpeed) res.json({ loading: false, ...chatSpeed.toJSON() });
      else {
        const INCREMENT = 4;
        if (req.params.id in inProgress) {
          res.json({
            loading: true,
            progress: inProgress[req.params.id],
            vodID: req.params.id,
            increment: INCREMENT,
            speeds: [],
          });
        } else {
          res.json({
            loading: true,
            progress: 0,
            vodID: req.params.id,
            increment: INCREMENT,
            speeds: [],
          });
          const observ = new Observable((progress) => {
            inProgress[req.params.id] = progress;
          });
          const allSpeeds = await getSquashedChatSpeed(
            await getComments(req.params.id, observ),
            null,
            INCREMENT
          );
          await new ChatSpeed({
            vodID: req.params.id,
            increment: INCREMENT,
            speeds: allSpeeds,
          }).save();
        }
      }
    } else {
      res.status(400).json({ message: "Could not get twitch vod info" });
    }
  });
  return router;
};
export default getSpeedRouter;
