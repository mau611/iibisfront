import React from "react";
import { Col, Row } from "react-bootstrap";

const OperacionHead = ({ operacion }) => {
  return (
    <div className="p-3">
      {operacion ? (
        <Row>
          <Col sm={3}>
            <strong>Producto: </strong>
            {operacion.producto}
          </Col>
          <Col sm={3}>
            <strong>Indicador: </strong>
            {operacion.indicador}
          </Col>
          <Col sm={1}></Col>
          <Col sm={3}>
            <strong>Medio de verificacion: </strong>
            {operacion.medioVerificacion}
          </Col>
          <Col sm={1}>
            <strong>Monto: </strong>
            {operacion.monto}
          </Col>
          <Col sm={1}>
            <strong>Responsable: </strong>
            {operacion.investigador?.nombres}{" "}
            {operacion.investigador?.apellidos}
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OperacionHead;
