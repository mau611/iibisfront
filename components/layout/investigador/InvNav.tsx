import Image from "next/image";
import React from "react";
import {
  Container,
  Dropdown,
  DropdownButton,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { FaBell, FaHome, FaSearch, FaUser } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";

const size = "2em";

const InvNav = () => {
  return (
    <>
      <Navbar
        key={"lg"}
        bg="primary"
        expand={"lg"}
        data-bs-theme="dark"
        sticky="top"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className="text-primary-emphasis">
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
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                Iibismed
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#profile">Datos iibismed</Nav.Link>
                <Nav.Link href="#search">Proyectos</Nav.Link>
                <Nav.Link href="#notifications">Operaciones</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default InvNav;
