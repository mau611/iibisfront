import Image from "next/image";
import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const Register = () => {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh", backgroundColor: "#106DFB" }}
    >
      <Row className="justify-content-center" style={{ width: "60vh" }}>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Creacion de usuario
              </Card.Title>
              <div className="text-center">
                <Image
                  src="/images/image-color.png"
                  style={{
                    width: "100px",
                    height: "auto",
                  }}
                  sizes="25vw"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
              </div>
              <Form>
                <Form.Group controlId="formBasicEmail" className="py-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="py-2">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="py-2">
                  <Form.Label>Nombre de usuario</Form.Label>
                  <Form.Control type="text" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="py-2">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Confirmacion de contraseña</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <br />
                <Button
                  variant="outline-primary"
                  type="submit"
                  className="w-100"
                >
                  Iniciar Sesión
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
