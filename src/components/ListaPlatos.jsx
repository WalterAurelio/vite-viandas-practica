import React, { useContext } from "react";
import PlatoCard from "./PlatoCard";
import { EntradaContext } from "../contexts/EntradaContext";

function ListaPlatos({ listaPlatos }) {
  const entrada = useContext(EntradaContext);
  const sinResultados = listaPlatos.every(plato =>
    !plato.name.toLowerCase().includes(entrada) && !plato.description.toLowerCase().includes(entrada)
  );

  if (sinResultados) {
    return <p className="no-resultados">No se encontraron resultados.</p>
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
