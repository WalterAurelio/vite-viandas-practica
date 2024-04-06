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

let listaPlatos = platosJson.platos;

function App() {
  const [listaCarrito, setListaCarrito] = useState([]);
  const [entrada, setEntrada] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

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
    <CarritoContext.Provider value={{ agregarACarrito, eliminarDeCarrito }}>
      <EntradaContext.Provider value={entrada}>

        <div ref={ref} className='container-aux'></div>
        <header className='header'>
          <div className='container-header'>
            <div className={`container-logo ${isVisible ? '' : 'is-scrolled'}`.trimEnd()}>
              <h1 className='logo'>2V</h1>
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

        <main className='main'>
          {/* <ImageCarousel /> */}
          <ListaPlatos listaPlatos={listaPlatos} />
          <div className='red-social wp'>
            <BsWhatsapp className='icono' />
          </div>
        </main>

        <section className='container-infocontacto'>
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

        <footer className='container-footer'>
          <p><b>VK®2024</b> Todos los derechos reservados.</p>
        </footer>

      </EntradaContext.Provider>
    </CarritoContext.Provider>
  );
}

export default App;