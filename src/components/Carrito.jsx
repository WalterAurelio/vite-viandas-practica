import React, { useState } from "react";
import ArticuloCarrito from "./ArticuloCarrito";
import "./styles/carrito.scss";

function Carrito({ listaArticulos }) {

  return (
    <details className="details">
      <summary onClick={() => { handleClick() }}>
        Carrito
      </summary>
      <div className="contenido-carrito">
        <ArticuloCarrito />
      </div>
    </details>
  );
}

export default Carrito;
