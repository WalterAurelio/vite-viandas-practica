import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ImageCarousel from './components/ImageCarousel';
import PlatoCard from './components/PlatoCard';

function App() {

  return (
    <>
      <header className='navegacion-principal'>
        <h1>Viandas Viking</h1>
        <SearchBar />
        <Navbar />
      </header>

      {/* <section className='presentacion'>
        <ImageCarousel />
      </section> */}

      <PlatoCard />
    </>
  );
}

export default App;