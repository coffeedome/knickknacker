import express from "express";
import { createKnickKnackHandler } from "../controllers/itemController";

const router = express.Router();

router.post("/api/v1/items", createKnickKnackHandler);

export default router;
