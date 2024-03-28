import { useState, useContext } from 'react';
import SearchBar from './components/SearchBar';
import ImageCarousel from './components/ImageCarousel';
import Carrito from './components/Carrito';
import ListaPlatos from './components/ListaPlatos';
import platosJson from "./auxObject/platos.json";
import { CarritoContext } from './contexts/CarritoContext';
import { EntradaContext } from './contexts/EntradaContext';
import { v4 as uuidv4 } from 'uuid';
import ArticuloCarrito from './components/ArticuloCarrito';

let listaPlatos = platosJson.platos;

function App() {
  const [platos, setPlatos] = useState(listaPlatos);
  const [listaCarrito, setListaCarrito] = useState([]);
  const [entrada, setEntrada] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const [carritoActive, setCarritoActive] = useState(false);

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

          <button className={`hamburger ${isActive ? 'is-active' : ''}`.trimEnd()}
            onClick={() => { setIsActive(!isActive) }}
          >
            <div className="bar"></div>
          </button>
          <nav className={`nav-mobile ${isActive ? 'is-active' : ''}`}>
            <a href="#">Inicio</a>
            <a href="#">Categorías</a>
            <a href="#">Promos</a>
            <a href="#">Contacto</a>
          </nav>

          <button className={`boton-carrito`}
            onClick={() => { setCarritoActive(!carritoActive) }}
          >
            O
          </button>
          <div className={`carrito ${carritoActive ? 'is-active' : ''} ${listaCarrito.length < 1 ? 'vacio' : ''}`}>
            {
              (listaCarrito.length < 1) &&
              <p className='mensaje-vacio'>El carrito se encuentra vacío.</p>
            }
            {
              listaCarrito.map((articulo, index) =>
                <ArticuloCarrito
                  key={index}
                  articulo={articulo}
                />
              )
            }
          </div>

          {/* <h1 className='logo'>Logo</h1> */}

          {/* <SearchBar filtrarPlatos={setEntrada} /> */}

          {/* <div className='nav-container'>
            <nav className='nav-bar'>
              <a href="#">Inicio</a>
              <a href="#">Categorías</a>
              <a href="#">Promos</a>
              <a href="#">Contacto</a>
            </nav>
          </div> */}

          {/* <Carrito listaArticulos={listaCarrito} /> */}

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