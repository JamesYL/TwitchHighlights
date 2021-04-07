import Dexie from "dexie";
export type ImageURL = string;
export type DateString = string;
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
}
export interface Comment {
  seconds: number;
  message: string;
  commenter: string;
}
export interface IVod {
  vodID: string;
  channelID: string;
  vodInfo: VodInfo;
  comments: Comment[]
}
export interface ChannelInfo {
  logo: ImageURL;
  url: string;
}
export interface IChannel {
  channelID: string;
  name: string;
  channel: ChannelInfo;
}
class Database extends Dexie {
  vod: Dexie.Table<IVod, string>;
  channel: Dexie.Table<IChannel, string>;

  constructor() {
    super("Database");
    this.version(1).stores({
      contacts: "vodID",
      channel: "channelID, name",
    });
    this.vod = this.table("vod");
    this.channel = this.table("channel");
  }
}

export const db = new Database();
