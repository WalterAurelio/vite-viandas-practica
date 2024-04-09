import React, { useContext, useState } from "react";
import ArticuloCarrito from "./ArticuloCarrito";
import { FiShoppingCart } from "react-icons/fi";
import { DarkModeContext } from '../contexts/DarkModeContext';

let ARPesos = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function Carrito({ listaCarrito }) {
  const [isActive, setIsActive] = useState(false);
  const { darkMode } = useContext(DarkModeContext);
  const carritoVacio = listaCarrito.length < 1;
  let precioTotal = 0;

  listaCarrito.forEach(producto => {
    precioTotal = precioTotal + producto.price;
  });

  return (
    <>
      <div className="container-boton-carrito"> {/* Auxiliar iPad */}
        <button
          type="button"
          className={`boton-carrito ${isActive ? 'is-active' : ''} ${darkMode ? 'oscuro' : ''}`.trimEnd()}
          onClick={() => { setIsActive(!isActive) }}
        >
          <FiShoppingCart className="icono" />
        </button>
      </div>
      <div
        className={`carrito ${isActive ? 'is-active' : ''} ${carritoVacio ? 'vacio' : ''} ${darkMode ? 'oscuro' : ''}`.trimEnd()}
      >
        <div className="container-bg"></div>
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
              <p>Total:</p>
              <p>{ARPesos.format(precioTotal)}</p>
            </>
          }
        </div>
      </div>
    </>
  );
}

export default Carrito;
