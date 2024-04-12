import React from "react";

function Imagen({ image, index, indexActual, length, sentido }) {
  const masUno = (indexActual + 1) % length === index ? 'mas-uno' : '';
  const menosUno = (indexActual - 1 === -1 ? length - 1 : indexActual - 1) === index ? 'menos-uno' : '';

  return (
    <img
      src={image}
      className={`imagen ${masUno} ${menosUno} ${sentido}`.trimEnd()}
    />
  );
}

export default Imagen;