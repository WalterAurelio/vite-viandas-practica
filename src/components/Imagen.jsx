import React, { useContext, useEffect, useRef } from "react";
import { IndexContext } from '../contexts/IndexContext';

function Imagen({ img, index, isActive }) {
  /* const indexActual = useContext(IndexContext);
  const ref = useRef(null);

  useEffect(() => {
    if (isActive) {
      ref.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [isActive]); */

  return (
    <img
      /* ref={ref} */
      id={index}
      src={img}
      className="img"
    />
  );
}

export default Imagen;
