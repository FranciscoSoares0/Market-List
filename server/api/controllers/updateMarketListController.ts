import { Request, Response } from 'express';
import MarketList  from "../models/MarketList";

export const updateMarketListController = async (req: Request, res: Response) => {
  try {
    const marketListId = req.params.id;
    const updateData = req.body;

    const updatedMarketList = await MarketList.findByIdAndUpdate(marketListId, updateData, { new: true, runValidators: true });

    if (!updatedMarketList) {
      return res.status(404).json({ message: 'Market list not found' });
    }

    res.json(updatedMarketList);
  } catch (error) {
    res.status(500).json({ message: 'Error updating market list', error });
  }
};