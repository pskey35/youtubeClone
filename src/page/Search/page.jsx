import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import TitleSection from "./TitleSection";
import VideoList from "./VideoList";
import LoadingSpinner from "./LoadingSpinner";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "YOUR_RAPIDAPI_KEY",
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
