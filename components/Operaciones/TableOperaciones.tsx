import Link from "next/link";
import React from "react";
import {
  Button,
  Container,
  ListGroup,
  OverlayTrigger,
  Table,
  Tooltip,
} from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";

const TableOperaciones = ({ operaciones }) => {
  const totalMeta = (metas) => {
    let total = 0;
    metas.map((meta) => {
      total = total + meta.meta;
    });
    return total;
  };
  const totalPeriodo = (docsVerificacion, periodo) => {
    let total = 0;
    docsVerificacion.map((doc) => {
      if (doc.meta?.periodo === String(periodo)) {
        total = total + doc.meta.meta;
      }
    });
    return total;
  };
  const Link = ({ id, children, title, link }) => (
    <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
      <a href={link}>{children}</a>
    </OverlayTrigger>
  );
  return (
    <Container>
      <Table striped bordered responsive hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Operacion</th>
            <th>Responsable</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {operaciones?.map((operacion, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <Link
                  title="Click para visualizar"
                  id="t-1"
                  link={`operacion/${operacion.id}`}
                >
                  {operacion.operacion}
                </Link>
              </td>
              <td>
                {operacion.investigador.nombres}{" "}
                {operacion.investigador.apellidos}
              </td>
              <td>
                <Button
                  variant="outline-success"
                  href={`seguimiento/operacion/${operacion.id}`}
                >
                  Realizar seguimiento
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableOperaciones;
