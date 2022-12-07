import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function hello(req, res) {
  try {
    const post = await prisma.post.create({
      data: {
        title: "Hello again!",
        slug: "prisma and mongo",
        body: "its working!",
      },
    });
    res.json(post);
  } catch (error) {
    res.json({ error: error.message });
    return;
  }
}
