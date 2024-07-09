import ArchivosSeguimientoActividad from "@/components/Modal/ArchivosSeguimientoActividad";
import SeguimientoActividad from "@/components/Modal/SeguimientoActividad";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SeguimientoButton = ({ actividades, periodo }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalArchivos, setShowModalArchivos] = useState(false);
  const [selectedActividadId, setSelectedActividadId] = useState(null);

  const handleShow = (id) => {
    setSelectedActividadId(id);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelectedActividadId(null);
  };

  const handleShowArchivos = (id) => {
    setSelectedActividadId(id);
    setShowModalArchivos(true);
  };

  const handleCloseArchivos = () => {
    setShowModalArchivos(false);
    setSelectedActividadId(null);
  };

  const hasSeguimiento = (seguimientos, periodo) => {
    const seguimiento = seguimientos.find(
      (seguimiento) => seguimiento.periodo === periodo
    );
    return seguimiento ? true : false;
  };
  const seguimiento = (seguimientos, periodo) => {
    return seguimientos.find((seguimiento) => seguimiento.periodo === periodo);
  };

  return (
    <div className="celda">
      {actividades?.map((actividad, index) => (
        <div className="actividad" key={index}>
          <Button
            onClick={() => handleShow(actividad.id)}
            disabled={hasSeguimiento(actividad?.seguimientos, periodo)}
          >
            {`${
              hasSeguimiento(actividad?.seguimientos, periodo)
                ? "Ya existe un seguimiento"
                : "Realizar seguimiento"
            }`}
          </Button>
          <Button
            onClick={() => handleShowArchivos(actividad.id)}
            hidden={!hasSeguimiento(actividad?.seguimientos, periodo)}
          >
            Archivos de verificacion
          </Button>
          {showModal && selectedActividadId === actividad.id && (
            <SeguimientoActividad
              show={showModal}
              handleClose={handleClose}
              actividadId={selectedActividadId}
              periodo={periodo}
            />
          )}
          {showModalArchivos && selectedActividadId === actividad.id && (
            <ArchivosSeguimientoActividad
              handleClose={handleCloseArchivos}
              seguimientoId={seguimiento(actividad?.seguimientos, periodo)?.id}
              show={showModalArchivos}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SeguimientoButton;
