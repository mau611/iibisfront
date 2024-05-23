"use client";
import CardTitle from "@/components/Card/CardTitle";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const page = () => {
  return (
    <InvLayout>
      <Container className="my-5">
        <Title title="Bienvenido Investigador" />
        <Row className="mb-4">
          <Col sm={12} md={6} lg={6} className="mb-3">
            <CardTitle title="Mis proyectos" link="/investigador/proyectos" />
          </Col>
          <Col sm={12} md={6} lg={6} className="mb-3">
            <CardTitle title="Mis componentes" link="" />
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={6} lg={6} className="mb-3">
            <CardTitle title="Mis datos" link="" />
          </Col>
          <Col sm={12} md={6} lg={6} className="mb-3">
            <CardTitle
              title="Mis operaciones"
              link="/investigador/operaciones"
            />
          </Col>
        </Row>
      </Container>
    </InvLayout>
  );
};

export default page;
