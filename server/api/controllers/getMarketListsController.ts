import { Request, Response } from "express";
import MarketList from "../models/MarketList";

export async function getMarketListsController(req: Request, res: Response) {
  const marketLists = await MarketList.find();
  res.json(marketLists);
}