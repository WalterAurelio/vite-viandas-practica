import { useState } from 'react';
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
        <header className='header'>
          <div className='container-header'>

            {/* <h1 className='logo'>Logo</h1> */}

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



        {/* <section className='presentacion'>
          <ImageCarousel />
        </section> */}

        <main>
          <ListaPlatos listaPlatos={platos} />
        </main>
      </EntradaContext.Provider>
    </CarritoContext.Provider>
  );
}

export default App;