import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const posts = await prisma.$queryRaw`SELECT * FROM "posts_2"`;
  console.log(posts);
};

main();
