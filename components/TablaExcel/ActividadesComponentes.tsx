import React from "react";
import "./styles.css";

const ActividadesComponentes = ({ actividades, dato }) => {
  return (
    <div className="celda">
      {actividades?.map((actividad, index) => (
        <div className="actividad" key={index}>
          {dato === "nro"
            ? index + 1
            : dato === "inv"
            ? actividad.investigador.nombres +
              " " +
              actividad.investigador.apellidos
            : actividad[dato]}
        </div>
      ))}
    </div>
  );
};

export default ActividadesComponentes;
