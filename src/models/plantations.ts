import { model, Schema } from "mongoose";

const schema = new Schema({
  course: String,
  user: String,
  plants: Number,
  slug: String,
  images: [],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Plantations = model("Plantation", schema);
