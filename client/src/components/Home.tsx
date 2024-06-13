import AddIcon from '@mui/icons-material/Add';
import { createMarketList } from '../api/createMarketList';
import { useEffect, useState } from 'react';
import {getMarketLists,TMarketList} from '../api/getMarketLists';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';

function Home() {
    
    const [marketLists,setMarketLists] = useState<TMarketList[]>([]);

    const [marketList,setMarketList] = useState({
        title:"Market List",
        items:["No items"],
    })

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

    return (
        <div className="p-2 container flex flex-col mx-auto items-center gap-2">
            <div className='w-full flex text-xl justify-center '><input onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setTitle(e.target.value);
            }}  className="p-2 border-primary border-xl mr-2" placeholder="Add Market list" type="text"/><button onClick={handleCreateMarketList} className="text-white flex justify-center items-center bg-primary  rounded-full py-4 px-2 w-[50px] h-[50px]" type="button"><AddIcon/></button></div>
            <div className='flex flex-col w-full gap-2'>
                {marketLists.map((marketList,i)=>{
                    return(
                        <div className="flex justify-between text-white w-full bg-primary py-4 px-2 rounded-lg" key={i}><div>{marketList.title}</div><div><InfoIcon/><DeleteIcon/></div></div>
                    )
                })}
            </div>
            
        </div>
    )
}

export default Home