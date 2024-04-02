import { useState, useRef } from 'react';
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
  const [platos, setPlatos] = useState(listaPlatos);
  const [listaCarrito, setListaCarrito] = useState([]);
  const [entrada, setEntrada] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  /* const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  observer.observe(ref.current); */

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
            <div className={`container-logo ${isVisible ? '' : 'is-scrolled'}`}>
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
          <ImageCarousel />
          {/* <ListaPlatos listaPlatos={platos} /> */}
        </main>

      </EntradaContext.Provider>
    </CarritoContext.Provider>
  );
}

export default App;