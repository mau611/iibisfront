import React, { useEffect, useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";

const OperacionHeadInv = ({ operacion }) => {
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
          <Col sm={3}>
            <strong>Medio de verificacion: </strong>
            {operacion.medioVerificacion}
          </Col>
          <Col sm={3}>
            <strong>Monto: </strong>
            {operacion.monto} Bs
          </Col>
        </Row>
      ) : (
        <></>
      )}
    </div>
  );
};

export default OperacionHeadInv;
