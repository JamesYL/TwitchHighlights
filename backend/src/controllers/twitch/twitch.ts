import axios from "axios";
const config = { headers: { "Client-ID": "kimne78kx3ncx6brgo4mv6wki5h1ko" } };

export const getChannelInfo = async (channelId: string | number) => {
  try {
    return (
      await axios.get(`https://api.twitch.tv/v5/channels/${channelId}`, config)
    ).data;
  } catch (err) {
    return err.response.data;
  }
};
