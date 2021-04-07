import { db, IChannel, ChannelInfo } from "./db";
export class Channel implements IChannel {
  channelID: string;
  name: string;
  channel: ChannelInfo;
  constructor(id: string, name: string, channel: ChannelInfo) {
    this.channelID = id;
    this.name = name;
    this.channel = channel;
  }
  save() {
    db.channel.put(this);
  }
}
export const getChannel = (id: string) => {
  return db.channel.get(id);
};
export const removeChannel = (id: string) => {
  return db.vod.where("channelID").equals(id).delete();
};
export const clear = () => {
  return db.channel.clear();
};
