import { Link } from "react-router-dom";
import "./videoList.scss";
import { IconVerified } from "../assets/icons.jsx";
import { ImageVideo } from "../imageVideo/ImageVideo.jsx";



function ItemVideo({ resu, ind }) {
    return (
        <div className="items new-itemVideo" key={ind}>
            <Link to={`video/${resu.video.videoId}`}>
                <ImageVideo resu={resu} />
            </Link>
            <div className="title">
                {resu.video.title}
            </div>
            <div className="channelTitle">
                {resu.video.channelName}
                <IconVerified></IconVerified>
            </div>
        </div>
    )
}


function ContainerChannel({ resu, ind }) {
    return (

        <div className="containerChannel new-containerChannel" key={ind}>
            <Link to={`/channel/${resu.channel.channelId}`}>
                <div className="imageChannel">
                    <img
                        src={`https:${resu.channel.thumbnails[0].url}`}
                        alt="Channel Thumbnail"
                    />
                </div>
            </Link>
            <p className="new-channelTitle">
                {resu.channel.title}
                <IconVerified />
            </p>
        </div>
    )
}




function VideoList({ data }) {
    return (
        <div className="videos new-home_videos">
            {data.map((resu, ind) => {
                if (resu.hasOwnProperty("video")) {
                    return (
                        //si tiene video se pone esto
                        <ItemVideo resu={resu} ind={ind}></ItemVideo>
                    );
                } else if (resu.hasOwnProperty("channel")) {
                    return (
                        //si tiene solo canales se pone esto
                        <ContainerChannel resu={resu} ind={ind}></ContainerChannel>
                    );
                }
            })}
        </div>
    );
}

export default VideoList;
