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

const DetalleOperaciones = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [year, setYear] = useState("Todos");
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getOperaciones();
  }, [year, currentPage]);

  const getOperaciones = async () => {
    const response = await axios.get(
      `${endpoint}/detalle_operaciones/${year}?page=${currentPage}`
    );
    setOperaciones(response.data.data);
    setLastPage(response.data.last_page);
  };
  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <AdminLayout>
      <h3 className="text-center p-2">Detalle de operaciones</h3>
      <Row className="container">
        <Col lg={5}>
          <YearSelect
            value={year}
            onChange={setYear}
            setCurrentPage={setCurrentPage}
          />
        </Col>
      </Row>
      <Paginacion
        currentPage={currentPage}
        lastPage={lastPage}
        onChangePage={onChangePage}
      />
      {operaciones.length > 0 &&
        operaciones.map((operacion, index) => (
          <DetalleReportes key={index} operacion={operacion} />
        ))}
      <Paginacion
        currentPage={currentPage}
        lastPage={lastPage}
        onChangePage={onChangePage}
      />
    </AdminLayout>
  );
};

export default DetalleOperaciones;
