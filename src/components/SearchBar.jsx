import React from "react";

function SearchBar({ filtrarPlatos }) {
  return (
    <>
      <input
        type='search'
        placeholder='Buscar productos'
        id='search'
        name='search'
        onChange={(e) => {
          filtrarPlatos(e.target.value.trim().toLowerCase());
        }}
      />
      <button type='submit'>
        Buscar
      </button>
    </>

  );
}

export default SearchBar;
