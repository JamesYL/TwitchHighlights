import axios from "axios";
const config = { headers: { "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko" } };

const getVodInfo = async (id: number | string) => {
  const url = `https://api.twitch.tv/v5/videos/${id}`;
  return (await axios.get(url, config)).data;
};
export default getVodInfo;
