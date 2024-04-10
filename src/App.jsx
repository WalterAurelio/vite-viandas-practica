import { useState, useRef, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import ImageCarousel from './components/ImageCarousel';
import Carrito from './components/Carrito';
import ListaPlatos from './components/ListaPlatos';
import platosJson from "./auxObject/platos.json";
import { CarritoContext } from './contexts/CarritoContext';
import { EntradaContext } from './contexts/EntradaContext';
import { v4 as uuidv4 } from 'uuid';
import HamburgerMenu from './components/HamburgerMenu';
import { BsInstagram, BsTwitterX, BsYoutube, BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import BotonScrollTo from './components/BotonScrollTo';
import { DarkModeContext } from './contexts/DarkModeContext';
import BotonDarkMode from './components/BotonDarkMode';

let listaPlatos = platosJson.platos;

function App() {
  const [listaCarrito, setListaCarrito] = useState([]);
  const [entrada, setEntrada] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const ref = useRef(null);
  const darkClass = darkMode ? 'oscuro' : ''.trimEnd();

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  useEffect(() => {
    observer.observe(ref.current);
  }, []);

  function agregarACarrito(articulo, cantidad) {
    let listaActualizada = listaCarrito;
    for (let i = 0; i < cantidad; i++) {
      const newArticulo = {
        ...articulo,
        id: uuidv4()
      };
      listaActualizada = [...listaActualizada, newArticulo];
    }
    setListaCarrito(listaActualizada);
  }

  function eliminarDeCarrito(articulo) {
    const listaActualizada = listaCarrito.filter(item => item.id !== articulo.id);
    setListaCarrito(listaActualizada);
  }

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode, darkClass }}>
      <CarritoContext.Provider value={{ agregarACarrito, eliminarDeCarrito }}>
        <EntradaContext.Provider value={entrada}>

          <div ref={ref} className={`container-aux ${darkClass}`}></div>
          <header className={`header ${darkClass}`}>
            <div className='container-header'>
              <div className={`container-logo ${isVisible ? '' : 'is-scrolled'}`.trimEnd()}>
                <IoFastFood className='logo' />
                <h1 className='nombre'>
                  VK
                </h1>
              </div>

              <HamburgerMenu />

              <SearchBar filtrarPlatos={setEntrada} />

              <nav className='navbar-desktop'>
                <a href="#">Inicio</a>
                <a href="#">Categorías</a>
                <a href="#">Promos</a>
                <a href="#">Contacto</a>
              </nav>

              <Carrito listaCarrito={listaCarrito} />
            </div>
          </header>

          <section className='container-presentacion'>
            <div className='nombre-descripcion'>
              <h2>Viandas Viking</h2>
              <p>
                Disfruta de sabores auténticos y creativos en un
                ambiente acogedor. Desde pizzas gourmet hasta opciones de carne y ensaladas frescas,
                cada plato está preparado con cuidado para deleitar tu paladar. ¡Vení y descubrí el
                placer de comer en Viandas Viking!
              </p>
            </div>
          </section>

          <main className={`main ${darkClass}`}>

            {/* <div className='container-titulo promos'>
              <h2 className={`titulo-promos ${darkClass}`}>Galería</h2>
            </div> */}

            <div className='container-titulo menu'>
              <h2 className={`titulo-menu ${darkClass}`}>Menú</h2>
            </div>

            <ListaPlatos listaPlatos={listaPlatos} />

            <ImageCarousel />

            <ListaPlatos listaPlatos={listaPlatos} />

            <div className='red-social wp'>
              <BsWhatsapp className='icono' />
            </div>

            <BotonScrollTo elemento={ref.current} isVisible={isVisible} />

            <div className={`main-darkmode ${isVisible ? 'moverse' : ''}`.trimEnd()}>
              <BotonDarkMode />
            </div>
          </main>

          <section className={`container-infocontacto ${darkClass}`}>
            <div className='info-delivery'>
              <p>Pedidos al <b>+5411-6518-2730</b>.</p>
              <p>Delivery días sábados. Costo de envío <b>$1000</b>.</p>
            </div>

            <div className='info-contacto'>
              <h2>Viandas Viking</h2>

              <div className='container-redessociales'>
                <div className='red-social fb'>
                  <FaFacebookF className='icono' />
                </div>
                <div className='red-social ig'>
                  <BsInstagram className='icono' />
                </div>
                <div className='red-social tw'>
                  <BsTwitterX className='icono' />
                </div>
                <div className='red-social yt'>
                  <BsYoutube className='icono' />
                </div>
              </div>

              <div className='container-lista'>
                <ul className='lista'>
                  <li><a href='#'>Menú</a></li>
                  <li><a href='#'>Restaurantes</a></li>
                  <li><a href='#'>Cupones</a></li>
                  <li><a href='#'>Nosotros</a></li>
                </ul>
              </div>

              <div className='container-lista'>
                <ul className='lista'>
                  <li><a href='#'>Contáctanos</a></li>
                  <li><a href='#'>Empleo</a></li>
                  <li><a href='#'>Política de privacidad</a></li>
                  <li><a href='#'>Defensa del consumidor</a></li>
                </ul>
              </div>
            </div>
          </section>

          <footer className={`container-footer ${darkClass}`}>
            <p><b>VK®2024</b> Todos los derechos reservados.</p>
          </footer>

        </EntradaContext.Provider>
      </CarritoContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;