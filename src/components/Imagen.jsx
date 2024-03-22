import React, { useContext, useEffect, useRef } from "react";
import { IndexContext } from '../contexts/IndexContext';

function Imagen({ img, index }) {
  return (
    <img
      id={index}
      src={img}
      className="img"
    />
  );
}

export default Imagen;
