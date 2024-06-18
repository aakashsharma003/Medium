import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();
blogRouter.use("/*", async (c, next) => {
  try {
    const tokenWithBearer = c.req.header("authorization") || "";
    const token = tokenWithBearer.split(" ")[1]; // Extract token without "Bearer "
    try {
      if (!token) {
        c.status(403);
        return c.json({ message: "Unauthorized" });
      }

      const user = await verify(token, c.env.JWT_SECRET);

      if (user) {
        c.set("userId", `${user.id}`);
        await next();
      } else {
        c.status(403);
        return c.json({ message: "Unauthorized" });
      }
    } catch (err) {
      c.status(403);
      return c.json({ message: "User is Unauthorized" });
    }
  } catch (err) {
    console.error("Error verifying token:", err);
    c.status(500); // Internal server error
    return c.json({ message: "Internal Server Error" });
  }
});

blogRouter.post("/", async (c) => {
  const body = await c.req.json();
  //   console.log(body);
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogId = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        authorId: parseInt(c.get("userId")),
      },
      select: {
        id: true,
      },
    });
    return c.json({ message: "blog Created Successfully", blogId });
  } catch (err) {
    console.error(err);
    c.status(411);
    return c.json({
      message: "Error Occured while creating blog",
    });
    // c.text("Hello hono");
  }
});

blogRouter.put("/", async (c) => {
  const body = await c.req.json();
  //   console.log(body);
  const authorId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.update({
      where: {
        id: body.id,
      },
      data: {
        title: body.title,
        content: body.content,
        authorId: Number(authorId),
      },
    });
    return c.json({ message: "blog Updated Successfully", blog });
  } catch (err) {
    console.error(err);
    c.status(411);
    return c.json({
      message: "Error Occured while updating blog info",
    });
    // c.text("Hello hono");
  }
});
// Todo: need a pagination here
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const blog = await prisma.blog.findMany();
    return c.json({ blog: blog });
  } catch (err) {
    console.error(err);
    c.status(411);
    return c.json({
      message: "Error Occured while bringing all blogs",
    });
    // c.text("Hello hono");
  }
});
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
    });
    return c.json({ message: "got your blogs", blog });
  } catch (err) {
    console.error(err);
    c.status(411);
    return c.json({
      message: "Error Occured while bringing all blogs with id",
    });
    // c.text("Hello hono");
  }
});
