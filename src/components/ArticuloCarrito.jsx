import React, { useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import { DarkModeContext } from "../contexts/DarkModeContext";

let ARPesos = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function ArticuloCarrito({ articulo }) {
  const { eliminarDeCarrito } = useContext(CarritoContext);
  const { darkClass } = useContext(DarkModeContext);

  return (
    <div className={`articulo-carrito ${darkClass}`}>
      <img className="image" src={articulo.image} alt="img_compra" />
      <div className="info-pedido">
        <p className="nombre-pedido"><b>{articulo.name}</b></p>
        <p className="cantidad-pedido"><b>Cantidad</b> (1)</p>
        <p className="subtotal-pedido"><b>Subtotal</b> {ARPesos.format(articulo.price)}</p>
      </div>
      <button type="button" className="boton-eliminar"
        onClick={() => { eliminarDeCarrito(articulo) }}
      >
        Eliminar
      </button>
    </div>
  );
}

export default ArticuloCarrito;