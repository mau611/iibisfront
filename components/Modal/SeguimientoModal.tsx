import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { endpoint } from "../Endpoint/Endpoint";
import axiosInstance from "@/Api/AxiosInstance";
import axiosApi from "@/Api/AxiosApi";

const SeguimientoModal = ({ show, handleClose, id, tipoSeguimiento }) => {
  const csrf = () => axiosInstance.get("/sanctum/csrf-cookie");
  const [avance, setAvance] = useState(0);
  const isActividad = tipoSeguimiento === "actividad";
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await csrf();
      const response = await axiosApi.post(
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
