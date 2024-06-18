import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { TMarketList } from "../api/getMarketLists";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import AddIcon from "@mui/icons-material/Add";
import { getMarketList } from "../api/getMarketList";
import { createItem } from "../api/createItem";
import AppleImage from "../../public/apple.png";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteItem } from "../api/deleteItem";

function MarketList() {
  let { marketListId } = useParams();

  console.log(marketListId);

  const [marketList, setMarketList] = useState<TMarketList>({
    title: "Market list title",
    items: ["No cards"],
    _id: "0",
  });

  const [itemTitle, setItemTitle] = useState<string>("");
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    async function fetchMarketList() {
      if (!marketListId) return;
      const newMarketList = await getMarketList(marketListId);
      setMarketList(newMarketList);
      setItems(newMarketList.items);
    }
    fetchMarketList();
  }, [marketListId]);

  async function handleCreateItem() {
    const { items: serverItems } = await createItem(marketListId!, itemTitle);
    setItems(serverItems);
    setItemTitle("");
  }

  async function handleDeleteItem(index: number) {
    if (!marketListId) return;
    const newMarketList = await deleteItem(marketListId, index);
    setItems(newMarketList.items);
  }

  return (
    <div className="mt-2">
      <div className="container mx-auto p-2 flex flex-col justify-center items-center w-full gap-2">
        <div className="flex items-center w-full justify-center">
          <Link className="relative right-[100px] text-primary" to="/">
            <ArrowBackIcon />
          </Link>
          <div className="flex text-xl">
            <input
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setItemTitle(e.target.value);
              }}
              value={itemTitle}
              className="p-2 border-primary border-xl mr-2 rounded-lg"
              placeholder="Add Item"
              type="text"
            />
            <button
              onClick={handleCreateItem}
              className="text-white flex justify-center items-center bg-primary  rounded-full py-4 px-2 w-[50px] h-[50px]"
              type="button"
            >
              <AddIcon />
            </button>
          </div>
        </div>
        <img className="w-[200px]" src={AppleImage} />
        <div className="text-primary text-2xl w-full text-left"><h1>{marketList.title}</h1></div>
      </div>
      <div className="container flex flex-col w-full mx-auto items-center bg-primary text-white gap-2 p-2 mt-2 rounded-lg">
        <h1 className="text-xl">Items</h1>
        <div className="text-lg w-full flex flex-col">
          {items.map((item, i) => {
            return <div className="flex justify-between w-full" key={i}><div>{item}</div><div><DeleteIcon onClick={() => handleDeleteItem(i)} className="cursor-pointer"/></div></div>;
          })}
        </div>
      </div>
    </div>
  );
}

export default MarketList;
