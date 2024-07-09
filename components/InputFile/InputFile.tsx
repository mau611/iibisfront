import axiosApi from "@/Api/AxiosApi";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const InputFile = ({ docVerificacionId }) => {
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
      const response = await axiosApi.post(
        `/archivos_verificacion/${docVerificacionId}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.log("Error al subir archivos", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Subir Archivos</Form.Label>
        <Form.Control type="file" multiple onChange={handleFileChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
  );
};

export default InputFile;
