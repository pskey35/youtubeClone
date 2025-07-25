import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";





export default function useVideos(options) {
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

    return {
        data, loading, videoInfo, channel
    }

}