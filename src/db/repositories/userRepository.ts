import prisma from "../client";
import { Prisma, User } from "@prisma/client";

export async function addUser(data: Prisma.UserCreateInput): Promise<User> {
  return await prisma.user.create({ data });
}

export async function getUser(identifier: {
  id?: number;
  email?: string;
  name?: string;
}): Promise<User | null> {
  const filter: any = {};
  try {
    if (identifier.email) {
      filter.email = identifier.email;
    } else if (identifier.id) {
      filter.id = identifier.id;
    } else if (identifier.name) {
      filter.name = identifier.name;
    } else {
      return null;
    }

    return await prisma.user.findFirstOrThrow({ where: filter });
  } catch (err) {
    return null;
  }
}

export async function getAllUsers(): Promise<User[]> {
  return await prisma.user.findMany();
}
