import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import "./header.scss";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Icon_Search } from "../header/icons";
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
      <Logo />
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
         <Icon_Search />
        </div>
      </div>
    </div>
  );
}

export default Header;