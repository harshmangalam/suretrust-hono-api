import { Hono } from "hono";
import plantations from "./routes/plantations";
import { connectDB } from "./utils/db";

connectDB();

const app = new Hono();

app.route("/plantations", plantations);

export default app;
