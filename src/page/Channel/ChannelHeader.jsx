import React from "react";

function ChannelHeader({ data }) {
    return (
        <div className="channelAbout">
            <div className="channel-image">
                <img src={`${data.avatar.thumbnails[0].url}`} alt="Channel Avatar"></img>
            </div>
            <div className="channel-texto">
                <p className="name">
                    {data.title}
                    <svg
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
                <p>{data.subscriberCountText}</p>
                <p>{data.description}</p>
            </div>
        </div>
    );
}

export default ChannelHeader;
