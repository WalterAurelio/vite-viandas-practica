import React, { useEffect, useState } from "react";
import Imagen from "./Imagen";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function ImageCarousel({ imagenes }) {
  const [indexActual, setIndexActual] = useState(0);
  const [sentido, setSentido] = useState('derecha');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const value = (indexActual + 1) % imagenes.length;
      setIndexActual(value);
      setSentido('derecha');
    }, 6000);

    return () => {
      clearTimeout(timeoutId);
    }
  }, [indexActual]);

  return (
    <div className='container-carousel'>
      <div className='container-imagenes'>
        {
          imagenes.map((image, index) =>
            <Imagen
              key={index}
              image={image}
              index={index}
              indexActual={indexActual}
              length={imagenes.length}
              sentido={sentido}
            />
          )
        }
      </div>

      <div className="container-boton izquierda">
        <button
          className="boton"
          type="button"
          onClick={() => {
            const value = indexActual - 1 === -1 ? imagenes.length - 1 : indexActual - 1;
            setIndexActual(value);
            setSentido('izquierda');
          }}
        >
          <IoIosArrowBack className="icono-izquierda" />
        </button>
      </div>

      <div className="container-boton derecha">
        <button
          className="boton"
          type="button"
          onClick={() => {
            const value = (indexActual + 1) % imagenes.length;
            setIndexActual(value);
            setSentido('derecha');
          }}
        >
          <IoIosArrowForward className="icono-derecha" />
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