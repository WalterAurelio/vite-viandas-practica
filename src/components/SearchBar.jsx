import React from "react";

function SearchBar({ filtrarPlatos }) {
  return (
    <div className="container-searchbar">
      <input
        className="input"
        type='search'
        placeholder='Buscar productos'
        id='search'
        name='search'
        onChange={(e) => {
          filtrarPlatos(e.target.value.toLowerCase().split(' '));
          console.log(e.target.value.toLowerCase().split(' '));
        }}
      />
      <button className="button" type='submit'>
        Buscar
      </button>
    </div>

  );
}

export default SearchBar;
