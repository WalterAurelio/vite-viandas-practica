import React from "react";

function SearchBar() {
  return (
    <>
      <input
        type='search'
        placeholder='Buscar productos'
        id='search'
        name='search'
      />
      <button type='submit'>
        Buscar
      </button>
    </>

  );
}

export default SearchBar;
