import UserContext from "@/components/data/Context/UserContext";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
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

const AdminNav = () => {
  const router = useRouter();
  const { user, getUser, isAdmin, cerrarSesion } = useContext(UserContext);
  useEffect(() => {
    getUser();
    if (!isAdmin) {
      router.push("/");
    }
  }, []);
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
          <Navbar.Brand href="/admin" className="text-primary-emphasis">
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
                <NavDropdown
                  title="Reportes"
                  id={`offcanvasNavbarDropdown-expand-lg`}
                >
                  <NavDropdown.Item href="/admin/estadisticas/detalle">
                    Detalle de operaciones
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/admin/estadisticas/actividades_investigacion">
                    Actividades de investigacion
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/admin">Inicio</Nav.Link>
                <Nav.Link href="/admin/proyectos">Proyectos</Nav.Link>
                <Nav.Link href="/admin/operaciones">Operaciones</Nav.Link>
                {user && (
                  <Nav.Link onClick={() => cerrarSesion()}>
                    Cerrar Sesion
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNav;
