import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const avg_age_user = await prisma.user.aggregate({ _avg: { age: true } });
  const sum_age_user = await prisma.user.aggregate({ _sum: { age: true } });
  const count_age_user = await prisma.user.aggregate({
    _count: true,
    where: {
      age: { gt: 20 },
    },
  });
  const max_age_user = await prisma.user.aggregate({ _max: { age: true } });
  const min_age_user = await prisma.user.aggregate({ _min: { age: true } });
  const count_user = await prisma.user.count();
  // console.log(count_age_user);
  // console.log(count_user);

  // * GROUP BY

  const posts = await prisma.postTwo.groupBy({
    by: ["published"],
    having: {
      authorId: {
        _sum: {
          gt: 13,
        },
      },
    },
    _count: true,
  });
  console.log(posts);
};

main();
