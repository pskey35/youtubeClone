import React from "react";
import { Link } from "react-router-dom";
import "./assets/videoList.scss";



function ItemVideo({ resu }) {
    return (

        <div className="container-img new-cajaItem">
            <img
                className="imagen"
                src={resu.video.thumbnails[0].url}
                alt="Video Thumbnail"
            />
        </div>
    )
}




function VideoList({ data }) {
    return (
        <div className="videos new-home_videos">
            {data.map((resu, ind) => {
                if (resu.hasOwnProperty("video")) {
                    return (
                        <div className="items" key={ind}>
                            <Link to={`video/${resu.video.videoId}`}>
                                <ItemVideo resu={resu} />
                            </Link>
                            <div className="title">
                                {resu.video.title}
                            </div>
                            <div className="channelTitle">
                                {resu.video.channelName}
                                <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14lwgpo"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="CheckCircleIcon"
                                    height="15px"
                                    fill="gray"
                                >
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    );
                } else if (resu.hasOwnProperty("channel")) {
                    return (
                        <div className="containerChannel" key={ind}>
                            <Link to={`/channel/${resu.channel.channelId}`}>
                                <div className="imageChannel">
                                    <img
                                        src={`https:${resu.channel.thumbnails[0].url}`}
                                        alt="Channel Thumbnail"
                                    />
                                </div>
                            </Link>
                            <p>
                                {resu.channel.title}
                                <svg
                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14lwgpo"
                                    focusable="false"
                                    aria-hidden="true"
                                    viewBox="0 0 24 24"
                                    data-testid="CheckCircleIcon"
                                    height="15px"
                                    fill="gray"
                                >
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                                    ></path>
                                </svg>
                            </p>
                        </div>
                    );
                }
            })}
        </div>
    );
}

export default VideoList;
