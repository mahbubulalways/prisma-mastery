import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  // * BATCH TRANSACTION
  const createUser = prisma.user.create({
    data: {
      email: "sssss@h.com",
      username: "sabbir_3q3",
      age: 20,
      role: UserRole.admin,
    },
  });
  const createProfile = prisma.user.update({
    data: {
      age: 1000,
    },
    where: {
      id: 5,
    },
  });
  //   * INTERACTIVE TRANSACTION

  const [userData, profileData] = await prisma.$transaction(async (tx) => {
    const user = await tx.user.create({
      data: {
        email: "sssss@h.com",
        username: "sabbir_3q3",
        age: 20,
        role: UserRole.admin,
      },
    });
    const profile = await tx.profile.create({
      data: {
        bio: "THUHI H E  EHBE  EHHE E",
        userId: user.id,
      },
    });
    return [user, profile];
  });
  console.log(userData, profileData);
};

main();
