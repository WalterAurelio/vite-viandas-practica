import React, { useState, useEffect } from "react";

function Indicador({ imagenes, isPressed, setIsPressed }) {
  const [indexActual, setIndexActual] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexActual((indexActual + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    }
  });

  if (isPressed) {
    setIndexActual((indexActual + 1) % 3);
    setIsPressed(false);
  }

  return (
    <>
      {
        imagenes.map((img, index) =>
          <div
            key={index}
            className={`indicador ${indexActual === index ? 'is-active' : ''}`.trimEnd()}>
          </div>
        )
      }
      <button
        onClick={() => { }}
      >
        Izq
      </button>
      <button
        onClick={() => { }}
      >
        Der
      </button>
    </>
  );
}

export default Indicador;


