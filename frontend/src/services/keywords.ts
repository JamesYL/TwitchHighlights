import { Comment } from "./../twitch_api/getComments";
export interface Keyword {
  x: string;
  y: number;
}
export const getKeywords = (comments: Comment[]) => {
  return [
    { x: "Cats", y: 35 },
    { x: "Dogs", y: 40 },
    { x: "Birds", y: 55 },
  ];
};
