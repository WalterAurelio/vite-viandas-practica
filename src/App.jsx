import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ImageCarousel from './components/ImageCarousel';
import PlatoCard from './components/PlatoCard';
import Carrito from './components/Carrito';

function App() {
  const [listaCarrito, setListaCarrito] = useState([]);

  function agregarACarrito(articulo) {
    const listaActualizada = [...listaCarrito, articulo];
    setListaCarrito(listaActualizada);
  }

  return (
    <>
      <header className='navegacion-principal'>
        <h1>Viandas Viking</h1>
        <SearchBar />
        <Navbar />
        <Carrito listaArticulos={listaCarrito} />
      </header>

      {/* <section className='presentacion'>
        <ImageCarousel />
      </section> */}

      <main>

      </main>

      <PlatoCard />
    </>
  );
}

export default App;