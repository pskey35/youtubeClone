import "./imageVideo.scss";
export const ImageVideo = ({ resu }) => {
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