"use client";
import DetalleReportes from "@/components/DetalleReportes/DetalleReportes";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const DetalleOperaciones = () => {
  const [years, setYears] = useState<Number[]>([]);
  const [titulo, setTitulo] = useState("");
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
      <h3 className="text-center p-2">Detalles de {titulo}</h3>
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
            <InputGroup.Text id="basic-addon1">Opcion:</InputGroup.Text>
            <Form.Select
              aria-label="Gestion"
              onChange={(e) => setTitulo(e.target.value)}
            >
              <option value="Todos">Todos</option>
              <option value="Investigador">Investigador</option>
              <option value="Unidad">Unidad</option>
              <option value="Operaciones comunes">Operaciones</option>
            </Form.Select>
          </InputGroup>
        </Col>
        <Col lg={2}>
          <Button variant="outline-primary" style={{ width: "100%" }}>
            <HiOutlineDocumentSearch /> Buscar
          </Button>
        </Col>
      </Row>
      {Array.from({ length: 10 }, (_, index) => index + 1).map(
        (element, index) => (
          <DetalleReportes key={index} />
        )
      )}
    </AdminLayout>
  );
};

export default DetalleOperaciones;
