import React, { useState, useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { useEntradaStore } from "../store/entradaStore";

let ARPesos = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

function PlatoCard({ plato }) {
  const [cantidad, setCantidad] = useState(1);
  const { agregarACarrito } = useContext(CarritoContext);
  const { darkClass } = useContext(DarkModeContext);
  const entrada = useEntradaStore(state => state.entrada);
  let isHidden = !(entrada.every(item => {
    return plato.name.toLowerCase().includes(item) || plato.description.toLowerCase().includes(item);
  }));

  const handleClick = (num) => {
    if (cantidad + num > 0) {
      setCantidad(prevCantidad => prevCantidad + num);
    }
  }

  return (
    !isHidden &&
    <article className={`plato-card ${darkClass}`}>

      <div className="container-img">
        <img className="img-plato" src={plato.image} alt="img_plato" />
        <p className="precio-plato">{ARPesos.format(plato.price)}</p>
      </div>

      <div className="container-infoplato">
        <p className="nombre-plato">{plato.name}</p>
        <p className="descripcion-plato">{plato.description}</p>
      </div>

      <div className="container-input-botones">
        <div className="input-botones">
          <button
            className="boton"
            type="button"
            onClick={() => { handleClick(-1) }}
          >
            -
          </button>
          <input
            className="input"
            id="cantidad"
            name="cantidad"
            type="number"
            placeholder="Cantidad"
            value={cantidad}
            /* onChange={(e) => { setCantidad(Number(e.target.value)) }} */
            readOnly
          />
          <button
            className="boton"
            type="button"
            onClick={() => { handleClick(1) }}
          >
            +
          </button>
        </div>

        <button
          className="boton-agregar"
          disabled={cantidad < 1}
          type="button"
          onClick={() => { agregarACarrito(plato, cantidad) }}
        >
          Agregar al pedido
        </button>
      </div>
    </article>
  );
}

export default PlatoCard;
