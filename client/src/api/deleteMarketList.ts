import { API_URL } from "./config";

export async function deleteMarketList(marketListId: string) {
  await fetch(`${API_URL}/marketLists/${marketListId}`, {
    method: "DELETE",
  });
}