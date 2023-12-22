import { Hono } from "hono";
import { Plantations } from "../models";

const app = new Hono();

app.get("/stats", async (c) => {
  try {
    const users = await Plantations.estimatedDocumentCount();
    const data = await Plantations.find().select("plants");
    let plants = data.reduce((prev, curr) => prev + curr?.plants!, 0);

    return c.json({
      users,
      plants,
    });
  } catch (error) {
    console.log(error);
    return c.json({ error: "Something went wrong" });
  }
});

export default app;
