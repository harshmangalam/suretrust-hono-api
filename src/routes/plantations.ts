import { Hono } from "hono";
import { Plantations } from "../models";
import { ALLOWED_PLANTATION_USERS } from "../config";

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

app.get("/charts", async (c) => {
  try {
    const data = await Plantations.aggregate([
      {
        $group: {
          _id: "$course",
          plantsCount: { $sum: "$plants" },
          users: { $push: "$user" },
        },
      },
    ]);

    return c.json(data);
  } catch (error) {
    console.log(error);
    return c.json({ error: "Something went wrong" });
  }
});

app.post("/create", async (c) => {
  try {
    const body = await c.req.json();
    const course = body.course || "Others";
    const batch = body.batch || "";
    const slug = course && batch ? `${course}-(${batch})` : "Others";
    const data = await Plantations.create({
      ...body,
      course,
      batch,
      slug,
    });

    const saved = await data.save();
    return c.json(saved);
  } catch (error) {
    return c.json({ error: "Something went wrong" });
  }
});

app.get("/allowed-users", async (c) => {
  try {
    const allowedUsers = ALLOWED_PLANTATION_USERS?.split(",");
    return c.json({ allowedUsers });
  } catch (error) {
    return c.json({ error: "Something went wrong" });
  }
});

app.get("/:id", async (c) => {
  try {
    const data = await Plantations.findById(c.req.param("id"));
    return c.json(data);
  } catch (error) {
    return c.json({ error: "Something went wrong" });
  }
});

export default app;
