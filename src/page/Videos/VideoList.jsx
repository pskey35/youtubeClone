import React from "react";
import { Link } from "react-router-dom";

function VideoList({ data }) {
    return (
        <div className="video-right">
            {data.map((resu, ind) => (
                <div className="items" key={ind}>
                    <Link to={`../video/${resu.video.videoId}`}>
                        <div className="container-img">
                            <img
                                className="imagen"
                                src={resu.video.thumbnails[1].url}
                                alt="Video Thumbnail"
                            />
                        </div>
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
            ))}
        </div>
    );
}

export default VideoList;
