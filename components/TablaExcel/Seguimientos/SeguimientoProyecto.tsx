import axiosApi from "@/Api/AxiosApi";
import UserContext from "@/components/data/Context/UserContext";
import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import TextCeld from "../TextCeld";
import ActividadesComponentes from "../ActividadesComponentes";
import "../styles.css";
import SeguimientoButton from "./SeguimientoButton";
import SeguimientoActividad from "./SeguimientoActividad";
import SeguimientoGestion from "@/components/Modal/SeguimientoGestion";
import ArchivosSeguimientoGestion from "@/components/Modal/ArchivosSeguimientoGestion";
import PdfPreview from "@/components/PdfPreview/PdfPreview";

const SeguimientoProyecto = ({ periodo }) => {
  const { user, getUser } = useContext(UserContext);
  const [proyectos, setProyectos] = useState([]);
  const [gestion, setGestion] = useState([]);
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

  useEffect(() => {
    getProyectos();
  }, []);

  const [showModalSegGestion, setShowModalSegGestion] = useState(false);
  const handleShowModalSegGestion = () => setShowModalSegGestion(true);
  const handleCloseModalSegGestion = () => setShowModalSegGestion(false);

  const [showModalDocSegGestion, setShowModalDocSegGestion] = useState(false);
  const handleShowModalDocSegGestion = () => setShowModalDocSegGestion(true);
  const handleCloseModalDocSegGestion = () => setShowModalDocSegGestion(false);

  const getProyectos = async () => {
    const user = await getUser();
    try {
      const response = await axiosApi.get(
        `/sispoas_inv/${user?.investigador.id}/${new Date().getFullYear()}`
      );
      setProyectos(response.data);
      setGestion(response.data[0].proyectos[0]);
    } catch (err) {
      console.log(err);
    }
  };
  const getSeguimientoPeriodo = (periodo) => {
    return gestion?.seguimientos?.find(
      (seguimiento) => seguimiento.periodo === periodo
    );
  };
  return (
    <div className="table-container">
      <div className="text-center py-2">
        <Button
          variant="outline-primary"
          onClick={handleShowModalSegGestion}
          disabled={getSeguimientoPeriodo(periodo)}
        >
          {getSeguimientoPeriodo(periodo)
            ? "Ya existe un seguimiento para este periodo"
            : "Realizar Seguimiento"}
        </Button>
        <Button
          variant="outline-primary"
          onClick={handleShowModalDocSegGestion}
          hidden={!getSeguimientoPeriodo(periodo)}
        >
          Adjuntar archivos al seguimiento
        </Button>
      </div>
      <Table bordered responsive>
        <thead>
          <tr>
            <th colSpan={24} className="text-center rojo">
              Programado Poa 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.primer}
            >
              Primer seguimiento POA 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.segundo}
            >
              Segundo seguimiento POA 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.tercer}
            >
              Tercer seguimiento POA 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.cuarto}
            >
              Cuarto seguimiento POA 2024
            </th>
            <th colSpan={14} className="text-center rojo">
              Programado Poa 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.primer}
            >
              1ER SEGUIMIENTO ACTIVIDADES PROYECTOS GESTION 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.segundo}
            >
              2DO SEGUIMIENTO ACTIVIDADES PROYECTOS GESTION 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.tercer}
            >
              3ER SEGUIMIENTO ACTIVIDADES PROYECTOS GESTION 2024
            </th>
            <th
              colSpan={5}
              className="text-center amarillo"
              hidden={seguimiento.cuarto}
            >
              4TO SEGUIMIENTO ACTIVIDADES PROYECTOS GESTION 2024
            </th>
          </tr>
          <tr>
            <th className="sticky-column rojo">
              Título Proyecto (maximo 190 caracteres)
            </th>
            <th className="rojo">Responsable proyecto</th>
            <th className="numbers rojo">Presupuesto total</th>
            <th className="numbers rojo">fecha inicio proyecto</th>
            <th className="numbers rojo">Fecha fin proyecto</th>
            <th className="rojo">Objetivo general (maximo 190 caracteres)</th>
            <th className="rojo">Finalidad (maximo 190 caracteres)</th>
            <th className="rojo">Justificacion (maximo 190 caracteres)</th>
            <th className="rojo">Beneficiarios (maximo 190 caracteres)</th>
            <th className="rojo">
              Resultados principales (maximo 190 caracteres)
            </th>
            <th className="rojo">
              Tipo de proyecto (Investigacion, interaccion, produccion)
            </th>
            <th className="naranja">Producto (maximo 190 caracteres)</th>
            <th className="naranja">Ind. (maximo 190 caracteres)</th>
            <th className="numbers naranja">Lbase</th>
            <th className="numbers naranja">Meta</th>
            <th className="numbers naranja">1°</th>
            <th className="numbers naranja">2°</th>
            <th className="naranja">Medio Verif. (maximo 190 caracteres)</th>
            <th className="numbers naranja">Fecha Inicio gestion</th>
            <th className="numbers naranja">Fecha Fin gestion</th>
            <th className="numbers naranja">CatProg</th>
            <th className="numbers naranja">Sisin</th>
            <th className="numbers naranja">Dicyt</th>
            <th className="numbers naranja">Monto gestion</th>
            <th className="amarillo numbers" hidden={seguimiento.primer}>
              Estado de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.primer}>
              % de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.primer}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.primer}>
              Observaciones
            </th>
            <th className="amarillo numbers" hidden={seguimiento.primer}>
              Necesita modificacion?
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              Estado de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              % de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.segundo}>
              Observaciones
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              Necesita modificacion?
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              Estado de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              % de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.tercer}>
              Observaciones
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              Necesita modificacion?
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              Estado de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              % de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.cuarto}>
              Observaciones
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              Necesita modificacion?
            </th>
            <th className="numbers rojo">Nro. Componente</th>
            <th className="rojo">
              Componente del proyecto (Objetivos específicos) (maximo 190
              caracteres)
            </th>
            <th className="rojo">Responsable</th>
            <th className="numbers rojo">Peso</th>
            <th className="numbers verde">Nro actividad</th>
            <th className="verde">
              Actividades del componente (maximo 190 caracteres)
            </th>
            <th className="verde">Responsable</th>
            <th className="numbers verde">Meta</th>
            <th className="verde">Indicador</th>
            <th className="verde">
              Fuente de verificacion (maximo 190 caracteres)
            </th>
            <th className="numbers verde">fecha inicio</th>
            <th className="numbers verde">fecha finalizacion</th>
            <th className="numbers verde">Peso</th>
            <th className="numbers verde">Realizar seguimiento</th>
            <th className="amarillo numbers" hidden={seguimiento.primer}>
              Estado de avance
            </th>
            <th className="amarillo  numbers" hidden={seguimiento.primer}>
              % de avance
            </th>
            <th className="amarillo  numbers" hidden={seguimiento.primer}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.primer}>
              Observaciones
            </th>
            <th className="amarillo  numbers" hidden={seguimiento.primer}>
              Necesita modificacion?
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              Estado de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              % de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.segundo}>
              Observaciones
            </th>
            <th className="amarillo numbers" hidden={seguimiento.segundo}>
              Necesita modificacion?
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              Estado de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              % de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.tercer}>
              Observaciones
            </th>
            <th className="amarillo numbers" hidden={seguimiento.tercer}>
              Necesita modificacion?
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              Estado de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              % de avance
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              Meta
            </th>
            <th className="amarillo" hidden={seguimiento.cuarto}>
              Observaciones
            </th>
            <th className="amarillo numbers" hidden={seguimiento.cuarto}>
              Necesita modificacion?
            </th>
          </tr>
        </thead>
        <tbody>
          {proyectos?.map((proyecto, index) => (
            <tr key={index}>
              <td className="sticky-column">{proyecto.tituloProyecto}</td>
              <td>
                {proyecto.investigador.nombres}{" "}
                {proyecto.investigador.apellidos}
              </td>
              <td className="numbers">{proyecto.presupuestoTotal}</td>
              <td className="numbers">{proyecto.inicio}</td>
              <td className="numbers">{proyecto.fin}</td>
              <td>{proyecto.objetivoGeneral}</td>
              <td>{proyecto.finalidad}</td>
              <td>{proyecto.justificacion}</td>
              <td>{proyecto.beneficiarios}</td>
              <td>{proyecto.resultadosPrincipales}</td>
              <td>{proyecto.tipo.nombre}</td>
              <td>{gestion?.producto}</td>
              <td>{gestion.indicador}</td>
              <td className="numbers">{gestion.lineaBase}</td>
              <td className="numbers">{gestion.metaTotal}</td>
              <td className="numbers"></td>
              <td className="numbers"></td>
              <td>{gestion.medioVerificacion}</td>
              <td className="numbers">{gestion.inicioGestion}</td>
              <td className="numbers">{gestion.finGestion}</td>
              <td className="numbers">{gestion.categoriaProgramatica}</td>
              <td className="numbers">{gestion.sisin}</td>
              <td className="numbers">{gestion.dicyt}</td>
              <td className="numbers">{gestion.montoGestion}</td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {getSeguimientoPeriodo(1)?.estado}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {getSeguimientoPeriodo(1)?.porcentajeAvance}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {getSeguimientoPeriodo(1)?.meta}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                <>
                  {getSeguimientoPeriodo(1)?.observacion}
                  <hr />
                  <strong>Documentos de verificacion:</strong>
                  <br />
                  {getSeguimientoPeriodo(1)?.documentos?.map((documento) => (
                    <PdfPreview
                      key={index}
                      nombre={documento.nombre}
                      ruta="seguimiento_gestion_file"
                    />
                  ))}
                </>
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {getSeguimientoPeriodo(1)?.modificar === 0
                  ? "No"
                  : getSeguimientoPeriodo(1)?.modificar === 1
                  ? "Si"
                  : ""}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {getSeguimientoPeriodo(2)?.estado}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {getSeguimientoPeriodo(2)?.porcentajeAvance}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {getSeguimientoPeriodo(2)?.meta}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {getSeguimientoPeriodo(2)?.observacion}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {getSeguimientoPeriodo(2)?.modificar === 0
                  ? "No"
                  : getSeguimientoPeriodo(2)?.modificar === 1
                  ? "Si"
                  : ""}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {getSeguimientoPeriodo(3)?.estado}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {getSeguimientoPeriodo(3)?.porcentajeAvance}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {getSeguimientoPeriodo(3)?.meta}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {getSeguimientoPeriodo(3)?.observacion}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {getSeguimientoPeriodo(3)?.modificar === 0
                  ? "No"
                  : getSeguimientoPeriodo(3)?.modificar === 1
                  ? "Si"
                  : ""}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {getSeguimientoPeriodo(4)?.estado}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {getSeguimientoPeriodo(4)?.porcentajeAvance}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {getSeguimientoPeriodo(4)?.meta}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {getSeguimientoPeriodo(4)?.observacion}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {getSeguimientoPeriodo(4)?.modificar === 0
                  ? "No"
                  : getSeguimientoPeriodo(4)?.modificar === 1
                  ? "Si"
                  : ""}
              </td>
              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <TextCeld key={index} content={componente.nroComponente} />
                ))}
              </td>
              <td>
                {gestion.componentes?.map((componente, index) => (
                  <TextCeld
                    key={index}
                    content={componente.componenteProyecto}
                  />
                ))}
              </td>
              <td>
                {gestion.componentes?.map((componente, index) => (
                  <TextCeld
                    key={index}
                    content={`${componente.investigador.nombres} ${componente.investigador.apellidos}`}
                  />
                ))}
              </td>
              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <TextCeld key={index} content={componente.peso} />
                ))}
              </td>

              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"nro"}
                  />
                ))}
              </td>
              <td>
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"actividad"}
                  />
                ))}
              </td>
              <td>
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"inv"}
                  />
                ))}
              </td>
              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"meta"}
                  />
                ))}
              </td>
              <td>
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"indicador"}
                  />
                ))}
              </td>
              <td>
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"fuenteVerificacion"}
                  />
                ))}
              </td>
              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"inicio"}
                  />
                ))}
              </td>
              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"fin"}
                  />
                ))}
              </td>
              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <ActividadesComponentes
                    key={index}
                    actividades={componente.actividades}
                    dato={"peso"}
                  />
                ))}
              </td>
              <td className="numbers">
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoButton
                    key={index}
                    actividades={componente.actividades}
                    periodo={periodo}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"estado"}
                    periodo={1}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"porcentajeAvance"}
                    periodo={1}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"meta"}
                    periodo={1}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"observacion"}
                    periodo={1}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.primer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"modificar"}
                    periodo={1}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"estado"}
                    periodo={2}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"porcentajeAvance"}
                    periodo={2}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"meta"}
                    periodo={2}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"observacion"}
                    periodo={2}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.segundo}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"modificar"}
                    periodo={2}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"estado"}
                    periodo={3}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"porcentajeAvance"}
                    periodo={3}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"meta"}
                    periodo={3}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"observacion"}
                    periodo={3}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.tercer}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"modificar"}
                    periodo={3}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"estado"}
                    periodo={4}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"porcentajeAvance"}
                    periodo={4}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"meta"}
                    periodo={4}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"observacion"}
                    periodo={4}
                  />
                ))}
              </td>
              <td className="seguimiento numbers" hidden={seguimiento.cuarto}>
                {gestion.componentes?.map((componente, index) => (
                  <SeguimientoActividad
                    key={index}
                    actividades={componente.actividades}
                    dato={"modificar"}
                    periodo={4}
                  />
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <SeguimientoGestion
        show={showModalSegGestion}
        handleClose={handleCloseModalSegGestion}
        gestionId={gestion?.id}
        periodo={periodo}
      />
      <ArchivosSeguimientoGestion
        seguimientoId={getSeguimientoPeriodo(periodo)?.id}
        show={showModalDocSegGestion}
        handleClose={handleCloseModalDocSegGestion}
      />
    </div>
  );
};

export default SeguimientoProyecto;
