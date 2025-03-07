import { Request, Response } from "express";
import * as userService from "../services/userService";
import { User } from "@prisma/client";

export async function createNewUser(req: Request, res: Response): Promise<any> {
  try {
    const item = await userService.addUser(req.body);
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

export async function getUser(req: Request, res: Response): Promise<any> {
  try {
    const filter: any = {};
    if (req.query.id) {
      filter.id = Number(req.query.id);
    } else if (req.query.email) {
      filter.email = req.query.email;
    } else if (req.query.name) {
      filter.name = req.query.name;
    } else {
      return null;
    }
    const user = await userService.getUser(filter);
    return res.status(200).json(user);
  } catch (err) {
    if (err instanceof Error) {
      return res.status(400).json({ message: err.message });
    }
    return res.status(500).json({
      message: `Unexpected error occurred: ${err as String | "undefined"}`,
    });
  }
}
