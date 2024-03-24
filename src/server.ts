import { PrismaClient } from "@prisma/client";
import { crate } from "./cratePost";
import { update } from "./update";
import { deletePost } from "./delete";

const prisma = new PrismaClient();

const main = async () => {
  

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

// crate();
// update()
deletePost(2)