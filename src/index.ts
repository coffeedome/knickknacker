import express from "express";
import morgan from "morgan";
import { itemRouter } from "./routes/itemRoutes.js";
import { userRouter } from "./routes/userRoutes.js";

const server = express();
const port = process.env.PORT || 8080;

server.use(express.json());
server.use(morgan("combined"));

server.use("/api/v1/user", userRouter);
server.use("/api/v1/item", itemRouter);

server.listen(port, () => {
  console.log(`Knickknacker server running on port ${port}`);
});
