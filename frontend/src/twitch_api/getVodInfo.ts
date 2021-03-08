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

const getVodInfo = async (id: number | string): Promise<VodInfo | null> => {
  const url = `https://api.twitch.tv/v5/videos/${id}`;
  try {
    const output: VodInfo = {
      title: "",
      views: 0,
      url: "",
      language: "",
      created_at: "",
      published_at: "",
      recorded_at: "",
      game: "",
      length: 0,
      preview: {
        small: "",
        medium: "",
        large: "",
      },
      channel: {
        display_name: "",
        logo: "",
        url: "",
      },
    };
    const data = (await axios.get(url, config)).data as VodInfo;
    for (const key in output) {
      if (typeof output[key as keyof VodInfo] === "object") {
        // @ts-ignore
        for (const key2 in output[key]) {
          // @ts-ignore
          output[key][key2] = data[key][key2];
        }
      } else {
        // @ts-ignore
        output[key] = data[key];
      }
    }
    return output;
  } catch (err) {
    return null;
  }
};
export default getVodInfo;
