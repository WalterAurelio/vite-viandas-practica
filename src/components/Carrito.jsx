import React, { useState } from "react";
import ArticuloCarrito from "./ArticuloCarrito";

let ARPesos = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

const root = document.querySelector(':root');

function Carrito({ listaCarrito }) {
  const [isActive, setIsActive] = useState(false);
  const carritoVacio = listaCarrito.length < 1;
  let precioTotal = 0;

  listaCarrito.forEach(producto => {
    precioTotal = precioTotal + producto.price;
  });

  return (
    <>
      <div className="container-boton-carrito"> {/* Auxiliar iPad */}
        <button
          className={`boton-carrito ${isActive ? 'is-active' : ''}`.trimEnd()}
          onClick={() => { setIsActive(!isActive) }}
        >
          Carrito
        </button>
      </div>
      <div className={`carrito ${isActive ? 'is-active' : ''} ${carritoVacio ? 'vacio' : ''}`.trimEnd()}>
        <div className="container-bg">
        </div>
        {
          carritoVacio &&
          <p className='mensaje-vacio'>El carrito se encuentra vacío.</p>
        }
        <div className="container-listacarrito">
          {
            listaCarrito.map((articulo, index) =>
              <ArticuloCarrito
                key={index}
                articulo={articulo}
              />
            )
          }
        </div>
        <div className={`container-total ${isActive ? 'is-active' : ''}`.trimEnd()}>
          {
            !carritoVacio &&
            <>
              <p>Total: </p>
              <p>{ARPesos.format(precioTotal)}</p>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default Carrito;
