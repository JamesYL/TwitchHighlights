import { Comment } from "../local_db/db";

import axios from "axios";
import { VodWithAllInfo } from "./storage";
export interface Keyword {
  color: string;
  value: number;
  title: string | number;
  url: string;
}
export interface Emote {
  emoteName: string;
  emoteImgURL: string;
}
export const getKeywords = async (vodInfo: VodWithAllInfo) => {
  try {
    const emotes = (await axios.get(`/api/emotes/${vodInfo.channelID}`))
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
    vodInfo.comments
      .map((item) => item.message.trim().toLowerCase())
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
    const colours = [
      "#2d080a",
      "#c2f970",
      "#7c3626",
      "#a499b3",
      "#f5853f",
      "#89d2dc",
      "#093824",
      "#98a6d4",
      "#ffcdbc",
      "#6564db",
    ];
    for (const key in emoteNumTimes) {
      output.push({
        title: emoteMap[key].name,
        value: (100 * emoteNumTimes[key]) / total,
        color: "#E38627",
        url: emoteMap[key].url,
      });
    }
    output.sort((a, b) => {
      if (a.value >= b.value) return -1;
      return 0;
    });
    const newOutput: Keyword[] = [];
    let otherPercent = 0;
    for (let i = 0; i < output.length; i++) {
      if (output[i].value >= 1) {
        newOutput.push({
          ...output[i],
          color: colours[i % colours.length],
        });
      } else {
        otherPercent += output[i].value;
      }
    }
    if (otherPercent > 0) {
      newOutput.push({
        title: "Other",
        value: otherPercent,
        color: "#E38627",
        url: "",
      });
    }
    return newOutput;
  } catch (err) {
    return [
      {
        title: "Error",
        value: 100,
        color: "#E38627",
        url: "",
      },
    ];
  }
};
