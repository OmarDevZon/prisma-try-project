import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const transition = async () => {
  const result = await prisma.user.create({
    data: {
      userName: "Rahi",
      email: "rahaaia3@gmail.com",
    },
  });
  const update = await prisma.user.update({
    where: {
      id: 10,
    },
    data: {
      userName: "Rahi Moni",
      email: "rahiaa3@gmail.com",
    },
  });

  const [userData, updateData] = await prisma.$transaction([result, update]);
  console.log(userData, "file name : transition line number : +-28");
  console.log(updateData, "file name : transition line number : +-28");
};
