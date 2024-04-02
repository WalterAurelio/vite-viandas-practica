import React, { useEffect, useRef, useState } from "react";
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
    <div className='container-carousel'>
      <div ref={ref} className='container-imagenes'>
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

      <div className="container-boton izquierda">
        <button
          className="boton"
          type="button"
          onClick={() => {
            handleClick(-1);
          }}
        >
          {'<'}
        </button>
      </div>

      <div className="container-boton derecha">
        <button
          className="boton"
          type="button"
          onClick={() => {
            handleClick(1);
          }}
        >
          {'>'}
        </button>
      </div>

      <div className="container-indicadores">
        {
          imagenes.map((img, index) =>
            <div
              key={index}
              className={`indicador ${indexActual === index ? 'is-active' : ''}`.trimEnd()}>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default ImageCarousel;
