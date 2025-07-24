import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header";
import ChannelHeader from "./ChannelHeader";
import VideoList from "./VideoList";
import LoadingSpinner from "./LoadingSpinner";

export default function Channel({ options }) {
  const { idChannel } = useParams();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://youtube-search-and-download.p.rapidapi.com/channel?id=${idChannel}`,
      options,
    )
      .then((e) => e.json())
      .then((e) => {
        setLoading(false);
        setData(e);
      });
  }, [idChannel]);

  return (
    <div className="channel">
      <Header />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <ChannelHeader data={data} />
          <VideoList data={data} />
        </>
      )}
    </div>
  );
}
