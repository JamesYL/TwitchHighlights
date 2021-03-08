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
  } else if (d < 5000) {
    let data = await getFirstComments(videoId, start);
    if (!data._next && !data._prev) return [];
    const comments: Comment[] = data.comments
      .filter(
        ({ content_offset_seconds }) =>
          start <= content_offset_seconds && content_offset_seconds < end
      )
      .map(({ content_offset_seconds, _id, message }) => {
        if (observable) observable.updateProgress(1);
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
            if (observable) observable.updateProgress(1);
            return {
              content_offset_seconds,
              _id,
              message: { body: message.body },
            };
          })
      );
    }
    return comments;
  } else {
    let allComments: Promise<Comment[]>[] = [];
    const DIVISIONS = 50;
    for (let i = 1; i <= DIVISIONS; i++) {
      allComments.push(
        getComments(
          videoId,
          observable,
          start + ((i - 1) * d) / DIVISIONS,
          start + (i * d) / DIVISIONS
        )
      );
    }
    return Promise.all(allComments).then((comments) => {
      return comments.reduce((acc, curr) => {
        acc.push(...curr);
        return acc;
      });
    });
  }
};
