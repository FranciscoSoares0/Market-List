import { Request, Response } from "express";
import MarketList from "../models/MarketList";

export async function createItemForMarketListController(req: Request, res: Response) {
  const marketListId = req.params.id;
  const marketList = await MarketList.findById(marketListId);
  if (!marketList) return res.status(400).send("no market list of this id exists");
  const { text } = req.body;
  marketList.items.push(text);
  await marketList.save();
  res.json(marketList);
}