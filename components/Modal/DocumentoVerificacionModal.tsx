import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import axiosApi from "@/Api/AxiosApi";

const DocumentoVerificacionModal = ({
  show,
  handleClose,
  operacionId,
  unidadId,
  periodo,
}) => {
  const [meta, setMeta] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    if (!show) {
      setMeta("");
      setDescripcion("");
    }
  }, [show]);

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      axiosApi.post(`/documento_verificacion`, {
        meta,
        periodo,
        descripcion,
        unidadId,
        operacionId,
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
          Operacion {operacionId} - Unidad {unidadId}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTextInput">
            <Form.Label>Meta</Form.Label>
            <Form.Control
              type="number"
              value={meta}
              min={0}
              onChange={(e) => setMeta(e.target.value)}
            />
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default DocumentoVerificacionModal;
