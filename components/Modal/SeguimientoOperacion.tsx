import axiosApi from "@/Api/AxiosApi";
import axiosInstance from "@/Api/AxiosInstance";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const SeguimientoOperacion = ({
  show,
  handleClose,
  unidad,
  periodo,
  operacion,
}) => {
  const csrf = () => axiosInstance.get("/sanctum/csrf-cookie");
  const [formData, setFormData] = useState({
    periodo: "",
    documentos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await csrf();
    try {
      const response = axiosApi.post(`/documento_verificacion`, {
        meta: formData.periodo,
        periodo: periodo,
        descripcion: formData.documentos,
        unidadId: unidad,
        operacionId: operacion,
      });
    } catch (error) {
      console.log(error);
    }
    handleClose();
    window.location.reload();
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <>
            {`Seguimiento: ${unidad}`} <br /> {`Periodo: ${periodo}`}{" "}
          </>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formPeriodo">
            <Form.Label>Meta periodo</Form.Label>
            <Form.Control
              type="number"
              min={0}
              placeholder="Colocar lo logrado en numero "
              name="periodo"
              value={formData.periodo}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Form.Group controlId="formDocumentos">
            <Form.Label>
              Documentos de verificación (Especificar nombres, titulo, fechas
              según corresponda)
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Colocar el medio de verificacion(especificando nombres, fechas, según lo que corresponda)"
              name="documentos"
              value={formData.documentos}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SeguimientoOperacion;
