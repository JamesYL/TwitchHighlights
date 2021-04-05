import { Comment } from "./../twitch_api/getComments";
import axios from "axios";
import getVodInfo from "../twitch_api/getVodInfo";
export interface Keyword {
  x: string;
  y: number;
}
export interface Emote {
  emoteName: string;
  emoteImgURL: string;
}
export const getKeywords = async (
  vodID: string | number,
  comments: Comment[]
) => {
  const vodInfo = await getVodInfo(vodID);
  if (vodInfo) {
    try {
      const emotes = (await axios.get(`/api/emotes/${vodInfo.channel._id}`))
        .data as Emote[];
      interface EmoteMap {
        [nameLower: string]: {
          url: string;
          name: string;
        };
      }
      const emoteMap: EmoteMap = {};
      emotes.forEach((item) => {
        emoteMap[item.emoteName.toLowerCase()] = {
          url: item.emoteImgURL,
          name: item.emoteName,
        };
      });
      const emoteNumTimes = {};
      let total = 0;
      comments
        .map(
          (item) =>
            item.message.body
              .trim()
              .toLowerCase()
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "") //eslint-disable-line
        )
        .filter((msg) => msg.length > 0)
        .forEach((item) => {
          const split = item.split(" ");
          const hasUsed = new Set();
          split.forEach((item) => {
            const trimmed = item.trim();
            if (trimmed in emoteMap && !hasUsed.has(trimmed)) {
              hasUsed.add(emoteMap[trimmed].name);
              if (!(trimmed in emoteNumTimes)) emoteNumTimes[trimmed] = 0;
              emoteNumTimes[trimmed]++;
              total++;
            }
          });
        });
      const output: Keyword[] = [];
      for (const key in emoteNumTimes) {
        output.push({
          x: emoteMap[key].name,
          y: (100 * emoteNumTimes[key]) / total,
        });
      }
      output.sort((a, b) => {
        if (a.y >= b.y) return -1;
        return 0;
      });
      const newOutput: Keyword[] = [];
      let otherPercent = 0;
      for (let i = 0; i < output.length; i++) {
        if (output[i].y >= 2) {
          newOutput.push(output[i]);
        } else {
          otherPercent += output[i].y;
        }
      }
      if (otherPercent > 0) {
        newOutput.push({ x: "Other", y: otherPercent });
      }
      return newOutput;
    } catch (err) {
      return [{ x: "Error", y: 100 }];
    }
  }
  return [{ x: "Error", y: 100 }];
};
