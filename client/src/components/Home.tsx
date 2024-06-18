import AddIcon from '@mui/icons-material/Add';
import { createMarketList } from '../api/createMarketList';
import { useEffect, useState } from 'react';
import {getMarketLists,TMarketList} from '../api/getMarketLists';
import {deleteMarketList} from '../api/deleteMarketList';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { Link } from "react-router-dom";
import MarketListIcon from "../../public/marketList.png";

function Home() {
    
    const [marketLists,setMarketLists] = useState<TMarketList[]>([]);
    
    const [title,setTitle] = useState<string>("");

    useEffect(()=>{
        async function fetchMarketLists() {
            const newMarketLists = await getMarketLists();
            setMarketLists(newMarketLists);
          }
          fetchMarketLists();
    },[])

    async function handleCreateMarketList() {
        const marketList = await createMarketList(title);
        setMarketLists([...marketLists, marketList]);
        setTitle("");
    }

    async function handleDeleteMarketList(id:string) {
        const deleteItem = await deleteMarketList(id);
        console.log(deleteItem);
        setMarketLists(marketLists.filter((marketList) => marketList._id !== id));
    }

    return (
        <div className="p-2 container flex flex-col mx-auto items-center gap-2">
            <div className='w-full flex text-xl justify-center '><input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}  value={title} className="p-2 border-primary border-xl mr-2 rounded-lg" placeholder="Add Market list" type="text"/><button onClick={handleCreateMarketList} className="text-white flex justify-center items-center bg-primary  rounded-full py-4 px-2 w-[50px] h-[50px]" type="button"><AddIcon/></button></div>
            <img className="w-[200px]" src={MarketListIcon}/>
            <div className="text-primary text-2xl w-full text-left"><h1>My Market Lists</h1></div>
            <div className='flex flex-col w-full gap-2'>
                {marketLists.map((marketList)=>{
                    return(
                        <div className="flex justify-between text-white w-full bg-primary py-4 px-2 rounded-lg" key={marketList._id}><div className='text-xl'>{marketList.title}</div><div><Link to={`/marketList/${marketList._id}`} ><InfoIcon/></Link><DeleteIcon className="cursor-pointer" onClick={()=>{handleDeleteMarketList(marketList._id)}}/></div></div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home