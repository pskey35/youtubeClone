
import { Link } from "react-router-dom";
import "./videoPlayer.scss"
function VideoPlayer({ idVideo, videoInfo, channel }) {
    return (
        <div className="video-left">
            <div className="new-iframeContainer">
                <iframe
                    src={`https://www.youtube.com/embed/${idVideo}`}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="texto new-textoContainer">
                <p>{videoInfo && videoInfo.videoDetails.title}</p>
                <div className="info">
                    <Link
                        to={`/channel/${videoInfo && videoInfo.videoDetails.channelId}`}
                        style={{ textDecoration: "none" }}
                    >
                        <div className="left">
                            <div className="imagenContainer">
                                <img src={channel && channel.avatar.thumbnails[0].url} alt="Channel Avatar" />
                            </div>
                            <div className="canal">
                                <p>{channel && channel.title}</p>
                                <p>{channel && channel.subscriberCountText}</p>
                            </div>
                        </div>
                    </Link>
                    <div className="right">
                        {videoInfo && videoInfo.videoDetails.viewCount} views
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VideoPlayer;
