import { config } from "dotenv";
config();

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { getMarketListsController } from "./controllers/getMarketListsController";
import { getMarketListController } from "./controllers/getMarketListController";
import { createMarketListController } from "./controllers/createMarketListController";
import { deleteMarketListController } from "./controllers/deleteMarketListController";
import { updateMarketListController } from "./controllers/updateMarketListController";
import { createItemForMarketListController } from "./controllers/createItemForMarketListController";
import { deleteItemController } from "./controllers/deleteItemController";

const PORT = 5000;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());

app.get("/marketLists", getMarketListsController);
app.get("/marketLists/:id", getMarketListController);
app.post("/marketLists", createMarketListController);
app.delete("/marketLists/:id", deleteMarketListController);
app.put('/marketLists/:id', updateMarketListController);
app.post("/marketLists/:id/items", createItemForMarketListController);
app.delete("/marketLists/:id/items/:index", deleteItemController);


mongoose.connect(process.env.MONGO_URL!).then(() => {
  console.log(`listening on port ${PORT}`);
  app.listen(PORT);
});