"use client";
import axiosApi from "@/Api/AxiosApi";
import ActividadInvestigacion from "@/components/ActividadInvestigacion/ActividadInvestigacion";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import { Col, Form, InputGroup, Row } from "react-bootstrap";

const EstadisticasPrincipal = () => {
  const [activities, setActivities] = useState([]);
  const [years, setYears] = useState<Number[]>([]);
  const [year, setYear] = useState("Todos");
  const [actividad, setActividad] = useState("Todos");

  useEffect(() => {
    getYears();
    getActividades();
  }, [year, actividad]);

  const getActividades = async () => {
    const response = await axiosApi.get(
      `/actividades_investigacion/${year}/${actividad}`
    );
    setActivities(response.data);
  };
  const getActividad = () => {};

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
        <Col sm={6}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Gestion :</InputGroup.Text>
            <Form.Select
              aria-label="Gestion"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="Todos">Todos</option>
              {years.map((y, index) => (
                <option value={y} key={index}>
                  {y}
                </option>
              ))}
            </Form.Select>
          </InputGroup>
        </Col>
        <Col sm={6}>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Actividades:</InputGroup.Text>
            <Form.Select
              aria-label="Gestion"
              onChange={(e) => setActividad(e.target.value)}
              value={actividad}
            >
              <option value="Todos">Todos</option>
              <option value="Produccion cientifica">
                Produccion cientifica
              </option>
              <option value="Produccion intelectual">
                Produccion intelectual
              </option>
              <option value="Interaccion academica">
                Interaccion acedemica
              </option>
              <option value="Capacitaciones">Capacitaciones</option>
              <option value="Interaccion social">Interaccion social</option>
              <option value="Otros">Otros</option>
            </Form.Select>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        {activities?.map((act, index) => (
          <Col sm={4} key={index}>
            <ActividadInvestigacion title={act.actividad} activitie={act} />
          </Col>
        ))}
      </Row>
    </AdminLayout>
  );
};

export default EstadisticasPrincipal;
