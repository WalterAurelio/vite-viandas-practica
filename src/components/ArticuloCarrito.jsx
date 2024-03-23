import React from "react";
import burguerPic from "../assets/burguer-fp.png";
import "./styles/articuloCarrito.scss";

function ArticuloCarrito() {
  return (
    <div className="articulo-carrito">
      <img src={burguerPic} alt="img_compra" width={150} />
      <div className="info-pedido">
        <p>Nombre del plato</p>
        <p>Cantidad</p>
        <p>$10.000</p>
      </div>
    </div>
  );
}

export default ArticuloCarrito;