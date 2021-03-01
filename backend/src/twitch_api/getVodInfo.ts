import axios from "axios";
const config = { headers: { "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko" } };

type ImageURL = string;
type DateString = string;
export interface VodInfo {
  title: string;
  views: number;
  url: string;
  language: string;
  created_at: DateString;
  published_at: DateString;
  recorded_at: DateString;
  game: string;
  length: number;
  preview: {
    small: ImageURL;
    medium: ImageURL;
    large: ImageURL;
  };
  channel: {
    display_name: string;
    logo: ImageURL;
    url: string;
  };
}

export default async (id: number | string): Promise<VodInfo> => {
  const url = `https://api.twitch.tv/v5/videos/${id}`;
  return (await axios.get(url, config)).data as VodInfo;
};
