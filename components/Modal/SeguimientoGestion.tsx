import axiosApi from "@/Api/AxiosApi";
import axiosInstance from "@/Api/AxiosInstance";
import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SeguimientoGestion = ({ show, handleClose, gestionId, periodo }) => {
  const [status, setStatus] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [goal, setGoal] = useState("");
  const [observations, setObservations] = useState("");
  const [needsModification, setNeedsModification] = useState(0);
  const csrf = () => axiosInstance.get("/sanctum/csrf-cookie");

  const handleStatusChange = (event) => {
    const selectedStatus = event.target.value;
    setStatus(selectedStatus);
    if (selectedStatus === "no iniciado") {
      setPercentage(0);
    } else if (selectedStatus === "terminado") {
      setPercentage(100);
    }
  };

  const handlePercentageChange = (event) => {
    if (status === "En curso") {
      setPercentage(event.target.value);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await csrf();
      const response = await axiosApi.post(
        `/seguimiento_gestion/${gestionId}`,
        {
          estado: status,
          porcentajeAvance: percentage,
          meta: goal,
          observacion: observations,
          modificar: needsModification,
          periodo: periodo,
          id: gestionId,
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
        <Modal.Title>Seguimiento gestion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formStatus">
            <Form.Label>Seleccione la opción del estado de avance</Form.Label>
            <Form.Control
              as="select"
              value={status}
              onChange={handleStatusChange}
              required
            >
              <option>Seleccione una opcion</option>
              <option value="No iniciado">No iniciado</option>
              <option value="En curso">En curso</option>
              <option value="Terminado">Terminado</option>
            </Form.Control>
          </Form.Group>

          {status === "En curso" && (
            <Form.Group controlId="formPercentage">
              <Form.Label>% de avance</Form.Label>
              <Form.Control
                type="number"
                value={percentage}
                onChange={handlePercentageChange}
                min="0"
                max="100"
              />
            </Form.Group>
          )}

          <Form.Group controlId="formGoal">
            <Form.Label>Meta</Form.Label>
            <Form.Control
              type="number"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formObservations">
            <Form.Label>Observaciones</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              maxLength="190"
              value={observations}
              onChange={(e) => setObservations(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formNeedsModification">
            <Form.Label>¿Necesita modificación?</Form.Label>
            <Form.Control
              as="select"
              value={needsModification}
              onChange={(e) => setNeedsModification(e.target.value)}
            >
              <option value={1}>SI</option>
              <option value={0}>NO</option>
            </Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default SeguimientoGestion;
