import { API_URL } from "./config";
import { TMarketList } from "./getMarketLists";

export async function createItem(marketListId: string, text: string): Promise<TMarketList> {
  const response = await fetch(`${API_URL}/marketLists/${marketListId}/items`, {
    method: "POST",
    body: JSON.stringify({
      text,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}