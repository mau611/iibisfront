import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import InputFile from "@/components/InputFile/InputFile";
import DocumentoVerificacionModal from "@/components/Modal/DocumentoVerificacionModal";
import PdfPreview from "@/components/PdfPreview/PdfPreview";

const UnidadTableInv = ({ documentos, operacionId, unidadId }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({
    operacionId: null,
    unidadId: null,
    periodo: null,
  });

  const handleOpenModal = (periodo) => {
    console.log({ operacionId, unidadId, periodo });
    setModalData({ operacionId, unidadId, periodo });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const metaUnidad = () => {
    let meta = 0;
    documentos.forEach((doc) => {
      meta += doc.metas[0].meta;
    });
    return meta;
  };

  return (
    <div style={{ minWidth: "800px" }}>
      <Table bordered>
        <thead>
          <tr>
            <th>Meta</th>
            <th>1</th>
            <th>Doc. Verificacion</th>
            <th>2</th>
            <th>Doc. Verificacion</th>
            <th>3</th>
            <th>Doc. Verificacion</th>
            <th>4</th>
            <th>Doc. Verificacion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{metaUnidad()}</td>
            {[0, 1, 2, 3].map((index) => (
              <>
                <td>{documentos[index]?.metas[0].meta}</td>
                {documentos[index] ? (
                  <td>
                    {documentos[index]?.descripcion} <br />{" "}
                    {documentos[index]?.nombres}
                  </td>
                ) : (
                  <td>
                    <Button
                      variant="primary"
                      onClick={() => handleOpenModal(index + 1)}
                    >
                      Nuevo registro
                    </Button>
                  </td>
                )}
              </>
            ))}
          </tr>
          <tr>
            <td></td>
            {[0, 1, 2, 3].map((index) => (
              <td colSpan={2} key={index}>
                {documentos[index]?.archivos_verificacion.map(
                  (archivo, index) => (
                    <PdfPreview
                      key={index}
                      nombre={archivo.nombre}
                      ruta="iibis_file"
                    />
                  )
                )}
                {documentos[index] ? (
                  <InputFile
                    docVerificacionId={documentos[index].id}
                    key={documentos[index].id}
                  />
                ) : (
                  <></>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
      <DocumentoVerificacionModal
        show={showModal}
        handleClose={handleCloseModal}
        operacionId={modalData.operacionId}
        unidadId={modalData.unidadId}
        periodo={modalData.periodo}
      />
    </div>
  );
};

export default UnidadTableInv;
