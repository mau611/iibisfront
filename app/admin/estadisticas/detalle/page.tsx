"use client";
import DetalleReportes from "@/components/DetalleReportes/DetalleReportes";
import { endpoint } from "@/components/Endpoint/Endpoint";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { HiOutlineDocumentSearch } from "react-icons/hi";

const DetalleOperaciones = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [years, setYears] = useState<Number[]>([]);
  const [year, setYear] = useState("Todos");

  useEffect(() => {
    getYears();
    getOperaciones();
  }, [year]);

  const getOperaciones = async () => {
    const response = await axios.get(`${endpoint}/detalle_operaciones/${year}`);
    setOperaciones(response.data);
  };
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
      <h3 className="text-center p-2">Detalle de operaciones</h3>
      <Row className="container">
        <Col lg={5}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">
              Buscar por gestion:
            </InputGroup.Text>
            <Form.Select
              aria-label="Gestion"
              value={year}
              onChange={(e) => {
                setYear(e.target.value);
              }}
            >
              <option value="Todos">Todos</option>
              {years.map((y) => (
                <option key={y} value={y}>
                  {y}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
        </Col>
      </Row>
      {operaciones.length > 0 &&
        operaciones.map((operacion, index) => (
          <DetalleReportes key={index} operacion={operacion} />
        ))}
    </AdminLayout>
  );
};

export default DetalleOperaciones;
