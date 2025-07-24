import React from "react";

function NavBar({ objeto, selected }) {
    return (
        <div className="nav">
            {objeto.map((res, ind) => (
                <div
                    key={ind}
                    onClick={() => selected(ind, res.nombre)}
                    id={`select-${ind}`}
                    className="items nav-noticias"
                >
                    <span className="icono">
                        {res.svg}
                    </span>
                    <span className="name">{res.nombre}</span>
                </div>
            ))}
        </div>
    );
}

export default NavBar;
