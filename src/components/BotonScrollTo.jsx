import React from "react";
import { FaArrowUp } from "react-icons/fa6";

function BotonScrollTo({ elemento, isVisible }) {

  return (
    <button
      className={`boton-scroll ${isVisible ? 'oculto' : ''}`.trimEnd()}
      type="button"
      onClick={() => {
        elemento.scrollIntoView({
          behavior: 'smooth'
        });
      }}
    >
      <FaArrowUp className="icono-scroll" />
    </button>
  );
}

export default BotonScrollTo;
