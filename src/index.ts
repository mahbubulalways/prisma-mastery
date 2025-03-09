import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   const result = await prisma.post.create({
  //     data: {
  //       title: "This is title 2",
  //       content: "This is content 2",
  //       author: "This is author 2",
  //     },
  //   });

  //   console.log(result);

  //   const getData = await prisma.post.findMany({ where: { id: 1 } });
  //   //   console.log(getData);

  //   const findFirst = await prisma.post.findFirstOrThrow({
  //     where: { published: false },
  //   });
  //   console.log(findFirst);
  //   const findUnique = await prisma.post.findUnique({
  //     where: { id: 1 },
  //   });
  //   console.log(findUnique);

  // * CREATE MORE DATA

  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "This is title 4",
  //       content: "This is content 4",
  //       author: "This is author 4",
  //     },
  //     {
  //       title: "This is title 5",
  //       content: "This is content 5",
  //       author: "This is author 5",
  //     },
  //     {
  //       title: "This is title 6",
  //       content: "This is content 6",
  //       author: "This is author 6",
  //     },
  //     {
  //       title: "This is title 7",
  //       content: "This is content 7",
  //       author: "This is author 7",
  //     },
  //   ],
  // });

  //   console.log(createMany);

  // * UPDATE

  //   const update1 = await prisma.post.update({
  //     data: { published: true },
  //     where: { id: 1 },
  //   });
  //   console.log(update1);

  //   const update2 = await prisma.post.updateMany({
  //     data: { published: true },
  //     where: { title: "This is title 2" },
  //   });
  //   console.log(update2);

  // * DELETE

  //   const delete1 = await prisma.post.deleteMany({});
  //   console.log(delete1);

  // *UPSERT

  //   const upsert = await prisma.post.upsert({
  //     where: { id: 3 },
  //     update: { title: "THIS TITLE IS UPDATE" },
  //     create: { content: "content 1", author: "author 1", title: "title 1" },
  //   });
  //   console.log(upsert);

  //   const createMany = await prisma.post.createMany({
  //     data: Array.from({ length: 50 }, (_, i) => ({
  //       title: `This is title ${i + 1}`,
  //       content: `This is content ${i + 1}`,
  //       author: `This is author ${i + 1}`,
  //     })),
  //   });
  //   console.log(createMany);

  // * PAGINATION AND SORTING
  // offset pagination
  const pageNo = 3;
  const take = 8;
  const skip = (pageNo - 1) * 8;
  const count = (await prisma.post.findMany()).length;
  const pages = Math.ceil(count / take);
  console.log(pages);
  const offsetPagination = await prisma.post.findMany({
    skip: skip,
    take: take,
  });

  //   cursor based
  const cursorBasedPagination = await prisma.post.findMany({
    skip: skip,
    take: take,
    cursor: { id: 17 },
  });
  console.log(cursorBasedPagination);
};
main();
