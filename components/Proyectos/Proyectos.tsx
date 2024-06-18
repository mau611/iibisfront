import React, { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import UserContext from "../data/Context/UserContext";

const Proyectos = ({ proyectos }) => {
  const { getUser } = useContext(UserContext);
  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Presupuesto</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Objetivo general</th>
          <th>Finalidad</th>
          <th>Justificacion</th>
          <th>Beneficiario</th>
          <th>Resultados</th>
        </tr>
      </thead>
      <tbody>
        {proyectos?.map((proyecto, index) => (
          <>
            <tr key={index}>
              <td>{proyecto.tituloProyecto}</td>
              <td>{proyecto.presupuestoTotal}</td>
              <td>{proyecto.inicio}</td>
              <td>{proyecto.fin}</td>
              <td>{proyecto.objetivoGeneral}</td>
              <td>{proyecto.finalidad}</td>
              <td>{proyecto.justificacion}</td>
              <td>{proyecto.beneficiarios}</td>
              <td>{proyecto.resultadosPrincipales}</td>
            </tr>
            <tr className="text-center">
              <td colSpan={9}>
                {proyecto.proyectos?.map((gestion) => (
                  <Button
                    variant="outline-primary"
                    href={`proyecto/${gestion.id}`}
                  >
                    {gestion.inicioGestion.split("-")[0]}
                  </Button>
                ))}
              </td>
            </tr>
          </>
        ))}
      </tbody>
    </Table>
  );
};

export default Proyectos;
