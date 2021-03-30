import { OnUpdate } from "./../util/Observable";
import { getComments, Comment } from "../twitch_api/getComments";
import Observable from "../util/Observable";
import getVodInfo from "../twitch_api/getVodInfo";
// import axios from "axios";
// const baseUrl =
//   process.env.NODE_ENV === "production" ? "" : "http://localhost:8000";

export interface Speed {
  increment: number;
  speeds: number[];
}
export interface SpeedPoint {
  time: number;
  speed: number;
}
export const getCommentsData = async (
  id: string,
  onUpdate: OnUpdate | null
): Promise<Comment[] | null> => {
  const observ = new Observable(onUpdate);
  const vod = await getVodInfo(id);
  if (!vod) return null;
  const comments = await getComments(id, observ, 0, vod.length);
  observ.finish();
  return comments;
};

export const getSpeeds = (comments: Comment[], increment = 4): Speed => {
  if (comments.length === 0) return { increment, speeds: [] };
  const lastSecond = comments[comments.length - 1].content_offset_seconds;
  const speeds: number[] = Array(~~(lastSecond / increment) + 2).fill(0);
  comments.forEach((comment) => {
    const time = comment.content_offset_seconds;
    speeds[~~(time / increment)] += 1 / increment;
  });
  return { increment, speeds };
};
export const flattenSpeeds = (speed: Speed, flattenFactor: number): Speed => {
  const dividedSpeeds: number[] = speed.speeds.map(
    (item) => item / flattenFactor
  );
  const newSpeeds: number[] = [];
  let i = 0;
  while (i < dividedSpeeds.length) {
    let tmp = 0;
    for (let j = 0; j < flattenFactor; j++) {
      if (i === dividedSpeeds.length) break;
      tmp += dividedSpeeds[i];
      i++;
    }
    newSpeeds.push(tmp);
  }
  return { increment: speed.increment * flattenFactor, speeds: newSpeeds };
};
export const convertToSpeedPoint = (speed: Speed): SpeedPoint[] => {
  return speed.speeds.map((s, i) => ({ time: i * speed.increment, speed: s }));
};
