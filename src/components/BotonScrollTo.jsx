import React, { useContext } from "react";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { FaArrowUp } from "react-icons/fa6";

function BotonScrollTo({ elemento, isVisible }) {
  const { darkClass } = useContext(DarkModeContext);

  return (
    <button
      className={`boton-scroll ${isVisible ? 'oculto' : ''} ${darkClass}`.trimEnd()}
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
