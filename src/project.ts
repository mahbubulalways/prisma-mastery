import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   * USER BASED QUERY
  //
  //
  // * CREATE USER
  //   const createUser = await prisma.user.create({
  //     data: {
  //       username: "atik_1007",
  //       email: "atik@gmail.com",
  //       role: UserRole.user,
  //     },
  //   });
  //   console.log(createUser);
  //   ******************* PROFILE BASED QUERY*******************
  //   * CREATE PROFILE
  //   const createProfile = await prisma.profile.create({
  //     data: {
  //       bio: "This is demo bio 2.........",
  //       userId: createUser.id,
  //     },
  //   });
  //   console.log(createProfile);
  //   ******************* CATEGORY BASED QUERY*******************
  //   const createCategory = await prisma.category.createMany({
  //     data: Array.from({ length: 10 }, (_, i) => ({
  //       name: `Category ${i + 1}`,
  //     })),
  //   });
  //   console.log(createCategory);
  //
  //
  //
  //   ********************************** POST BASED QUERY
  const createPost = await prisma.postTwo.create({
    data: {
      title: "this fner ",
      content: "This is content here.....3",
      published: false,
      authorId: 2,
      postCategory: {
        // create: {
        //   category: {
        //     connect: {
        //       id: 1,
        //     },
        //   },
        // },

        create: [
          {
            categoryId: 1,
          },
          {
            categoryId: 2,
          },
          {
            categoryId: 4,
          },
          {
            categoryId: 6,
          },
        ],
      },
    },
    include: {
      postCategory: true,
    },
  });
  console.log(createPost);
};

main();
