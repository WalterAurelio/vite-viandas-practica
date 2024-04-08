import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

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
        }}
      />
      <button
        className={`boton ${isActive ? 'is-active' : ''}`.trimEnd()}
        type='button'
        onClick={() => { setIsActive(!isActive) }}
      >
        <BsSearch className="icono" />
      </button>
    </div>

  );
}

export default SearchBar;
