import { API_URL } from "./config";

export async function createMarketList(title: string) {
  const response = await fetch(`${API_URL}/marketLists`, {
    method: "POST",
    body: JSON.stringify({
      title,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}