import { db, VodInfo, IVod, Comment } from "./db";

export class Vod implements IVod {
  vodID: string;
  channelID: string;
  comments: Comment[];
  vodInfo: VodInfo;

  constructor(
    vodID: string,
    channelID: string,
    comments: Comment[],
    vodInfo: VodInfo
  ) {
    this.vodID = vodID;
    this.channelID = channelID;
    this.comments = comments;
    this.vodInfo = vodInfo;
  }
  save() {
    db.vod.put(this);
  }
  getComments() {
    return this.comments;
  }
}
export const getVod = (id: string) => {
  return db.vod.get(id);
};
export const removeVod = (id: string) => {
  return db.vod.where("vodID").equals(id).delete();
};
export const clear = () => {
  return db.vod.clear();
};
export const getNumVods = () => {
  return db.vod.count();
};
export const getAllVods = () => {
  return db.vod.toArray();
}