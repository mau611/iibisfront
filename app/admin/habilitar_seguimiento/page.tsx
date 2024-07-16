/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import axiosApi from "@/Api/AxiosApi";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import SeguimientosHabilitados from "@/components/Seguimientos/SeguimientosHabilitados";
import Title from "@/components/Title/Title";
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const page = () => {
  const [periodoSeguimiento, setPeriodoSeguimiento] = useState();
  const [estado, setEstado] = useState();
  const [periodo, setPeriodo] = useState(null);

  useEffect(() => {
    getPeriodo();
  }, []);

  const getPeriodo = async () => {
    try {
      const response = await axiosApi.get(
        `periodo/${new Date().getFullYear()}`
      );
      setPeriodo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const gestion = new Date().getFullYear();
      await axiosApi.post("habilitar_seguimiento", {
        periodo: periodoSeguimiento,
        gestion: gestion,
        habilitado: estado,
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };
  const isDisabledSelect = (value) => {
    return periodo && periodo > value;
  };
  return (
    <AdminLayout>
      <Container className="py-2">
        <Title title="Habilitar seguimiento" />
        <Row>
          <Col sm={6}>
            <SeguimientosHabilitados />
          </Col>
          <Col sm={6}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="trackingNumber" className="py-3">
                <Form.Label>Periodo:</Form.Label>
                <Form.Control
                  as="select"
                  value={periodoSeguimiento}
                  onChange={(e) => setPeriodoSeguimiento(e.target.value)}
                >
                  <option>Seleccione un periodo</option>
                  <option value="1" disabled={isDisabledSelect(1)}>
                    1
                  </option>
                  <option value="2" disabled={isDisabledSelect(2)}>
                    2
                  </option>
                  <option value="3" disabled={isDisabledSelect(3)}>
                    3
                  </option>
                  <option value="4" disabled={isDisabledSelect(4)}>
                    4
                  </option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label>Estado:</Form.Label>
                <Form.Control
                  as="select"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                >
                  <option>Seleccione</option>
                  <option value={1}>Habilitar</option>
                  <option value={0}>Deshabilitar</option>
                </Form.Control>
              </Form.Group>

              <div className="text-center py-3">
                <Button variant="primary" type="submit">
                  Guardar cambios
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export default page;
