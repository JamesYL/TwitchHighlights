import mongoose from "mongoose";
const { String, Number } = mongoose.SchemaTypes;
interface ChatSpeedType {
  vodID: string;
  increment: number;
  speeds: string[];
  _id: mongoose.Schema.Types.ObjectId;
  __v: mongoose.Schema.Types.ObjectId;
}
const ChatSpeed = new mongoose.Schema({
  vodID: { type: String, required: true, unique: true },
  increment: { type: Number, required: true, min: 0.1 },
  speeds: { type: [Number], required: true },
});
ChatSpeed.set("toJSON", {
  transform: (_: mongoose.Document, ret: ChatSpeedType) => {
    delete ret._id;
    delete ret.__v;
  },
});
export default mongoose.model("ChatSpeed", ChatSpeed);
