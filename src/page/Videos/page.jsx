
import { useParams } from "react-router-dom";
import Header from "../../components/header/header.jsx";
import VideoPlayer from "./videoPlayer/VideoPlayer.jsx";
import VideoList from "./VideoList";
import LoadingSpinner from "./LoadingSpinner";
import useVideos from "./useVideos.jsx";
import { useEffect } from "react";




export default function Videos({ options }) {
    const { idVideo } = useParams();
    const { data, loading, videoInfo, channel } = useVideos(options);
  
    return (
        <div className="container-videos">
            <Header />
            <div className="content new-content_videos">
                <VideoPlayer idVideo={idVideo} videoInfo={videoInfo} channel={channel} />
                {loading ? <LoadingSpinner /> : <VideoList data={data} />}
             
            </div>
        </div>
    );
}