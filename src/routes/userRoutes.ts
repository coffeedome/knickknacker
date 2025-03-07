import express from "express";
import { createNewUser, getUser } from "../controllers/userController.js";

const router = express.Router();

router.post("/", createNewUser);
router.get("/", getUser);

export { router as userRouter };
