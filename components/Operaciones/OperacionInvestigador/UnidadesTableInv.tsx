import React from "react";
import UnidadTableInv from "./UnidadTableInv";
import { Table } from "react-bootstrap";

const UnidadesTableInv = ({ docsVerificacion, operacionId }) => {
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
              <UnidadTableInv
                documentos={unidadDocVerificacion("Basica")}
                operacionId={operacionId}
                unidadId={1}
              />
            </td>
            <td>
              <UnidadTableInv
                documentos={unidadDocVerificacion("S Publica")}
                operacionId={operacionId}
                unidadId={2}
              />
            </td>
            <td>
              <UnidadTableInv
                documentos={unidadDocVerificacion("Ent")}
                operacionId={operacionId}
                unidadId={3}
              />
            </td>
            <td>
              <UnidadTableInv
                documentos={unidadDocVerificacion("Clinica")}
                operacionId={operacionId}
                unidadId={4}
              />
            </td>
            <td>
              <UnidadTableInv
                documentos={unidadDocVerificacion("Cumetrop")}
                operacionId={operacionId}
                unidadId={5}
              />
            </td>
            <td>
              <UnidadTableInv
                documentos={unidadDocVerificacion("Iibismed")}
                operacionId={operacionId}
                unidadId={6}
              />
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UnidadesTableInv;
