import mongoose from "mongoose";

export const makeModel = (name: string, schema: mongoose.Schema) => {
  schema.set("toJSON", {
    // @ts-ignore
    transform: (_, ret) => {
      delete ret._id;
      delete ret.__v;
    },
  });
  return mongoose.model(name, schema);
};
