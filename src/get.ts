import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const queryUser = async () => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });

  console.log(result);
};
export const relationalFilter = async () => {
  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id: 1,
    },
    include: {
      post: true,
    },
  });

  console.log(result);
};
