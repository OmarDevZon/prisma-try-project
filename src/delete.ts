import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const deletePost = async ()  => {
//   const result = await prisma.post.delete({
//     where: { id },
//   });
  const result = await prisma.post.deleteMany({
    where: { id : 4  },
   });
};
