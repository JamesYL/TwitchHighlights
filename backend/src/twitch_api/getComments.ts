import axios from "axios";
import Observable from "../util/Observable";
const config = { headers: { "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko" } };

interface Chat {
  comments: Comment[];
  _next?: string;
  _prev?: string;
}
export interface Comment {
  content_offset_seconds: number;
  _id: string;
  message: {
    body: string;
  };
}

// This is used to get the first few comments based on time
const getFirstComments = async (
  videoId: string | number,
  startSeconds = 0
): Promise<Chat> => {
  const url = `https://api.twitch.tv/v5/videos/${videoId}/comments?content_offset_seconds=${startSeconds}`;

  try {
    const { data } = await axios.get(url, config);
    return data;
  } catch (err) {
    return { comments: [] };
  }
};
// This is used to get the next comments based on the link from the previous comment
const getNext = async (
  videoId: string | number,
  cursor: string | number
): Promise<Chat> => {
  const url = `https://api.twitch.tv/v5/videos/${videoId}/comments?cursor=${cursor}`;
  try {
    const data: Chat = (await axios.get(url, config)).data;
    return data;
  } catch (err) {
    return { comments: [] };
  }
};
export const getComments = async (
  videoId: string | number,
  observable: Observable = null,
  start = 0,
  end = 200000
): Promise<Comment[]> => {
  const d = end - start;
  if (start < 0 || end < 0 || end < start) {
    return [];
  } else if (d < 1000) {
    let data = await getFirstComments(videoId, start);
    if (!data._next && !data._prev) return [];
    const comments: Comment[] = data.comments
      .filter(
        ({ content_offset_seconds }) =>
          start <= content_offset_seconds && content_offset_seconds < end
      )
      .map(({ content_offset_seconds, _id, message }) => {
        return {
          content_offset_seconds,
          _id,
          message: { body: message.body },
        };
      });

    while (data.comments.length && data._next) {
      if (data.comments[data.comments.length - 1].content_offset_seconds > end)
        break;
      data = await getNext(videoId, data._next);
      comments.push(
        ...data.comments
          .filter(
            ({ content_offset_seconds }) =>
              start <= content_offset_seconds && content_offset_seconds < end
          )
          .map(({ content_offset_seconds, _id, message }) => {
            return {
              content_offset_seconds,
              _id,
              message: { body: message.body },
            };
          })
      );
    }
    if (observable) observable.updateProgress(d);
    return comments;
  } else {
    const first = getComments(videoId, observable, start, end - d / 2);
    const second = getComments(videoId, observable, start + d / 2, end);
    return Promise.all([first, second]).then((comments) => {
      comments[0].push(...comments[1]);
      return comments[0];
    });
  }
};
