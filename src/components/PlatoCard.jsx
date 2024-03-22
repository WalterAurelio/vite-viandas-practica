import React, { useState } from "react";
import burguerPic from '../assets/burguer-fp.png';

function PlatoCard() {
  const [cantidad, setCantidad] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = (num) => {
    setCantidad(prevValue => prevValue + num > 0 ? prevValue + num : prevValue);
  }

  const addToCart = () => {
    setIsAdded(true);
  }

  const removeFromCart = () => {
    setIsAdded(false);
  }

  return (
    <article>
      <div>
        <img
          src={burguerPic}
          className=""
          alt="img_plato"
        />
        <p>$10.000</p>
        <p>Nombre del plato</p>
      </div>
      <p>Descripción del plato</p>
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
        type="button"
        onClick={() => { addToCart() }}
      >
        Añadir al pedido
      </button>
      {
        isAdded && <button
          type="button"
          onClick={() => { removeFromCart() }}
        >
          Quitar del pedido
        </button>
      }
    </article>
  );
}

export default PlatoCard;
