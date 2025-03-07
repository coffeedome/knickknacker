import { Request, Response } from "express";
import * as itemsService from "../services/itemsService.js";

export async function createKnickKnackHandler(
  req: Request,
  res: Response
): Promise<any> {
  try {
    const item = await itemsService.addKnickKnack(req.body);
    return res.status(201).json(item);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({
      message: `Unexpected error occurred: ${err as String | "undefined"}`,
    });
  }
}
