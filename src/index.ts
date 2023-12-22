import { Hono } from "hono";
import plantations from "./plantations";

const app = new Hono();

app.route("/plantations", plantations);

export default app;
