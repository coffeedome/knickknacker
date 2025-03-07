import express from "express";
import { createKnickKnackHandler } from "../controllers/itemController";

const router = express.Router();

router.post("/", createKnickKnackHandler);

export { router as itemRouter };
