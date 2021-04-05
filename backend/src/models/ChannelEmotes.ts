import mongoose from "mongoose";
const { String } = mongoose.SchemaTypes;
const MongoDate = mongoose.SchemaTypes.Date;
export interface ChannelEmotes {
  channelID: string;
  emotes: Emote[];
  lastUpdated: Date;
  _id?: mongoose.Schema.Types.ObjectId;
  __v?: mongoose.Schema.Types.ObjectId;
}
export interface Emote {
  emoteName: string;
  emoteImgURL: string;
  _id?: string;
}
const ChannelEmotes = new mongoose.Schema({
  channelID: { type: String, required: true, unique: true },
  emotes: [
    {
      emoteName: { type: String, required: true },
      emoteImgURL: { type: String, required: true },
    },
  ],
  lastUpdated: { type: MongoDate, default: new Date(), required: true },
});
ChannelEmotes.set("toJSON", {
  transform: (_: mongoose.Document, ret: ChannelEmotes) => {
    delete ret._id;
    delete ret.__v;
  },
});
ChannelEmotes.set("toObject", {
  transform: (_: mongoose.Document, ret: ChannelEmotes) => {
    delete ret._id;
    delete ret.__v;
    ret.emotes.forEach((item) => delete item._id);
  },
});
export default mongoose.model("ChannelEmotes", ChannelEmotes);
