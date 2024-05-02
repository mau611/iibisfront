import PdfPreview from "@/components/PdfPreview/PdfPreview";
import React from "react";
import { Table } from "react-bootstrap";

const UnidadTable = ({ documentos }) => {
  console.log(documentos[0]?.archivos_verificacion);
  const metaUnidad = () => {
    let meta = 0;
    documentos.map((doc) => {
      meta = doc.metas[0].meta + meta;
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
            <td>{documentos[0]?.metas[0].meta}</td>
            <td>
              {documentos[0]?.descripcion} <br /> {documentos[0]?.nombres}
            </td>
            <td>{documentos[1]?.metas[0].meta}</td>
            <td>
              {documentos[1]?.descripcion} <br /> {documentos[1]?.nombres}
            </td>
            <td>{documentos[2]?.metas[0].meta}</td>
            <td>
              {documentos[2]?.descripcion} <br /> {documentos[2]?.nombres}
            </td>
            <td>{documentos[3]?.metas[0].meta}</td>
            <td>
              {documentos[3]?.descripcion} <br /> {documentos[3]?.nombres}
            </td>
          </tr>
          <tr>
            <td></td>
            <td colSpan={2}>
              {documentos[0]?.archivos_verificacion.map((archivo, index) => (
                <PdfPreview key={index} nombre={archivo.nombre} />
              ))}
            </td>
            <td colSpan={2}>
              {documentos[1]?.archivos_verificacion.map((archivo, index) => (
                <PdfPreview key={index} nombre={archivo.nombre} />
              ))}
            </td>
            <td colSpan={2}>
              {documentos[2]?.archivos_verificacion.map((archivo, index) => (
                <PdfPreview key={index} nombre={archivo.nombre} />
              ))}
            </td>
            <td colSpan={2}>
              {documentos[3]?.archivos_verificacion.map((archivo, index) => (
                <PdfPreview key={index} nombre={archivo.nombre} />
              ))}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default UnidadTable;
