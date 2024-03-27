import React, { useState, useContext } from "react";
import { CarritoContext } from "../contexts/CarritoContext";
import { EntradaContext } from "../contexts/EntradaContext";

let ARPesos = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})

function PlatoCard({ plato }) {
  const [cantidad, setCantidad] = useState(1);
  const { agregarACarrito } = useContext(CarritoContext);
  const entrada = useContext(EntradaContext);
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
    <article className="plato-card">
      <div className="container-img-precio">
        <img src={plato.image} alt="img_plato" />
        <p className="plato-precio">{ARPesos.format(plato.price)}</p>
      </div>
      <p className="plato-nombre">{plato.name}</p>
      <p className="plato-descripcion">{plato.description}</p>
      <label
        htmlFor="cantidad"
      >
        Ingrese la cantidad deseada:
      </label>
      <input
        id="cantidad"
        name="cantidad"
        type="number"
        placeholder="Cantidad"
        value={cantidad}
        /* onChange={(e) => { setCantidad(Number(e.target.value)) }} */
        readOnly
      />
      <button
        type="button"
        onClick={() => { handleClick(-1) }}
      >
        -
      </button>
      <button
        type="button"
        onClick={() => { handleClick(1) }}
      >
        +
      </button>
      <button
        disabled={cantidad < 1}
        type="button"
        onClick={() => { agregarACarrito(plato, cantidad) }}
      >
        Añadir al pedido
      </button>
      {/* {
        isAdded && <button
          type="button"
          onClick={() => {
            eliminarDeCarrito(plato)
            setIsAdded(false);
          }}
        >
          Quitar del pedido
        </button>
      } */}
    </article>
  );
}

export default PlatoCard;
