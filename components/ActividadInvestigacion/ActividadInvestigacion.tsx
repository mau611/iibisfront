"use client";
import React from "react";
import "./styles.css";
import { Card } from "react-bootstrap";
const ActividadInvestigacion = ({ title, activitie }) => {
  const cantidadProducida = (operaciones) => {
    let total = 0;
    operaciones.map((operacion) => {
      operacion.documentos_verificacion.map((doc) => {
        total += doc.metas[0].meta;
      });
    });
    return total;
  };
  return (
    <div className="body">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <ul>
            {activitie.subactividades.map((subactividad) =>
              cantidadProducida(subactividad.operaciones) !== 0 ? (
                <li>
                  {cantidadProducida(subactividad.operaciones)}{" "}
                  {subactividad.subactividad}
                </li>
              ) : (
                <></>
              )
            )}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ActividadInvestigacion;
