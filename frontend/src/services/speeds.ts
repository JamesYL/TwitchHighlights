import { OnUpdate } from "./../util/Observable";
import { getComments, Comment } from "../twitch_api/getComments";
import Observable from "../util/Observable";
import getVodInfo from "../twitch_api/getVodInfo";
// import axios from "axios";
// const baseUrl =
//   process.env.NODE_ENV === "production" ? "" : "http://localhost:8000";

export interface SpeedPoint {
  time: number;
  speed: number;
}
export const getCommentsData = async (
  id: string,
  onUpdate: OnUpdate | null
) => {
  const observ = new Observable(onUpdate);
  const vod = await getVodInfo(id);
  if (!vod) return [];
  const comments = await getComments(id, observ, 0, vod.length);
  observ.finish();
  return comments;
};
export const getSpeeds = async (comments: Comment[], increment = 4) => {
  if (comments.length === 0 || increment === 0) return [];
  const lastSecond = comments[comments.length - 1].content_offset_seconds;
  const output: number[] = Array(~~(lastSecond / increment) + 5).fill(0);
  comments.forEach((comment) => {
    const time = comment.content_offset_seconds;
    output[~~(time / increment)] += 1 / increment;
  });
  const actualOutput: SpeedPoint[] = [];
  let time = 0;
  output.forEach((item) => {
    actualOutput.push({ time: time, speed: item });
    time += increment;
  });
  return actualOutput;
};
