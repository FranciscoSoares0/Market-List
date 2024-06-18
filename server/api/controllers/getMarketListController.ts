import { Request, Response } from "express";
import MarketList from "../models/MarketList";

export async function getMarketListController(req: Request, res: Response) {
  const { id } = req.params;
  const marketList = await MarketList.findById(id);
  res.json(marketList);
}