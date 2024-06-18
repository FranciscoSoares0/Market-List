import { Request, Response } from "express";
import MarketList from "../models/MarketList";

export async function deleteItemController(req: Request, res: Response) {
  const marketListId = req.params.id;
  const index = req.params.index;
  const marketList = await MarketList.findById(marketListId);
  if (!marketList) return res.status(400).send("no market list of this id exists");
  marketList.items.splice(parseInt(index), 1);
  await marketList.save();
  res.json(marketList);
}