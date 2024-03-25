import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const create = async () => {
  // const result = await prisma.user.create({
  //   data: {
  //     userName: "Rahi",
  //     email: "rahi1@prisma.com",
  //   },
  // });
  // const result = await prisma.profile.create({
  //   data: {
  //     userId: 1,
  //     bio : "omar"
  //   },
  // });
  // const result = await prisma.post.create({
  //   data: {
  //     title: "This is a post ",
  //     contant: "this is a content",
  //     authorId: 1,
  //     user : "Omar Faruk"
  //   },
  // });

  // console.log(result, "file name : create line number : +-13");
};
