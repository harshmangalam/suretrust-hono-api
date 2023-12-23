import { Hono } from "hono";
import plantations from "./routes/plantations";
import { connectDB } from "./utils/db";
import { ORIGIN, PORT } from "./config";
import { cors } from "hono/cors";

connectDB();
const app = new Hono();
app.use(
  "/api/*",
  cors({
    origin: ORIGIN.split(","),
  })
);
app.route("/api/plantations", plantations);

export default {
  port: PORT,
  fetch: app.fetch,
};
