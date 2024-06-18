import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { endpoint } from "../Endpoint/Endpoint";
import axiosInstance from "@/Api/AxiosInstance";
import axiosApi from "@/Api/AxiosApi";

const ArchivosSeguimiento = ({ show, handleClose, seguimientoId }) => {
  const csrf = () => axiosInstance.get("/sanctum/csrf-cookie");
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(event.target.files);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files[]", selectedFiles[i]);
    }
    try {
      await csrf();
      const response = await axiosApi.post(
        `${endpoint}/documento_seguimiento_actividad/${seguimientoId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
      window.location.reload();
    } catch (error) {
      console.log("Error al subir archivos", error);
    }
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Archivos de verificacion</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Subir Archivos</Form.Label>
            <Form.Control type="file" multiple onChange={handleFileChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default ArchivosSeguimiento;
