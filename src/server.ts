import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // Create a new
  // const result = await prisma.post.create({
  //   data: {
  //     title: "this is a test",
  //     contant: "this is my first post2",
  //     author: "Omar Faruk",
  //   },
  // });

  // find all data
  const findMany = await prisma.post.findMany();
  // find fist result from db
  const findOneByID = await prisma.post.findFirst({
    where: {
      id: 5,
    },
  });
  // find fist result from db and return error message
  const findOneByIdTrowError = await prisma.post.findFirstOrThrow({
    where: {
      id: 15,
    },
  });
  
  
  // find fist result from db and return error message
  const findUnique = await prisma.post.findUniqueOrThrow({
    where: {
      id: 15,
    },
  });
  console.log(findUnique);
};

main();
