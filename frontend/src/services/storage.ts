import { removeVod as removeVodDB, clear as clearVod } from "./../local_db/vod";
import { Comment } from "./../twitch_api/getComments";
import {
  getChannel,
  Channel,
  clear as clearChannel,
} from "./../local_db/channel";
import { VodInfo } from "./../twitch_api/getVodInfo";
import {
  ChannelInfo,
  VodInfo as VodInfoDb,
  Comment as CommentDB,
} from "../local_db/db";
import { getVod, Vod, getNumVods as getNumVodsDB } from "../local_db/vod";

export interface VodWithAllInfo {
  vodID: string;
  channelID: string;
  channelName: string;
  channelInfo: ChannelInfo;
  vodInfo: VodInfoDb;
  comments: CommentDB[];
}
export const getVodFullInfoDB = async (
  vodID: string
): Promise<VodWithAllInfo | null> => {
  const channel = await getChannel(vodID);
  const vod = await getVod(vodID);
  if (channel && vod) {
    return {
      vodID: vod.vodID,
      channelID: channel.channelID,
      channelName: channel.name,
      channelInfo: channel.channel,
      vodInfo: vod.vodInfo,
      comments: vod.comments,
    };
  }
  return null;
};
export const getVodFullInfo = (
  vodID: string,
  vodInfo: VodInfo,
  comments: Comment[]
) => {
  const { channel, ...filteredVodInfo } = vodInfo;
  return {
    vodID,
    channelID: channel._id,
    channelName: channel.display_name,
    channelInfo: {
      logo: channel.logo,
      url: channel.url,
    },
    vodInfo: filteredVodInfo,
    comments: changeComments(comments),
  };
};
const changeComments = (comments: Comment[]): CommentDB[] => {
  return comments.map((item) => ({
    seconds: item.content_offset_seconds,
    message: item.message.body,
    commenter: item.commenter.display_name,
  }));
};
export const saveVods = (
  vodID: string,
  vodInfo: VodInfo,
  comments: Comment[]
) => {
  const channelDB = new Channel(
    vodInfo.channel._id,
    vodInfo.channel.display_name,
    {
      logo: vodInfo.channel.logo,
      url: vodInfo.channel.url,
    }
  );
  channelDB.save();
  const { channel, ...filteredVodInfo } = vodInfo;
  const vod = new Vod(
    vodID,
    channelDB.channelID,
    changeComments(comments),
    filteredVodInfo
  );
  vod.save();
};
export const removeVod = (vodID: string) => {
  return removeVodDB(vodID);
};
export const clear = () => {
  clearChannel();
  clearVod();
};
export const getNumVods = () => {
  return getNumVodsDB();
};
