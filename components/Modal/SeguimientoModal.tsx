import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { endpoint } from "../Endpoint/Endpoint";

const SeguimientoModal = ({ show, handleClose, id, tipoSeguimiento }) => {
  const [avance, setAvance] = useState(0);
  const isActividad = tipoSeguimiento === "actividad";
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(id);
    try {
      const response = await axios.post(
        `${endpoint}/${
          isActividad ? "seguimiento_actividad" : "seguimiento_gestion"
        }/${id}`,
        {
          porcentajeAvance: avance,
          id: id,
        }
      );
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Seguimiento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formTextInput">
            <Form.Label>% de avance</Form.Label>
            <Form.Control
              type="number"
              value={avance}
              min={0}
              onChange={(e) => setAvance(e.target.value)}
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

export default SeguimientoModal;
