
import { createContext, useState } from "react"
import { Routes, Route } from "react-router-dom";
export const AppContext = createContext();
import Home from "./page/Home/page.jsx";
import Videos from "./page/Videos/page.jsx";
import Search from "./page/Search/page.jsx";
import Channel from "./page/Channel/page.jsx";
import "./App.scss";
import "./new-App.scss";

const __apiKey = "7e77b90097msh8b79d681a94027cp13c706jsna21961598a5e"
const __host = "youtube-search-and-download.p.rapidapi.com"

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": __apiKey,
    "X-RapidAPI-Host":__host,
  },
};



export default function App() {
  //esto va a ser usado en las url de las otras views
  const [url, setUrl] = useState(0)



  return (
    <AppContext.Provider value={{ url, setUrl,options,__apiKey, __host }}>
      <Routes>
        <Route path="/" element={<Home options={options}></Home>}></Route>
        {/*el ":idVideo" y ":parametro" se maneja con el useParams() de react-router-dom*/}
        <Route path="video/:idVideo" element={<Videos options={options}></Videos>}></Route>
        <Route path="search/:parametro" element={<Search></Search>}></Route>
        <Route path="channel/:idChannel" element={<Channel options={options}></Channel>}></Route>
      </Routes>
    </AppContext.Provider>
  )
}