import React from "react";

function TitleSection({ busqueda }) {
    return (
        <div className="titulo">
            <span className="tituloName">videos de</span>
            <span className="tituloBusqueda">{busqueda}</span>
        </div>
    );
}

export default TitleSection;
