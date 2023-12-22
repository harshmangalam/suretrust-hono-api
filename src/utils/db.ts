import { connect } from "mongoose";
import { MONGODB_URI } from "../config";

export async function connectDB() {
  try {
    await connect(MONGODB_URI);
    console.log("Connected to mongodb");
  } catch (err) {
    console.log(err);
  }
}
