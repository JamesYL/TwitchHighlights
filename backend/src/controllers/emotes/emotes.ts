import axios from "axios";
import {
  Emote,
  ChannelEmotes as ChannelEmotesType,
} from "./../../models/ChannelEmotes";
import ChannelEmotes from "./../../models/ChannelEmotes";
interface TwitchEmote {
  code: string;
  id: string;
}
interface BTTVEmote {
  id: string;
  code: string;
}
const updateGlobalBttvEmotes = async () => {
  let updatedEmotes: Emote[] = [];
  const channelID = "BTTVEmotes";
  const emotes = await ChannelEmotes.findOne({
    channelID: channelID,
  });
  if (emotes) {
    const emotesObj = emotes.toObject() as ChannelEmotesType;
    // Last updated less than 30 minutes ago
    if ((Date.now() - emotesObj.lastUpdated.getTime()) / 1000 / 60 < 30) {
      return emotesObj.emotes;
    }
  }
  try {
    const bttvData: BTTVEmote[] = (
      await axios.get("https://api.betterttv.net/3/cached/emotes/global")
    ).data;
    updatedEmotes = bttvData.map(({ code, id }) => {
      return {
        emoteName: code,
        emoteImgURL: `https://cdn.betterttv.net/emote/${id}/3x`,
      };
    });
  } catch (err) {}
  if (emotes)
    ChannelEmotes.findOneAndUpdate(
      { channelID: channelID },
      { emotes: updatedEmotes, lastUpdated: new Date() }
    );
  else {
    new ChannelEmotes({
      channelID: channelID,
      emotes: updatedEmotes,
      lastUpdated: new Date(),
    }).save();
  }
  return updatedEmotes;
};

const updateGlobalTwitchEmotes = async () => {
  return updateChannelEmotes(0);
};

const updateChannelEmotes = async (channelId: string | number) => {
  let updatedEmotes: Emote[] = [];
  const emotes = await ChannelEmotes.findOne({
    channelID: channelId,
  });
  if (emotes) {
    const emotesObj = emotes.toObject() as ChannelEmotesType;
    // Last updated less than 30 minutes ago
    if ((Date.now() - emotesObj.lastUpdated.getTime()) / 1000 / 60 < 30) {
      return emotesObj.emotes;
    }
  }
  try {
    const twitchData = (
      await axios.get(
        `https://api.twitchemotes.com/api/v4/channels/${channelId}`
      )
    ).data;
    if (twitchData.emotes) {
      const emotes = twitchData.emotes as TwitchEmote[];
      updatedEmotes = [
        ...emotes.map(({ code, id }) => {
          return {
            emoteName: code,
            emoteImgURL: `https://static-cdn.jtvnw.net/emoticons/v1/${id}/3.0`,
          };
        }),
      ];
    }
  } catch (err) {}
  try {
    const bttvData = (
      await axios.get(
        `https://api.betterttv.net/3/cached/users/twitch/${channelId}`
      )
    ).data;
    if (bttvData.channelEmotes) {
      const emotes = bttvData.channelEmotes as BTTVEmote[];
      emotes.forEach(({ code, id }) => {
        updatedEmotes.push({
          emoteName: code,
          emoteImgURL: `https://cdn.betterttv.net/emote/${id}/3x`,
        });
      });
    }
    if (bttvData.sharedEmotes) {
      const emotes = bttvData.sharedEmotes as BTTVEmote[];
      emotes.forEach(({ code, id }) => {
        updatedEmotes.push({
          emoteName: code,
          emoteImgURL: `https://cdn.betterttv.net/emote/${id}/3x`,
        });
      });
    }
  } catch (err) {}
  if (emotes) {
    ChannelEmotes.findOneAndUpdate(
      { channelID: channelId },
      { emotes: updatedEmotes, lastUpdated: new Date() }
    );
  } else {
    new ChannelEmotes({
      channelID: channelId,
      emotes: updatedEmotes,
      lastUpdated: new Date(),
    }).save();
  }
  return updatedEmotes;
};

export const getAllEmotes = async (channelId: string | number) => {
  return (await updateGlobalBttvEmotes()).concat(
    await updateGlobalTwitchEmotes(),
    await updateChannelEmotes(channelId)
  );
};
