import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {

  // Create a new 
  const result = await prisma.post.create({
    data: {
      title: "this is a test",
      contant: "this is my first post2",
      author: "Omar Faruk",
    },
  });
};

main();
