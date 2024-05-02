import Link from "next/link";
import React from "react";
import { ListGroup, Table } from "react-bootstrap";
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
      if (doc.metas[0].periodo === String(periodo)) {
        total = total + doc.metas[0].meta;
      }
    });
    return total;
  };
  return (
    <Table striped responsive>
      <thead>
        <tr className="text-center">
          <th>num Op</th>
          <th>Operacion</th>
          <th>Producto</th>
          <th>Indicador</th>
          <th>Linea base</th>
          <th>Meta</th>
          <th>Medio de verificacion</th>
          <th>1</th>
          <th>2</th>
          <th>3</th>
          <th>4</th>
          <th>Categoria programatica</th>
          <th>Monto</th>
          <th>Gestion</th>
          <th>Responsable</th>
        </tr>
      </thead>
      <tbody>
        {operaciones?.map((operacion, index) => (
          <tr key={index}>
            <td>{operacion.numeroOperacion}</td>
            <td>
              <Link href={`operacion/${operacion.id}`}>
                {operacion.operacion}
              </Link>
            </td>
            <td>{operacion.producto}</td>
            <td>{operacion.indicador}</td>
            <td>{operacion.lineaBase}</td>
            <td>{totalMeta(operacion.metas)}</td>
            <td>{operacion.medioVerificacion}</td>
            <td>{totalPeriodo(operacion.documentos_verificacion, 1)}</td>
            <td>{totalPeriodo(operacion.documentos_verificacion, 2)}</td>
            <td>{totalPeriodo(operacion.documentos_verificacion, 3)}</td>
            <td>{totalPeriodo(operacion.documentos_verificacion, 4)}</td>
            <td>{operacion.categoriaProgramatica}</td>
            <td>{operacion.monto}</td>
            <td>{operacion.gestion}</td>
            <td>
              {operacion.investigador.nombres}{" "}
              {operacion.investigador.apellidos}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableOperaciones;
