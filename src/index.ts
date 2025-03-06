import express from "express";
import itemsRouter from "./routes/itemRoutes";

const server = express();
const port = process.env.PORT || 8080;

server.use(express.json());

server.use("/api/v1/items", itemsRouter);

server.listen(port, () => {
  console.log(`Knickknacker server running on port ${port}`);
});
