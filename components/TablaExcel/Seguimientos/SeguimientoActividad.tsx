import React from "react";
import "../styles.css";
import PdfPreview from "@/components/PdfPreview/PdfPreview";

const SeguimientoActividad = ({ actividades, dato, periodo }) => {
  const seguimiento = (seguimientos, periodo, dato) => {
    const seguimientoEncontrado = seguimientos.find(
      (seguimiento) => seguimiento.periodo === periodo
    );
    return seguimientoEncontrado
      ? seguimientoEncontrado[dato] === 1
        ? "Si"
        : seguimientoEncontrado[dato] === 0
        ? "No"
        : seguimientoEncontrado[dato]
      : undefined;
  };
  const seguimientoArchivos = (seguimientos, periodo) => {
    return seguimientos.find((seguimiento) => seguimiento.periodo === periodo);
  };

  return (
    <div className="celda">
      {actividades?.map((actividad, index) => (
        <div className="actividad" key={index}>
          {seguimiento(actividad?.seguimientos, periodo, dato)}
          {dato === "observacion" && (
            <>
              <hr />
              <strong>Documentos de verificacion:</strong>
              <br />
              {seguimientoArchivos(
                actividad?.seguimientos,
                periodo
              )?.documentos?.map((documento) => (
                <PdfPreview
                  key={index}
                  nombre={documento.nombre}
                  ruta="seguimiento_gestion_file"
                />
              ))}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeguimientoActividad;
