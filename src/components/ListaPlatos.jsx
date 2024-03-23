import React from "react";
import PlatoCard from "./PlatoCard";

function ListaPlatos({ ListaPlatos }) {
  return (
    <div>
      {
        ListaPlatos.map((plato, index) =>
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
