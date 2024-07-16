"use client";
import CardTitle from "@/components/Card/CardTitle";
import UserState from "@/components/data/State/UserState";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.css";

const page = () => {
  return (
    <AdminLayout>
      <UserState>
        <Container className="my-5 d-flex flex-column align-items-center">
          <Row className="justify-content-center align-items-center w-100">
            <Col xs={10} md={6} className="mb-3 slide-up">
              <CardTitle title="Proyectos" link="/admin/proyectos" />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center w-100">
            <Col
              xs={10}
              md={6}
              className="mb-3 slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <CardTitle title="Operaciones" link="/admin/operaciones" />
            </Col>
          </Row>
        </Container>
      </UserState>
    </AdminLayout>
  );
};

export default page;
