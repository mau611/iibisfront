"use client";
import Image from "next/image";
import {
  Col,
  Container,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import { FaHome, FaUser, FaSearch, FaBell } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark" expand="lg" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#home" className="text-primary-emphasis">
            <Image
              src="/images/image-color.png"
              style={{
                width:'100px',
                height:'auto',
              }}
              sizes="25vw"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}>
              <Nav.Link href="#search">
                <FaSearch />
              </Nav.Link>
              <Nav.Link href="#notifications">
                <FaBell />
              </Nav.Link>
              <Nav.Link href="#profile">
                <FaUser />
              </Nav.Link>
              <Nav.Link href="#home">
                <FaHome />
              </Nav.Link>
            </Nav>
            <Nav
              className="d-flex"
            >
              <Nav.Link href="#home">Iniciar sesion</Nav.Link>
              <Nav.Link href="#profile">
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      //body
      
      <Row>
        <Col sm={2}style={{height:'200px', backgroundColor:'whitesmoke'}}>1 of 2</Col>
        <Col sm={10}style={{height:'200px', backgroundColor:'aquamarine'}}>2 of 2</Col>
      </Row>

      //footer
      <div className="text-center p-5" style={{backgroundColor:'teal'}}>
        Footer - CopyRight 2024
      </div>
   
    </div>
  );
}
export default Home
