import React from "react";
import { Table } from "react-bootstrap";
import UnidadTable from "./UnidadTable";

const UnidadesTable = ({ docsVerificacion }) => {
  const unidadDocVerificacion = (unidad) => {
    let docs = [];
    docsVerificacion?.map((doc) => {
      if (doc.unidad.nombre === unidad) {
        docs.push(doc);
      }
    });
    return docs;
  };
  return (
    <div className="p-3">
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th className="text-center">Basica</th>
            <th className="text-center">S. Publica</th>
            <th className="text-center">ENT</th>
            <th className="text-center">Clinica</th>
            <th className="text-center">Cumetrop</th>
            <th className="text-center">Iibismed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <UnidadTable documentos={unidadDocVerificacion("Basica")} />
            </td>
            <td>
              <UnidadTable documentos={unidadDocVerificacion("S Publica")} />
            </td>
            <td>
              <UnidadTable documentos={unidadDocVerificacion("Ent")} />
            </td>
            <td>
              <UnidadTable documentos={unidadDocVerificacion("Clinica")} />
            </td>
            <td>
              <UnidadTable documentos={unidadDocVerificacion("Cumetrop")} />
            </td>
            <td>
              <UnidadTable documentos={unidadDocVerificacion("Iibismed")} />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UnidadesTable;
