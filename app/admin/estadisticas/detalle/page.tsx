"use client";
import DetalleReportes from "@/components/DetalleReportes/DetalleReportes";
import { endpoint } from "@/components/Endpoint/Endpoint";
import Paginacion from "@/components/Paginacion/Paginacion";
import YearSelect from "@/components/YearSelect/YearSelect";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { HiOutlineDocumentSearch } from "react-icons/hi";
import Cookies from "js-cookie";

const DetalleOperaciones = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [year, setYear] = useState("Todos");

  useEffect(() => {
    const yearCookie = Cookies.get("det-year");
    setYear(yearCookie ? yearCookie : "Todos");
    getOperaciones();
  }, [year]);

  const getOperaciones = async () => {
    const response = await axios.get(`${endpoint}/detalle_operaciones/${year}`);
    setOperaciones(response.data);
  };
  return (
    <AdminLayout>
      <h3 className="text-center p-2">Detalle de operaciones</h3>
      <Row className="container">
        <Col lg={5}>
          <YearSelect value={year} onChange={setYear} component={"det"} />
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
