import React from "react";
import "./styles.css";
import { ListGroup } from "react-bootstrap";

const DetalleReportes = ({ operacion }) => {
  const contadorUnidad = (unidad) => {
    let total = 0;
    operacion.documentos_verificacion?.map((doc) => {
      if (doc.unidad.nombre === unidad) {
        total += doc.meta.meta;
      }
    });
    return total;
  };

  const totalPrevisto = () => {
    let total = 0;
    operacion.metas.map((meta) => {
      total += meta.meta;
    });
    return total;
  };

  const periodo = (periodo) => {
    let total = 0;
    operacion.metas.map((meta) => {
      if (meta.periodo === String(periodo)) {
        total = meta.meta;
      }
    });
    return total;
  };

  const totalEjecutado = () => {
    let total = 0;
    operacion.documentos_verificacion.map((doc) => {
      total += doc.meta.meta;
    });
    return total;
  };
  const totalEjecutadoPeriodo = (periodo) => {
    let total = 0;
    operacion.documentos_verificacion.map((doc) => {
      if (doc.meta.periodo === String(periodo)) {
        total += doc.meta.meta;
      }
    });
    return total;
  };

  return (
    <div className="body">
      <p>
        <strong>
          {operacion.numeroOperacion}. {operacion.operacion}
        </strong>{" "}
        (Basica: {contadorUnidad("Basica")}, Salud Publica:{" "}
        {contadorUnidad("S Publica")}, ENT: {contadorUnidad("Ent")}, Clinica:{" "}
        {contadorUnidad("Clinica")}, Cumetrop: {contadorUnidad("Cumetrop")},
        Iibismed: {contadorUnidad("Iibismed")})
      </p>
      <p>
        <strong>META</strong> Previsto {totalPrevisto()}({periodo(1)},
        {periodo(2)}), Ejecutado {totalEjecutado()}({totalEjecutadoPeriodo(1)},
        {totalEjecutadoPeriodo(2)})
      </p>
      <ListGroup>
        <ListGroup.Item>
          <p>
            <strong>Primer Semestre</strong>
          </p>
          <ol>
            {operacion.documentos_verificacion.map((doc, index) =>
              doc.meta.periodo === "1" ? (
                <li key={index}>
                  {doc.descripcion} {doc.nombres} ({doc.unidad.nombre})
                </li>
              ) : (
                <></>
              )
            )}
          </ol>
        </ListGroup.Item>
        <ListGroup.Item>
          <p>
            <strong>Segundo Semestre</strong>
          </p>
          <ol>
            {operacion.documentos_verificacion.map((doc, index) =>
              doc.meta.periodo === "2" ? (
                <li key={index}>
                  {doc.descripcion} {doc.nombres} ({doc.unidad.nombre})
                </li>
              ) : (
                <></>
              )
            )}
          </ol>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default DetalleReportes;
