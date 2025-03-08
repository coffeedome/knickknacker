import { Prisma, User } from "@prisma/client";
import * as userRepository from "../db/repositories/userRepository.js";

export async function addUser(userData: Prisma.UserCreateInput): Promise<User> {
  return await userRepository.addUser(userData);
}

export async function getUser(filter: {
  id?: number;
  email?: string;
  name?: string;
}): Promise<User | null> {
  return await userRepository.getUser(filter);
}
