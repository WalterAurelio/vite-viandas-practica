import React from "react";
import ArticuloCarrito from "./ArticuloCarrito";

function Carrito({ listaArticulos }) {

  return (
    <details className="details">
      <summary onClick={() => { }}>
        Carrito
      </summary>
      <div className="contenido-carrito">
        {
          listaArticulos.map((articulo, index) =>
            <ArticuloCarrito
              key={index}
              articulo={articulo}
            />
          )
        }
      </div>
    </details>
  );
}

export default Carrito;
