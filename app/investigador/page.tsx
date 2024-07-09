"use client";
import React from "react";
import CardTitle from "@/components/Card/CardTitle";
import InvLayout from "@/components/layout/investigador/InvLayout";
import UserState from "@/components/data/State/UserState";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css"; // Importa el archivo CSS

const Page = () => {
  return (
    <InvLayout>
      <UserState>
        <Container className="my-5 d-flex flex-column align-items-center">
          <Row className="justify-content-center align-items-center w-100">
            <Col xs={10} md={6} className="mb-3 slide-up">
              <CardTitle title="Proyectos" link="/investigador/proyectos" />
            </Col>
          </Row>
          <Row className="justify-content-center align-items-center w-100">
            <Col
              xs={10}
              md={6}
              className="mb-3 slide-up"
              style={{ animationDelay: "0.5s" }}
            >
              <CardTitle title="Operaciones" link="/investigador/operaciones" />
            </Col>
          </Row>
        </Container>
      </UserState>
    </InvLayout>
  );
};

export default Page;
