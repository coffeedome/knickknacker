import { Prisma, Item } from "@prisma/client";
import * as itemRepository from "../db/repositories/itemRepository";

export async function addKnickKnack(
  itemData: Prisma.ItemCreateInput
): Promise<Item> {
  return await itemRepository.createItem(itemData);
}
