import mongoose from "mongoose";
import { MONGODB_URI } from "../config";

export async function connectDB() {
  await mongoose.connect(MONGODB_URI);
  console.log("Connected to mongodb");
}
