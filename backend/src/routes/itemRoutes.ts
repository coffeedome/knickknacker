import express from "express";
import { createKnickKnackHandler } from "../controllers/itemController.js";

const router = express.Router();

router.post("/", createKnickKnackHandler);

export { router as itemRouter };
