import { Hono } from "hono";

const app = new Hono();

app.get("/stats", (c) => c.json({}));

export default app;
