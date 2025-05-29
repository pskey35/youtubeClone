import { useNavigate,Link } from "react-router-dom"
import {useRef} from "react"
import "./header.scss"

function Header() {
    const navigate = useNavigate();

    /*aqui "search" se ejecuta
    cada vez que se da click en la lupa(buscar)*/
    const search = (value) => {
        const recorte = value.replace(/\s+/g, " "); //aqui usamos regex remplazamos si es que tiene mas de un espacio a solo un espacio
        navigate(`/search/${recorte}`);
    };
    const inputHeader = useRef();

    //aqui si presiona tecla enter va a  redirigir a la busqueda
    const boton = (e) => {
        /*e.keyCode es por si el usuario presiono la tecla "enter"
        que tiene como numero de ascci 13
        */
        if (e.keyCode == 13) {
            const lupa = document.querySelector(".lupa");
            lupa.click();
        }
    };
    return (
        <div className="header">
            <Link to="/" style={{ textDecoration: "none" }}>
                <div className="logo">
                    <div className="header-image">
                        <img src="/youtube-icono.png"></img>
                    </div>
                    <span className="name">videos</span>
                </div>
            </Link>
            <div className="search">
                <input
                    type="text"
                    className="input"
                    ref={inputHeader}
                    placeholder="Buscar"
                    onKeyDown={boton}
                />
                <div
                    className="lupa"
                    onClick={() => search(inputHeader.current.value)}
                >
                    <svg
                        focusable="false"
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        data-testid="SearchIcon"
                    >
                        <path
                            d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
                        >
                        </path>
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default Header