"use client";
import CardTitle from "@/components/Card/CardTitle";
import Title from "@/components/Title/Title";
import TitleName from "@/components/Title/TitleName";
import UserContext from "@/components/data/Context/UserContext";
import UserState from "@/components/data/State/UserState";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React, { useContext, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const page = () => {
  return (
    <AdminLayout>
      <UserState>
        <Container className="my-5">
          <Title title="Panel de administracion" />
          <Row className="mb-4">
            <Col sm={12} md={6} lg={6} className="mb-3">
              <CardTitle title="Proyectos" link="/admin/proyectos" />
            </Col>
            <Col sm={12} md={6} lg={6} className="mb-3">
              <CardTitle title="Operaciones" link="/admin/operaciones" />
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={6} lg={6} className="mb-3">
              <CardTitle title="Unidades" link="" />
            </Col>
            <Col sm={12} md={6} lg={6} className="mb-3">
              <CardTitle
                title="Investigadores"
                link="/investigador/operaciones"
              />
            </Col>
          </Row>
        </Container>
      </UserState>
    </AdminLayout>
  );
};

export default page;
