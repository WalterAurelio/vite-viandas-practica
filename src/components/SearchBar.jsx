import React, { useState } from "react";

function SearchBar({ filtrarPlatos }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="container-searchbar">
      <input
        className={`input ${isActive ? 'is-active' : ''}`.trimEnd()}
        type='search'
        placeholder='Buscar productos'
        id='search'
        name='search'
        onChange={(e) => {
          filtrarPlatos(e.target.value.toLowerCase().split(' '));
          console.log(e.target.value.toLowerCase().split(' '));
        }}
      />
      <button
        className="boton"
        type='button'
        onClick={() => { setIsActive(!isActive) }}
      >
        O
      </button>
    </div>

  );
}

export default SearchBar;
