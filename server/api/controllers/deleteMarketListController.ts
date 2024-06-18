import { Request, Response } from "express";
import MarketList from "../models/MarketList";

export async function deleteMarketListController(req: Request, res: Response) {
  const marketListId = req.params.id;
  const marketList = await MarketList.findByIdAndDelete(marketListId);
  res.json(marketList);
}