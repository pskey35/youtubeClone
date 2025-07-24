import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
import LoadingSpinner from "./LoadingSpinner";

export default function Videos() {
    const { idVideo } = useParams();
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const [videoInfo, setVideoInfo] = useState();
    const [channel, setChannel] = useState();

    useEffect(() => {
        setLoading(true);
        fetch(
            `https://youtube-search-and-download.p.rapidapi.com/video/related?id=${idVideo}`,
            options,
        )
            .then((e) => e.json())
            .then((e) => {
                setLoading(false);
                setData(e.contents);
            });

        fetch(
            `https://youtube-search-and-download.p.rapidapi.com/video?id=${idVideo}`,
            options,
        )
            .then((e) => e.json())
            .then((e) => {
                setVideoInfo(e);
                fetch(
                    `https://youtube-search-and-download.p.rapidapi.com/channel?id=${e.videoDetails.channelId}`,
                    options,
                )
                    .then((e) => e.json())
                    .then((e) => {
                        setChannel(e);
                    });
            });
    }, [idVideo]);

    return (
        <div className="container-videos">
            <Header />
            <div className="content">
                <VideoPlayer idVideo={idVideo} videoInfo={videoInfo} channel={channel} />
                {loading ? <LoadingSpinner /> : <VideoList data={data} />}
            </div>
        </div>
    );
}