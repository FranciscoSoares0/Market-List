
import './index.css'
import Home from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MarketList from "./components/MarketList"

function App() {

  return (
   <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/marketList/:marketListId" element={<MarketList/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
