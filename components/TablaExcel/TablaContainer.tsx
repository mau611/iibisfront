import React, { useContext, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import "./styles.css";
import TextCeld from "./TextCeld";
import UserContext from "../data/Context/UserContext";
import axiosApi from "@/Api/AxiosApi";
import ActividadesComponentes from "./ActividadesComponentes";
import ComponenteModal from "../Modal/ComponenteModal";

const TablaContainer = () => {
  const { getUser } = useContext(UserContext);
  const [proyectos, setProyectos] = useState([]);
  const [gestion, setGestion] = useState([]);
  const [showModalComponent, setShowModalComponent] = useState(false);

  useEffect(() => {
    getProyectos();
  }, []);

  const handleOpenModalComponent = () => {
    setShowModalComponent(true);
  };
  const handleCloseModalComponent = () => setShowModalComponent(false);

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
  return (
    <div className="table-container">
      <div className="text-center py-3">
        <Button onClick={() => handleOpenModalComponent()}>
          Agregar componente
        </Button>
      </div>
      <Table bordered responsive>
        <thead>
          <tr>
            <th className="sticky-column rojo">
              Título Proyecto (maximo 190 caracteres)
            </th>
            <th className="rojo">Responsable proyecto</th>
            <th className="numbers salmon">Presupuesto total</th>
            <th className="numbers salmon">fecha inicio proyecto</th>
            <th className="numbers salmon">Fecha fin proyecto</th>
            <th className="salmon">Objetivo general (maximo 190 caracteres)</th>
            <th className="salmon">Finalidad (maximo 190 caracteres)</th>
            <th className="salmon">Justificacion (maximo 190 caracteres)</th>
            <th className="salmon">Beneficiarios (maximo 190 caracteres)</th>
            <th className="salmon">
              Resultados principales (maximo 190 caracteres)
            </th>
            <th className="salmon">
              Tipo de proyecto (Investigacion, interaccion, produccion)
            </th>
            <th className="rojo">Producto (maximo 190 caracteres)</th>
            <th className="rojo">Ind. (maximo 190 caracteres)</th>
            <th className="numbers rojo">Lbase</th>
            <th className="numbers rojo">Meta</th>
            <th className="numbers rojo">1°</th>
            <th className="numbers rojo">2°</th>
            <th className="rojo">Medio Verif. (maximo 190 caracteres)</th>
            <th className="numbers rojo">Fecha Inicio gestion</th>
            <th className="numbers rojo">Fecha Fin gestion</th>
            <th className="numbers rojo">CatProg</th>
            <th className="numbers rojo">Sisin</th>
            <th className="numbers rojo">Dicyt</th>
            <th className="numbers rojo">Monto gestion</th>
            <th className="numbers amarillo">Nro. Componente</th>
            <th className="amarillo">
              Componente del proyecto (Objetivos específicos) (maximo 190
              caracteres)
            </th>
            <th className="amarillo">Responsable</th>
            <th className="numbers amarillo">Peso</th>
            <th className="numbers amarillo">Agregar actividad</th>
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
                  <TextCeld key={index} content={""}>
                    <Button onClick={() => handleOpenModalComponent()}>
                      Agregar Actividad
                    </Button>
                  </TextCeld>
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
            </tr>
          ))}
        </tbody>
      </Table>
      <ComponenteModal
        handleClose={handleCloseModalComponent}
        show={showModalComponent}
      />
    </div>
  );
};

export default TablaContainer;
