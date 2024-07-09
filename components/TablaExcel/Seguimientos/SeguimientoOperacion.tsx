import axiosApi from "@/Api/AxiosApi";
import { endpoint } from "@/components/Endpoint/Endpoint";
import UserContext from "@/components/data/Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import TextCeld from "../TextCeld";
import ActividadesComponentes from "../ActividadesComponentes";
import SeguimientoOperacionModal from "@/components/Modal/SeguimientoOperacion";
import "../styles.css";
import SeguimientoButton from "./SeguimientoButton";
import SeguimientoActividad from "./SeguimientoActividad";
import axios from "axios";
import ArchivosSeguimientoUnidad from "@/components/Modal/ArchivosSeguimientoUnidad";
import PdfPreview from "@/components/PdfPreview/PdfPreview";
import axiosInstance from "@/Api/AxiosInstance";

const SeguimientoOperacion = ({ periodo, operacionId }) => {
  const csrf = () => axiosInstance.get("/sanctum/csrf-cookie");
  const { user, getUser } = useContext(UserContext);
  const [showModal, setShowModal] = useState(false);
  const [showModalArchivos, setShowModalArchivos] = useState(false);
  const [operacion, setOperacion] = useState([]);
  const [unidad, setUnidad] = useState("");
  const [unidadId, setUnidadId] = useState("");
  const [docVerificacionId, setDocVerificacionId] = useState("");
  const [seguimiento, setSeguimiento] = useState(() => {
    switch (periodo) {
      case 1:
        return { primer: false, segundo: true, tercer: true, cuarto: true };
      case 2:
        return { primer: false, segundo: false, tercer: true, cuarto: true };
      case 3:
        return { primer: false, segundo: false, tercer: false, cuarto: true };
      default:
        return { primer: false, segundo: false, tercer: false, cuarto: false };
    }
  });
  const unidades = [
    { id: 1, nombre: "Basica" },
    { id: 2, nombre: "S Publica" },
    { id: 3, nombre: "Ent" },
    { id: 4, nombre: "Clinica" },
    { id: 5, nombre: "Cumetrop" },
    { id: 6, nombre: "Iibismed" },
  ];

  useEffect(() => {
    getOperacion();
  }, []);

  const getColSpan = (periodo) => {
    switch (periodo) {
      case 1:
        return 3;
      case 2:
        return 5;
      case 3:
        return 7;
      case 4:
        return 9;
      default:
        return 9;
    }
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
    setUnidad("");
    setUnidadId("");
  };

  const handleOpenModalArchivos = () => {
    setShowModalArchivos(true);
  };
  const handleCloseModalArchivos = () => {
    setShowModalArchivos(false);
    setUnidad("");
    setUnidadId("");
    setDocVerificacionId("");
  };

  const getOperacion = async () => {
    await csrf();
    const response = await axiosApi.get(`${endpoint}/operacion/${operacionId}`);
    setOperacion(response.data);
  };
  const meta = (metas = [], periodo) => {
    const meta = metas?.filter((meta) => meta.periodo === periodo);
    return meta[0]?.meta;
  };
  const metaTotal = (metas = []) => {
    return metas?.reduce((sum, meta) => sum + meta.meta, 0);
  };

  function filtrarDocumentos(documentos, periodo, unidadId) {
    const docs = documentos?.find(
      (doc) => doc.periodo === periodo && doc.unidad_id === unidadId
    );
    return docs;
  }
  function documentoId(documentos, periodo, unidadId) {
    const id = documentos?.find(
      (doc) => doc.periodo === periodo && doc.unidad_id === unidadId
    ).id;
    return id;
  }
  function nombresYDescripcion(periodo, unidadId) {
    const documento = filtrarDocumentos(
      operacion?.documentos_verificacion,
      periodo,
      unidadId
    );
    const descripcion = documento?.descripcion;
    const nombres = documento?.nombres;
    return (
      <div>
        {descripcion ? descripcion + " " : ""} {nombres ? nombres : ""}
        {documento?.archivos_verificacion.length > 0 && (
          <>
            <hr />
            <strong>Archivos de verificacion</strong> <br />
            {documento.archivos_verificacion.map((documento, index) => (
              <PdfPreview
                key={index}
                nombre={documento.nombre}
                ruta="iibis_file"
              />
            ))}
          </>
        )}
      </div>
    );
  }
  return (
    <div className="table-container">
      <Container>
        <Row className="justify-content-md-center">
          {unidades.map((unidad, index) => (
            <Col key={index} md="auto" sm={2} className="mb-1 py-2 text-center">
              <Button
                disabled={filtrarDocumentos(
                  operacion?.documentos_verificacion,
                  periodo,
                  unidad.id
                )}
                variant="outline-primary"
                onClick={() => {
                  setUnidad(unidad.nombre);
                  setUnidadId(unidad.id);
                  handleOpenModal();
                }}
              >
                {unidad.nombre}
              </Button>
              <br />
              <Button
                variant="outline-success"
                size="sm"
                onClick={() => {
                  setUnidad(unidad.nombre);
                  setUnidadId(unidad.id);
                  setDocVerificacionId(
                    documentoId(
                      operacion?.documentos_verificacion,
                      periodo,
                      unidad.id
                    )
                  );
                  handleOpenModalArchivos();
                }}
                hidden={
                  !filtrarDocumentos(
                    operacion?.documentos_verificacion,
                    periodo,
                    unidad.id
                  )
                }
              >
                + archivos
              </Button>
            </Col>
          ))}
        </Row>
      </Container>
      <Table bordered responsive>
        <thead>
          <tr>
            <th colSpan={13} className="text-center rojo">
              Programado 2024
            </th>
            <th colSpan={5} className="text-center verde-claro">
              Logrado
            </th>
            <th className="numbers rojo"></th>
            <th
              colSpan={getColSpan(periodo)}
              className="text-center dark-morado equal-height"
            >
              Basica
            </th>
            <th
              colSpan={getColSpan(periodo)}
              className="text-center celeste equal-height"
            >
              S PUBLICA
            </th>
            <th
              colSpan={getColSpan(periodo)}
              className="text-center dark-amarillo equal-height"
            >
              ENT
            </th>
            <th
              colSpan={getColSpan(periodo)}
              className="text-center ladrillo equal-height"
            >
              CLINICA
            </th>
            <th
              colSpan={getColSpan(periodo)}
              className="text-center bright-verde equal-height"
            >
              CUMETROP
            </th>
            <th
              colSpan={getColSpan(periodo)}
              className="text-center dark-celeste equal-height"
            >
              IBIS
            </th>
            <th
              colSpan={getColSpan(periodo)}
              className="text-center numbers equal-height"
            >
              %
            </th>
          </tr>
          <tr>
            <th className="numbers sticky-column rojo">#</th>
            <th className="sticky-column sticky-column rojo">Operación</th>
            <th className="rojo">Producto</th>
            <th className="numbers rojo">Ind</th>
            <th className="numbers rojo">LB</th>
            <th className="numbers rojo">Meta</th>
            <th className="numbers rojo">1°</th>
            <th className="numbers rojo">2°</th>
            <th className="numbers rojo">3°</th>
            <th className="numbers rojo">4°</th>
            <th className="rojo">Medio Verif</th>
            <th className="numbers rojo">Monto</th>
            <th className="rojo">Resp</th>
            <th className="numbers verde-claro">Meta</th>
            <th className="numbers verde-claro">1°</th>
            <th className="numbers verde-claro">2°</th>
            <th className="numbers verde-claro">3°</th>
            <th className="numbers verde-claro">4°</th>
            <th className="numbers rojo">#</th>
            <th className="numbers light-morado">Meta</th>
            <th className="numbers light-morado" hidden={seguimiento.primer}>
              1°
            </th>
            <th className="unidad light-morado" hidden={seguimiento.primer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers light-morado" hidden={seguimiento.segundo}>
              2°
            </th>
            <th className="unidad light-morado" hidden={seguimiento.segundo}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers light-morado" hidden={seguimiento.tercer}>
              3°
            </th>
            <th className="unidad light-morado" hidden={seguimiento.tercer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers light-morado" hidden={seguimiento.cuarto}>
              4°
            </th>
            <th className="unidad light-morado" hidden={seguimiento.cuarto}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>

            <th className="numbers celeste">Meta</th>
            <th className="numbers celeste" hidden={seguimiento.primer}>
              1°
            </th>
            <th className="unidad celeste" hidden={seguimiento.primer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers celeste" hidden={seguimiento.segundo}>
              2°
            </th>
            <th className="unidad celeste" hidden={seguimiento.segundo}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers celeste" hidden={seguimiento.tercer}>
              3°
            </th>
            <th className="unidad celeste" hidden={seguimiento.tercer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers celeste" hidden={seguimiento.cuarto}>
              4°
            </th>
            <th className="unidad celeste" hidden={seguimiento.cuarto}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>

            <th className="numbers dark-amarillo">Meta</th>
            <th className="numbers dark-amarillo" hidden={seguimiento.primer}>
              1°
            </th>
            <th className="unidad dark-amarillo" hidden={seguimiento.primer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers dark-amarillo" hidden={seguimiento.segundo}>
              2°
            </th>
            <th className="unidad dark-amarillo" hidden={seguimiento.segundo}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers dark-amarillo" hidden={seguimiento.tercer}>
              3°
            </th>
            <th className="unidad dark-amarillo" hidden={seguimiento.tercer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers dark-amarillo" hidden={seguimiento.cuarto}>
              4°
            </th>
            <th className="unidad dark-amarillo" hidden={seguimiento.cuarto}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>

            <th className="numbers ladrillo">Meta</th>
            <th className="numbers ladrillo" hidden={seguimiento.primer}>
              1°
            </th>
            <th className="unidad ladrillo" hidden={seguimiento.primer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers ladrillo" hidden={seguimiento.segundo}>
              2°
            </th>
            <th className="unidad ladrillo" hidden={seguimiento.segundo}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers ladrillo" hidden={seguimiento.tercer}>
              3°
            </th>
            <th className="unidad ladrillo" hidden={seguimiento.tercer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers ladrillo" hidden={seguimiento.cuarto}>
              4°
            </th>
            <th className="unidad ladrillo" hidden={seguimiento.cuarto}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>

            <th className="numbers bright-verde">Meta</th>
            <th className="numbers bright-verde" hidden={seguimiento.primer}>
              1°
            </th>
            <th className="unidad bright-verde" hidden={seguimiento.primer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers bright-verde" hidden={seguimiento.segundo}>
              2°
            </th>
            <th className="unidad bright-verde" hidden={seguimiento.segundo}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers bright-verde" hidden={seguimiento.tercer}>
              3°
            </th>
            <th className="unidad bright-verde" hidden={seguimiento.tercer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers bright-verde" hidden={seguimiento.cuarto}>
              4°
            </th>
            <th className="unidad bright-verde" hidden={seguimiento.cuarto}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers dark-celeste">Meta</th>
            <th className="numbers dark-celeste" hidden={seguimiento.primer}>
              1°
            </th>
            <th className="unidad dark-celeste" hidden={seguimiento.primer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers dark-celeste" hidden={seguimiento.segundo}>
              2°
            </th>
            <th className="unidad dark-celeste" hidden={seguimiento.segundo}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers dark-celeste" hidden={seguimiento.tercer}>
              3°
            </th>
            <th className="unidad dark-celeste" hidden={seguimiento.tercer}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers dark-celeste" hidden={seguimiento.cuarto}>
              4°
            </th>
            <th className="unidad dark-celeste" hidden={seguimiento.cuarto}>
              Documentos de verificacion (Especificar nombres, titulo, fechas
              según corresponda)
            </th>
            <th className="numbers">Final</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="numbers sticky-column ">
              {operacion.numeroOperacion}
            </td>
            <td className="sticky-column ">{operacion.operacion}</td>
            <td className="">{operacion.producto}</td>
            <td className="">{operacion.indicador}</td>
            <td className="numbers">{operacion.lineaBase}</td>
            <td className="numbers rojo">{metaTotal(operacion.metas)}</td>
            <td className="numbers rojo">{meta(operacion.metas, "1")}</td>
            <td className="numbers rojo">{meta(operacion.metas, "2")}</td>
            <td className="numbers rojo">{meta(operacion.metas, "3")}</td>
            <td className="numbers rojo">{meta(operacion.metas, "4")}</td>
            <td className="">{operacion.medioVerificacion}</td>
            <td className="numbers ">{operacion.monto}</td>
            <td className="">
              {operacion.investigador?.nombres}{" "}
              {operacion.investigador?.apellidos}
            </td>
            <td className="numbers verde-claro">Meta</td>
            <td className="numbers verde-claro"></td>
            <td className="numbers verde-claro"></td>
            <td className="numbers verde-claro"></td>
            <td className="numbers verde-claro"></td>
            <td className="numbers rojo">#</td>
            {/*  */}
            <td className="numbers"></td>
            <td className="numbers" hidden={seguimiento.primer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 1, 1)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.primer}>
              {nombresYDescripcion(1, 1)}
            </td>
            <td className="numbers" hidden={seguimiento.segundo}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 2, 1)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.segundo}>
              {nombresYDescripcion(2, 1)}
            </td>
            <td className="numbers" hidden={seguimiento.tercer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 3, 1)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.tercer}>
              {nombresYDescripcion(3, 1)}
            </td>
            <td className="numbers" hidden={seguimiento.cuarto}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 4, 1)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.cuarto}>
              {nombresYDescripcion(4, 1)}
            </td>

            <td className="numbers"></td>
            <td className="numbers" hidden={seguimiento.primer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 1, 2)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.primer}>
              {nombresYDescripcion(1, 2)}
            </td>
            <td className="numbers" hidden={seguimiento.segundo}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 2, 2)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.segundo}>
              {nombresYDescripcion(2, 2)}
            </td>
            <td className="numbers" hidden={seguimiento.tercer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 3, 2)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.tercer}>
              {nombresYDescripcion(3, 2)}
            </td>
            <td className="numbers" hidden={seguimiento.cuarto}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 4, 2)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.cuarto}>
              {nombresYDescripcion(4, 2)}
            </td>

            <td className="numbers"></td>
            <td className="numbers" hidden={seguimiento.primer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 1, 3)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.primer}>
              {nombresYDescripcion(1, 3)}
            </td>
            <td className="numbers" hidden={seguimiento.segundo}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 2, 3)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.segundo}>
              {nombresYDescripcion(2, 3)}
            </td>
            <td className="numbers" hidden={seguimiento.tercer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 3, 3)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.tercer}>
              {nombresYDescripcion(3, 3)}
            </td>
            <td className="numbers" hidden={seguimiento.cuarto}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 4, 3)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.cuarto}>
              {nombresYDescripcion(4, 3)}
            </td>

            <td className="numbers"></td>
            <td className="numbers" hidden={seguimiento.primer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 1, 4)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.primer}>
              {nombresYDescripcion(1, 4)}
            </td>
            <td className="numbers" hidden={seguimiento.segundo}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 2, 4)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.segundo}>
              {nombresYDescripcion(2, 4)}
            </td>
            <td className="numbers" hidden={seguimiento.tercer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 3, 4)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.tercer}>
              {nombresYDescripcion(3, 4)}
            </td>
            <td className="numbers" hidden={seguimiento.cuarto}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 4, 4)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.cuarto}>
              {nombresYDescripcion(4, 4)}
            </td>

            <td className="numbers"></td>
            <td className="numbers" hidden={seguimiento.primer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 1, 5)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.primer}>
              {nombresYDescripcion(1, 5)}
            </td>
            <td className="numbers" hidden={seguimiento.segundo}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 2, 5)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.segundo}>
              {nombresYDescripcion(2, 5)}
            </td>
            <td className="numbers" hidden={seguimiento.tercer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 3, 5)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.tercer}>
              {nombresYDescripcion(3, 5)}
            </td>
            <td className="numbers" hidden={seguimiento.cuarto}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 4, 5)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.cuarto}>
              {nombresYDescripcion(4, 5)}
            </td>

            <td className="numbers"></td>
            <td className="numbers" hidden={seguimiento.primer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 1, 6)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.primer}>
              {nombresYDescripcion(1, 6)}
            </td>
            <td className="numbers" hidden={seguimiento.segundo}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 2, 6)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.segundo}>
              {nombresYDescripcion(2, 6)}
            </td>
            <td className="numbers" hidden={seguimiento.tercer}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 3, 6)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.tercer}>
              {nombresYDescripcion(3, 6)}
            </td>
            <td className="numbers" hidden={seguimiento.cuarto}>
              {
                filtrarDocumentos(operacion?.documentos_verificacion, 4, 6)
                  ?.meta?.meta
              }
            </td>
            <td className="unidad" hidden={seguimiento.cuarto}>
              {nombresYDescripcion(4, 6)}
            </td>

            <td className="numbers"></td>
          </tr>
        </tbody>
      </Table>
      <SeguimientoOperacionModal
        show={showModal}
        unidad={unidadId}
        handleClose={handleCloseModal}
        periodo={periodo}
        operacion={operacion.id}
      />
      <ArchivosSeguimientoUnidad
        show={showModalArchivos}
        handleClose={handleCloseModalArchivos}
        docVerificacionId={docVerificacionId}
      />
    </div>
  );
};

export default SeguimientoOperacion;
