import { Hono } from "hono";
import { sign } from "hono/jwt";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { signinInput, signupInput } from "@003xdevs/medium-commons";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
  const { name, username, email, password } = await c.req.json();
  const { success } = signupInput.safeParse({
    name,
    username,
    email,
    password,
  });
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are not Valid",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password,
        name,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "User created Successfully", token });
  } catch (err) {
    console.error(err);
    c.status(411);
    return c.json({
      message: "User already exist with this email",
    });
    // c.text("Hello hono");
  }
  // we need to add zod as validation and use hashed password
});

userRouter.post("/signin", async (c) => {
  const { username, password } = await c.req.json();
  const headers = await c.req.header();
  // console.log(headers);
  const { success } = signinInput.safeParse({ username, password });
  if (!success) {
    c.status(411);
    return c.json({
      message: "Inputs are not Valid",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        username,
        password,
      },
    });
    if (!user) {
      c.status(403); //unauthorized
      return c.json({
        message: "Incorrect Credential",
      });
    }
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ message: "User Logged in Succesfully", user, token });
  } catch (err) {
    console.error(err);
    c.status(411);
    return c.json({
      message: "Username already exist with this email",
    });
    // c.text("Hello hono");
  }
});

userRouter.get("/myblogs", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        id: 1,
      },
      select: {
        id: true,
        username: true,
        blogs: true,
      },
    });
    if (!user?.blogs) {
      c.status(404);
      return c.json({ message: "You have'nt created any blog yet" });
    }
    return c.json({ message: "got your blogs", user });
  } catch (err) {
    console.error(err);
    c.status(411);
    return c.json({
      message: "Error Occured while bringing all blogs with id",
    });
    // c.text("Hello hono");
  }
});
