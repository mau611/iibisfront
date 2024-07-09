import axios from "axios";
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { endpoint } from "../Endpoint/Endpoint";

const ComponenteModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar componente</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formTextInput">
            <Form.Label>Nro. Componente</Form.Label>
            <Form.Control type="number" min={0} />
            <Form.Label>Componente del proyecto</Form.Label>
            <Form.Control as="textarea" rows={4} />
            <Form.Label>Responsable</Form.Label>
            <Form.Control />
            <Form.Label>Peso</Form.Label>
            <Form.Control type="number" min={0} />
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

export default ComponenteModal;
