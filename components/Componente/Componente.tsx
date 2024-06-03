import Link from "next/link";
import React from "react";
import { Button, Table } from "react-bootstrap";

const Componente = ({ componente, setActividadIdAndActividad }) => {
  return (
    <Table striped responsive>
      <thead>
        <tr className="text-center">
          <th>Numero</th>
          <th>Componente</th>
          <th>Responsable</th>
          <th>Peso</th>
          <th>Actividades</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{componente.nroComponente}</td>
          <td>{componente.componenteProyecto}</td>
          <td>{`${componente.investigador?.nombres} ${componente.investigador?.apellidos}`}</td>
          <td>{componente.peso}</td>
          <td>
            {componente.actividades?.map((actividad, index) => (
              <Button
                variant="outline-primary"
                key={index}
                onClick={() => setActividadIdAndActividad(actividad.id)}
              >
                {index + 1}
              </Button>
            ))}
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Componente;
