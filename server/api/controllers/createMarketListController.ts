import { Request, Response } from "express";
import MarketList from "../models/MarketList";

export async function createMarketListController(req: Request, res: Response) {
  const newMarketList = new MarketList({
    title: req.body.title,
  });
  const marketListItem = await newMarketList.save();
  res.json(marketListItem);
}