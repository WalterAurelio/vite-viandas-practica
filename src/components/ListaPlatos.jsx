import React from "react";
import PlatoCard from "./PlatoCard";

function ListaPlatos({ listaPlatos }) {

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
