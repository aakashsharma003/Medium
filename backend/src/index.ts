import { Hono } from "hono";
import { userRouter } from "./routes/user";
import { blogRouter } from "./routes/blogs";
import { cors } from "hono/cors";
export const app = new Hono();

app.get("/", (c) => {
  return c.json({ message: "Yes It is working, Pls add routes...!" });
});
app.use("/*",cors());
app.route("/api/v1/user", userRouter);
app.route("/api/v1/blog", blogRouter);

export default app;
