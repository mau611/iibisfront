"use client";
import React from "react";
import "./styles.css";
import { Card } from "react-bootstrap";
const ActividadInvestigacion = ({ title }) => {
  return (
    <div className="body">
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>

          <ul>
            <li>8 articulos cientificos publicados</li>
            <li>11 articulos cientificos en remision</li>
            <li>13 articulos ientificos elaborados</li>
            <li>4 manuscritos de difusion elaborado</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ActividadInvestigacion;
