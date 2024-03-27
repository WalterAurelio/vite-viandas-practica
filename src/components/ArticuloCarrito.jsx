import React, { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";

function ArticuloCarrito({ articulo }) {
  const { eliminarDeCarrito } = useContext(CarritoContext);

  return (
    <div className="articulo-carrito">
      <img className="image" src={articulo.image} alt="img_compra" height={150} />
      <div className="info-pedido">
        <p>{articulo.name}</p>
        <p>Cantidad</p>
        <p>{articulo.price}</p>
        <button type="button"
          onClick={() => { eliminarDeCarrito(articulo) }}
        >
          X
        </button>
      </div>
    </div>
  );
}

export default ArticuloCarrito;