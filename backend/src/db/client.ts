import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

prisma
  .$connect()
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((error) => {
    console.error("Failed to connect to the database", error);
    process.exit(1);
  });

process.on("beforeExit", async () => {
  await prisma.$disconnect();
  console.log("Disconnected from the database");
});

export default prisma;
