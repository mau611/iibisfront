import Link from "next/link";
import React, { useState } from "react";
import { Button, Form, ListGroup, Table } from "react-bootstrap";
import { FaFilePdf } from "react-icons/fa";
import SeguimientoModal from "../Modal/SeguimientoModal";
import ArchivosSeguimiento from "../Modal/ArchivosSeguimiento";
import PdfPreview from "../PdfPreview/PdfPreview";

const ActividadTable = ({ actividad, user }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalFiles, setShowModalFiles] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleOpenModalFiles = () => {
    setShowModalFiles(true);
  };
  const handleCloseModal = () => setShowModal(false);
  const handleCloseModalFiles = () => setShowModalFiles(false);
  const isAdmin = user === "admin";
  return (
    <Table>
      <thead>
        <tr>
          <th>Actividad</th>
          <th>Fuente verificacion</th>
          <th>Indicador</th>
          <th>Meta</th>
          <th>Seguimiento</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width={"15%"}>{actividad?.actividad}</td>
          <td width={"15%"}>{actividad?.fuenteVerificacion}</td>
          <td width={"15%"}>{actividad?.indicador}</td>
          <td>{actividad?.meta}</td>
          <td style={{ backgroundColor: "yellow" }}>
            <Form.Group>
              <Form.Label>% de avance</Form.Label>
              <Form.Control
                value={
                  actividad.seguimiento
                    ? actividad.seguimiento?.porcentajeAvance
                    : "Sin seguimiento."
                }
                name="porcentajeAvance"
                disabled
              />
            </Form.Group>

            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Documentos de verificacion</Form.Label>
              <ListGroup>
                <ListGroup.Item>
                  {actividad.seguimiento?.documentos ? (
                    actividad.seguimiento.documentos?.map(
                      (documento, index) => (
                        <div>
                          <PdfPreview
                            key={index}
                            nombre={documento.nombre}
                            ruta="seguimiento_actividad_file"
                          />
                        </div>
                      )
                    )
                  ) : (
                    <>No existen archivos</>
                  )}
                </ListGroup.Item>
              </ListGroup>
            </Form.Group>
            {!isAdmin && !actividad.seguimiento && (
              <Button onClick={() => handleOpenModal()}>
                Realizar seguimiento
              </Button>
            )}
            {!isAdmin && actividad.seguimiento && (
              <Button onClick={() => handleOpenModalFiles()}>
                Subir archivos de verificacion
              </Button>
            )}
          </td>
        </tr>
      </tbody>
      <SeguimientoModal
        handleClose={handleCloseModal}
        show={showModal}
        id={actividad.id}
        tipoSeguimiento="actividad"
      />
      <ArchivosSeguimiento
        handleClose={handleCloseModalFiles}
        show={showModalFiles}
        seguimientoId={actividad.seguimiento?.id}
      />
    </Table>
  );
};

export default ActividadTable;
