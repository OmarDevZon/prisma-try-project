import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const crate = async () => {
  // Create single data in db
  // const result = await prisma.post.create({
  //   data: {
  //     title: "this is a test",
  //     contant: "this is my first post2",
  //     author: "Rahi",
  //   },
  // });

  // Create many data in db
  const result = await prisma.post.createMany({
    data: [
      {
        title: "this is a test",
        contant: "this is my first post2",
        author: "Rahi",
      },
      {
        title: "this is a test",
        contant: "this is my first post2",
        author: "Rahi1",
      },
      {
        title: "this is a test",
        contant: "this is my first post2",
        author: "Rahi",
      },
      {
        title: "this is a test",
        contant: "this is my first post2",
        author: "Rahi",
      },
    ],
  });
};
