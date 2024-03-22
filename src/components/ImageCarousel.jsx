import React, { useEffect, useState, useRef } from "react";
import './styles/imageCarousel.scss';
import { IndexContext } from '../contexts/IndexContext';
import { imagenes } from "../auxObject/imagenes";
import Imagen from "./Imagen";

function ImageCarousel() {
  const [indexActual, setIndexActual] = useState(0);
  const ref = useRef(null);
  let aux = 0;

  /* useEffect(() => {
    const intervalId = setInterval(() => {
      setIndexActual(prevValue => (prevValue + 1) % 3);
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }); */

  useEffect(() => {
    const intervalId = setInterval(() => {
      aux = (aux + 768) % (768 * imagenes.length);
      ref.current.scrollTo({
        left: aux,
        behavior: 'smooth'
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    }
  });

  /* function handleClick(num) {
    if (indexActual + num < imagenes.length && indexActual + num > - 1) {
      setIndexActual(prevValue => prevValue + num);
      console.log(indexActual + num);
    }
  } */

  function handleClick(num) {
    aux = aux === 0 && num === -1 ? 768 * (imagenes.length - 1) : (aux + 768 * num) % (768 * imagenes.length);
    ref.current.scrollTo({
      left: aux,
      behavior: 'smooth'
    });
    console.log(aux);
  }

  return (
    <IndexContext.Provider value={indexActual}>
      <div className='contenedor-main'>
        <div ref={ref} className='contenedor-imgs'>
          {
            imagenes.map((img, index) =>
              <Imagen
                key={index}
                img={img}
                index={index}
                isActive={indexActual === index}
              />
            )
          }
        </div>

        <button
          type='button'
          onClick={() => {
            handleClick(-1);
          }}
        >
          Izquierda
        </button>
        <button
          type='button'
          onClick={() => {
            handleClick(1);
          }}
        >
          Derecha
        </button>
      </div>
    </IndexContext.Provider>
  );
}

export default ImageCarousel;
