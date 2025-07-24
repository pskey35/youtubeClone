import { Link } from "react-router-dom";
import "./header.scss";

function Logo() {
    return (
        <Link to="/" style={{ textDecoration: "none" }}>
            <div className="logo">
                <div className="header-image">
                    <img src="/youtube-icono.png" alt="Logo"></img>
                </div>
                <span className="name">videos</span>
            </div>
        </Link>
    );
}

export default Logo;
