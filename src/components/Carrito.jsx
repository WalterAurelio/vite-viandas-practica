import React, { useState, useRef } from "react";
import ArticuloCarrito from "./ArticuloCarrito";

function Carrito({ listaCarrito }) {
  const [isActive, setIsActive] = useState(false);
  const carritoVacio = listaCarrito.length < 1;
  const ref = useRef(null);

  return (
    <>
      <button
        className='boton-carrito'
        onClick={() => { setIsActive(!isActive) }}
      >
        Carrito
      </button>
      <div className={`carrito ${isActive ? 'is-active' : ''} ${carritoVacio ? 'vacio' : ''}`.trimEnd()}>
        {
          carritoVacio &&
          <p className="mensaje vacio">El carrito se encuentra vacío.</p>
        }
        <div>
          {
            listaCarrito.map((articulo, index) =>
              <ArticuloCarrito
                key={index}
                articulo={articulo}
              />
            )
          }
        </div>
        <div className={`container-total ${isActive ? 'is-active' : ''}`}>
          <p>Total: </p>
          <p>$20,000.00</p>
        </div>
      </div>
    </>
  );
}

export default Carrito;
