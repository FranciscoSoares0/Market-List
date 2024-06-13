import { API_URL } from "./config";

export type TMarketList = {
  title: string;
  cards: string[];
  _id: string;
};

export async function getMarketLists(): Promise<TMarketList[]> {
  const response = await fetch(`${API_URL}/marketLists`);
  return response.json();
}