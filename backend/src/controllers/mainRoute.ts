import { getChannelInfo } from "./twitch/twitch";
import { getAllEmotes } from "./emotes/emotes";
import express from "express";

const router = express.Router();

const getRouter = () => {
  router.get(`/emotes/:id`, async (req, res) => {
    const channel = await getChannelInfo(req.params.id);
    if (channel.error) {
      res.status(channel.status).json(channel);
    } else res.json(await getAllEmotes(req.params.id));
  });

  return router;
};
export default getRouter;
