import Observable from "../util/Observable";
import { Comment } from "./../twitch_api/getComments";

export const getChatSpeed = async (
  comments: Comment[],
  observable: Observable = null,
  increment = 2
) => {
  if (comments.length === 0 || increment === 0) return [];
  const lastSecond = comments[comments.length - 1].content_offset_seconds;
  const output: number[] = Array(~~(lastSecond / increment) + 5).fill(0);
  comments.forEach((comment) => {
    const time = comment.content_offset_seconds;
    output[~~(time / increment)] += 1 / increment;
    if (observable) observable.updateProgress(1);
  });
  return output;
};
export const getSquashedChatSpeed = async (
  comments: Comment[],
  observable: Observable = null,
  increment = 2
) => {
  const allSpeeds = await getChatSpeed(comments, observable, increment);
  const squashedSpeeds: number[] = [];
  let i = 0;
  let curr_skip = 1;
  for (; i < allSpeeds.length; i++) {
    if (allSpeeds[i] !== 0) {
      squashedSpeeds.push(allSpeeds[i]);
      curr_skip = 1;
    } else {
      if (curr_skip === 1) squashedSpeeds.push(0);
      squashedSpeeds[squashedSpeeds.length - 1] = -curr_skip;
      curr_skip++;
    }
  }
  return squashedSpeeds;
};
