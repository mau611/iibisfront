"use client";
import ActividadInvestigacion from "@/components/ActividadInvestigacion/ActividadInvestigacion";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Form,
  InputGroup,
  ListGroup,
  Row,
} from "react-bootstrap";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const EstadisticasPrincipal = () => {
  const actividades = [
    "Produccion cientifica",
    "Produccion intelectual",
    "Interaccion academica",
    "Capacitaciones",
    "Interaccion social",
    "Otros",
  ];
  const [years, setYears] = useState<Number[]>([]);
  useEffect(() => {
    getYears();
  }, []);
  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const pastYears = Array.from(
      { length: 5 },
      (_, index) => currentYear - index - 1
    );
    setYears([...pastYears.reverse(), currentYear]);
  };

  return (
    <AdminLayout>
      <h3 className="text-center p-2">Estadisticas</h3>
      <Row className="container">
        <Col lg={5}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Gestion:</InputGroup.Text>
            <Form.Select aria-label="Gestion">
              <option>Todos</option>
              {years.map((year) => (
                <option>{year}</option>
              ))}
            </Form.Select>
          </InputGroup>
        </Col>
        <Col lg={5}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Actividades:</InputGroup.Text>
            <Form.Select aria-label="Gestion">
              <option>Todos</option>
              <option>Produccion cientifica</option>
              <option>Produccion intelectual</option>
              <option>Interaccion Acedemica</option>
              <option>Capacitaciones</option>
              <option>Interaccion social</option>
              <option>Otros</option>
            </Form.Select>
          </InputGroup>
        </Col>
        <Col lg={2}>
          <Button variant="outline-primary" style={{ width: "100%" }}>
            {" "}
            <HiOutlineDocumentSearch /> Buscar
          </Button>
        </Col>
      </Row>
      <Row>
        {actividades.map((actividad, index) => (
          <Col sm={4} key={index}>
            <ActividadInvestigacion title={actividad} />
          </Col>
        ))}
      </Row>
    </AdminLayout>
  );
};

export default EstadisticasPrincipal;
