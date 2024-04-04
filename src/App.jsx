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

        <div ref={ref} className='container-aux'>
        </div>

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

        <main>
          {/* <ImageCarousel /> */}
          <ListaPlatos listaPlatos={listaPlatos} />
        </main>

        <section className='container-infocontacto'>
          <div className='info-delivery'>
            <p>Pedidos al <b>+5411-6518-2730</b>.</p>
            <p>Delivery días sábados. Costo de envío <b>$1000</b>.</p>
          </div>

          <div className='info-contacto'>
            <h2>Viandas Viking</h2>

            <div className='container-lista'>
              <h3>Info VK</h3>
              <ul className='lista'>
                <li><a href='#'>Menú</a></li>
                <li><a href='#'>Restaurantes</a></li>
                <li><a href='#'>Cupones</a></li>
                <li><a href='#'>Nosotros</a></li>
              </ul>
            </div>

            <div className='container-lista'>
              <h3>Información</h3>
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

          <div className='container-redessociales'>
            <div className='red-social fb'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
              </svg>
            </div>
            <div className='red-social ig'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </div>
            <div className='red-social tw'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </div>
            <div className='red-social yt'>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-youtube" width="36" height="36" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </div>
          </div>
        </footer>

      </EntradaContext.Provider>
    </CarritoContext.Provider>
  );
}

export default App;