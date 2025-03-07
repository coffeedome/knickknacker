import prisma from "../client";
import { Item, Prisma } from "@prisma/client";

export async function getAllItems(): Promise<Item[]> {
  return await prisma.item.findMany();
}

export async function createItem(data: Prisma.ItemCreateInput): Promise<Item> {
  return prisma.item.create({
    data,
  });
}

export async function getItemById(id: number): Promise<Item | null> {
  return prisma.item.findUnique({
    where: { id },
  });
}

export async function updateItem(
  id: number,
  data: Prisma.ItemUpdateInput
): Promise<Item> {
  return prisma.item.update({
    where: { id },
    data,
  });
}
