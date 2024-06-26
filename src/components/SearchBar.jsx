import React, { useState, useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useEntradaStore } from "../store/entradaStore";

function SearchBar() {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);
  const { setEntrada } = useEntradaStore();

  return (
    <div className="container-searchbar">
      <input
        ref={ref}
        className={`input ${isActive ? 'is-active' : ''}`.trimEnd()}
        type='search'
        placeholder='Buscar productos'
        id='search'
        name='search'
        onChange={(e) => {
          setEntrada(e.target.value.toLowerCase().split(' '));
        }}
      />
      <button
        className={`boton ${isActive ? 'is-active' : ''}`.trimEnd()}
        type='button'
        onClick={() => {
          setIsActive(!isActive);
          ref.current.focus();
        }}
      >
        <BsSearch className="icono" />
      </button>
    </div>

  );
}

export default SearchBar;
