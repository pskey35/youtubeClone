import { Link } from "react-router-dom";
import ItemVideos from "./videoList/itemVideo";
import ChannelItem from "./videoList/channelVideo";

function VideoList({ searchData }) {
    return (
        <div className="search-content videos">
            {searchData.map((resu, ind) => {
                console.log("......")
                console.log(resu)
                if (resu.hasOwnProperty("video")) {
                    return (
                        <ItemVideos resu={resu} ind={ind}></ItemVideos>
                    );
                } else if (resu.hasOwnProperty("channel")) {
                    return (
                       <ChannelItem resu={resu} ind={ind}></ChannelItem>
                    );
                }
            })}
        </div>
    );
}

export default VideoList;
