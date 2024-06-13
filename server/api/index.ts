import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getMarketListsController } from "./controllers/getMarketListsController";
import { createMarketListController } from "./controllers/createMarketListController";
import { deleteMarketListController } from "./controllers/deleteMarketListController";
import { updateMarketListController } from "./controllers/updateMarketListController";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/marketLists", getMarketListsController);
app.post("/marketLists", createMarketListController);
app.delete("/marketLists/:id", deleteMarketListController);
app.put('/marketLists/:id', updateMarketListController);


mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});