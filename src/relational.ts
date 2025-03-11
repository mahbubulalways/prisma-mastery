import { PrismaClient } from "@prisma/client";
import { join } from "path";
const prisma = new PrismaClient();

const main = async () => {
  // fluent api
  const getUser = await prisma.user
    .findUnique({
      where: {
        id: 1,
      },
      // include: {
      //   postTwo: true,
      //   profile: true,
      // },
    })
    .postTwo();
  //   console.log(getUser);
  const getProfile = await prisma.profile.findMany({});
  //   console.log(getProfile);

  //   * GET THOSE USER WHOSE POST ARE PUBLISHED

  const users = await prisma.user.findMany({
    where: {
      id: 2,
    },
    include: {
      postTwo: {
        where: {
          AND: [
            {
              published: true,
            },
            { content: { contains: "4" } },
          ],
        },
      },
    },
  });

  // console.dir(users, { depth: Infinity });
  const notFiltering = await prisma.user.findMany({
    where: {
      id: 2,
    },
    include: {
      postTwo: {
        where: {
          NOT: [{ content: { contains: "3" } }],
        },
      },
    },
  });
  // console.dir(notFiltering, { depth: Infinity });

  // * STARTS ENDS

  const findUser = await prisma.user.findMany({
    where: {
      username: {
        startsWith: "s",
      },
    },
  });
  // console.log(findUser);

  const arr = ["sabbir_219", "tanvir_007"];
  const userArray = await prisma.user.findMany({
    where: {
      username: {
        in: arr,
      },
    },
  });
  // console.log(userArray);

  // * ALL FILTER

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
  console.dir(filtering, { depth: Infinity });
};

main();
