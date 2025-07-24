import React from "react";

function TitleSection({ parametro }) {
    return (
        <div className="titulo">
            <span className="tituloName">videos de</span>
            <span className="tituloBusqueda">
                {parametro.length > 20 ? parametro.slice(0, 20) + "..." : parametro}
            </span>
        </div>
    );
}

export default TitleSection;
