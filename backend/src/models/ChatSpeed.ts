import { makeModel } from "./../util/model_util";
import mongoose from "mongoose";
const { String, Number } = mongoose.SchemaTypes;
const Schema = mongoose.Schema;

export default makeModel(
  "ChatSpeed",
  new Schema({
    vodID: { type: String, required: true, unique: true },
    increment: { type: Number, required: true, min: 0.1 },
    speeds: [{ type: Number, min: 0 }],
  })
);
