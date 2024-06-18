import { API_URL } from "./config";
import { TMarketList } from "./getMarketLists"

export async function deleteItem(
  marketListId: string,
  index: number
): Promise<TMarketList> {
  const response = await fetch(`${API_URL}/marketLists/${marketListId}/items/${index}`, {
    method: "DELETE",
  });
  return response.json();
}