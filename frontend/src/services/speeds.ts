import { OnUpdate } from "./../util/Observable";
import { getComments, Comment } from "../twitch_api/getComments";
import { Comment as CommentDB } from "../local_db/db";

import Observable from "../util/Observable";
import getVodInfo from "../twitch_api/getVodInfo";

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

export const getSpeeds = (
  comments: CommentDB[],
  filter: string[] = [],
  increment = 4
): Speed => {
  let filteredComments: CommentDB[] = [];
  filter = filter
    .filter((item) => item.length > 0)
    .map((item) => item.toLowerCase());
  if (filter.length) {
    const filterSet = new Set(filter);
    comments.forEach((line) => {
      const comment = line.message
        .toLowerCase()
        // eslint-disable-next-line
        .replace(/[,\/#!$%\^\*{}?`~]/g, "");
      const split = comment.split(" ");
      for (const item of split) {
        if (filterSet.has(item)) {
          filteredComments.push(line);
          break;
        }
      }
    });
  } else {
    filteredComments = comments;
  }
  if (filteredComments.length === 0) return { increment, speeds: [] };
  const lastSecond = filteredComments[filteredComments.length - 1].seconds;
  const speeds: number[] = Array(~~(lastSecond / increment) + 2).fill(0);
  filteredComments.forEach((comment) => {
    const time = comment.seconds;
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
