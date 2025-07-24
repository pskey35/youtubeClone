import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import TitleSection from "./TitleSection";
import VideoList from "./VideoList";
import LoadingSpinner from "./LoadingSpinner";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3424201bdfmshb8f2ea7923a3ddap1bff7cjsn84f4c9b23ca1",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export default function Search() {
  const [searchData, setSearchData] = useState();
  const { parametro } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube-search-and-download.p.rapidapi.com/search?query=${parametro}`,
      options,
    )
      .then((e) => e.json())
      .then((e) => {
        console.log("Search Results:");
        console.log(e)
        setSearchData(e.contents);
        setLoading(false);
      });
  }, [parametro]);

  return (
    <div className="search">
      <Header />
      <TitleSection parametro={parametro} />
      {loading ? <LoadingSpinner /> : <VideoList searchData={searchData} />}
    </div>
  );
}
