import React, { useState } from "react";
import { Button, Col, Form, Row, Table } from "react-bootstrap";
import SeguimientoModal from "../Modal/SeguimientoModal";
import ArchivosSeguimientoGestion from "../Modal/ArchivosSeguimientoGestion";
import PdfPreview from "../PdfPreview/PdfPreview";

const Gestion = ({ gestionIibismed, usuario, setComponenteId }) => {
  const isAdmin = usuario === "admin";
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
  return (
    <div className="px-5">
      <Table striped bordered responsive="xl" size="xl">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Indicador</th>
            <th>Metas</th>
            <th>Medio de verificacion</th>
            <th>Datos gestion</th>
            <th style={{ backgroundColor: "yellow" }}>Seguimiento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td width={"15%"}>{gestionIibismed.producto}</td>
            <td width={"15%"}>{gestionIibismed.indicador}</td>
            <td>
              Linea base: {gestionIibismed.lineaBase} <br />
              Meta total: {gestionIibismed.metaTotal}
            </td>
            <td width={"15%"}>{gestionIibismed.medioVerificacion}</td>
            <td>
              Inicio gestion: {gestionIibismed.inicioGestion} <br />
              Fin gestion: {gestionIibismed.finGestion} <br />
              Monto gestion: {gestionIibismed.montoGestion}
            </td>
            <td>
              <div>
                <p>
                  Porcentaje de avance:{" "}
                  {gestionIibismed.seguimiento?.porcentajeAvance}%
                </p>
                {gestionIibismed.seguimiento?.documentos?.map(
                  (documento, index) => (
                    <div>
                      <PdfPreview
                        key={index}
                        nombre={documento.nombre}
                        ruta="seguimiento_gestion_file"
                      />
                    </div>
                  )
                )}
                {!isAdmin && !gestionIibismed.seguimiento && (
                  <Button onClick={() => handleOpenModal()}>
                    Realizar seguimiento
                  </Button>
                )}
                {!isAdmin && gestionIibismed.seguimiento && (
                  <Button onClick={() => handleOpenModalFiles()}>
                    Subir archivos de verificacion
                  </Button>
                )}
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={6}>
              <Row>
                {gestionIibismed.componentes?.map((componente, index) => (
                  <Col className="text-center py-2" sm="2">
                    <Button
                      variant="outline-primary"
                      onClick={() => setComponenteId(componente.id)}
                    >
                      Componente {index + 1}
                    </Button>
                  </Col>
                ))}
              </Row>
            </td>
          </tr>
        </tbody>
      </Table>
      <SeguimientoModal
        handleClose={handleCloseModal}
        show={showModal}
        id={gestionIibismed.id}
        tipoSeguimiento="gestion"
      />
      <ArchivosSeguimientoGestion
        handleClose={handleCloseModalFiles}
        show={showModalFiles}
        gestionId={gestionIibismed.id}
      />
    </div>
  );
};

export default Gestion;
