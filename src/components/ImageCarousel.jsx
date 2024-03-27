import React, { useEffect, useRef } from "react";
import { imagenes } from "../auxObject/imagenes";
import Imagen from "./Imagen";

function ImageCarousel() {
  const ref = useRef(null);
  let containerWidth = 0;
  let indexActual = 0;
  let aux = 0;

  useEffect(() => {
    containerWidth = ref.current.clientWidth;
    const intervalId = setInterval(() => {
      indexActual = (indexActual + 1) % imagenes.length;
      aux = (containerWidth * indexActual) % (containerWidth * imagenes.length);
      ref.current.scrollTo({
        left: aux,
        behavior: 'smooth'
      });
    }, 2000);

    return () => {
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    containerWidth = ref.current.clientWidth;
    function hola() {
      containerWidth = ref.current.clientWidth;
      ref.current.scrollTo({
        left: indexActual * containerWidth
      });
    }
    window.addEventListener('resize', hola);

    return () => {
      window.removeEventListener('resize', hola);
    }
  }, []);

  function handleClick(num) {
    indexActual = indexActual + num === -1 ? imagenes.length - 1 : (indexActual + num) % imagenes.length;
    aux = aux + num === -1 ? containerWidth * (imagenes.length - 1) : containerWidth * indexActual;
    ref.current.scrollTo({
      left: aux,
      behavior: 'smooth'
    });
  }

  return (
    <div className='contenedor-main'>
      <div ref={ref} className='contenedor-imgs'>
        {
          imagenes.map((img, index) =>
            <Imagen
              key={index}
              img={img}
              index={index}
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
  );
}

export default ImageCarousel;
