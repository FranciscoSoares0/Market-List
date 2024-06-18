import { API_URL } from "./config";
import { TMarketList } from "./getMarketLists";

export async function getMarketList(marketListId: string): Promise<TMarketList> {
  const response = await fetch(`${API_URL}/marketLists/${marketListId}`);
  return response.json();
}