import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { endpoint } from "../Endpoint/Endpoint";
import axiosInstance from "@/Api/AxiosInstance";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const csrf = () => axiosInstance.get("/sanctum/csrf-cookie");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await csrf();
      await axiosInstance.post(`/login`, {
        email,
        password,
      });
      setPassword("");
      setEmail("");
      router.push("/investigador");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      // style={{ height: "100vh", backgroundColor: "#eeeeee" }}
      style={{ height: "100vh", backgroundColor: "#106DFB" }}
    >
      <Row className="justify-content-center" style={{ width: "60vh" }}>
        <Col sm={12}>
          <Card>
            <Card.Body>
              <Card.Title className="text-center mb-4">
                Iniciar Sesión
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
              <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicEmail" className="py-2">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <br />
                <Button variant="primary" type="submit" className="w-100">
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

export default Login;
