import React, { useContext } from "react";
import PlatoCard from "./PlatoCard";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { useEntradaStore } from "../store/entradaStore";

function ListaPlatos({ listaPlatos }) {
  const entrada = useEntradaStore(state => state.entrada);
  const { darkClass } = useContext(DarkModeContext);
  const sinResultados = listaPlatos.every(plato =>
    !plato.name.toLowerCase().includes(entrada) && !plato.description.toLowerCase().includes(entrada)
  );

  if (sinResultados) {
    return <p className={`no-resultados ${darkClass}`}>No se encontraron resultados.</p>
  }

  return (
    <div className="container-cards">
      {
        listaPlatos.map((plato, index) =>
          <PlatoCard
            key={index}
            plato={plato}
          />
        )
      }
    </div>
  );
}

export default ListaPlatos;
