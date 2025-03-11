import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
  ],
});

prisma.$on("query", (e) => {
  console.log(e);
});
const main = async () => {
  const filtering = await prisma.user.findMany({
    where: {
      id: 2,
    },
    include: {
      postTwo: {
        include: {
          postCategory: {
            include: {
              category: true,
            },
          },
        },
      },
      profile: true,
    },
  });
  //   console.dir(filtering, { depth: Infinity });
};
main();
