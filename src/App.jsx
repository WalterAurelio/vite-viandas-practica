import { useState, useContext } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ImageCarousel from './components/ImageCarousel';
import PlatoCard from './components/PlatoCard';
import Carrito from './components/Carrito';
import ListaPlatos from './components/ListaPlatos';
import platosJson from "./auxObject/platos.json";
import { CarritoContext } from './contexts/CarritoContext';
import { v4 as uuidv4 } from 'uuid';

let listaPlatos = platosJson.platos;

function App() {
  const [platos, setPlatos] = useState(listaPlatos);
  const [listaCarrito, setListaCarrito] = useState([]);

  function filtrarPlatos(input) {
    let listaActualizada = listaPlatos;
    if (input.trimEnd() !== '') {
      listaActualizada = listaActualizada.filter(item =>
        item.name.toLowerCase().includes(input) || item.description.toLowerCase().includes(input)
      );
    }
    console.log(listaActualizada);
    setPlatos(listaActualizada);
  }

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
      <header className='navegacion-principal'>
        <h1>Viandas Viking</h1>
        <SearchBar filtrarPlatos={filtrarPlatos} />
        <Navbar />
        <Carrito listaArticulos={listaCarrito} />
      </header>

      {/* <section className='presentacion'>
        <ImageCarousel />
      </section> */}

      <main>
        <ListaPlatos listaPlatos={platos} />
      </main>
    </CarritoContext.Provider>
  );
}

export default App;