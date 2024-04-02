import React from "react";

function Imagen({ img, index }) {
  return (
    <img
      id={index}
      src={img}
      className="imagen"
    />
  );
}

export default Imagen;
