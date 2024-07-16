import React from "react";
import { Table } from "react-bootstrap";
import "../styles.css";
import Title from "@/components/Title/Title";

const OperacionContainer = ({ operacion }) => {
  const metaPeriodo = (periodo) => {
    const meta = operacion.metas?.find((meta) => meta.periodo === periodo);
    return meta?.meta;
  };
  const getMeta = operacion.metas?.reduce((sum, meta) => {
    return sum + meta?.meta;
  }, 0);
  return (
    <div className="table-container">
      <div className="text-center">
        <Title title="Operacion" />
      </div>
      <Table bordered responsive>
        <thead>
          <tr>
            <th className="numbers rojo">Nro</th>
            <th className="rojo">Específico</th>
            <th className="salmon">Operación</th>
            <th className="rojo">Producto (maximo 190 caracteres)</th>
            <th className="rojo">Ind. (maximo 190 caracteres)</th>
            <th className="numbers rojo">Lbase 2023</th>
            <th className="numbers rojo">Meta 2024</th>
            <th className="numbers rojo">1°</th>
            <th className="numbers rojo">2°</th>
            <th className="numbers rojo">3°</th>
            <th className="numbers rojo">4°</th>
            <th className="rojo">Medio Verif.</th>
            <th className="numbers rojo">Fecha Inicio</th>
            <th className="numbers rojo">Fecha Fin</th>
            <th className="numbers rojo">CatProg</th>
            <th className="numbers rojo">Monto gestion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="numbers ">{operacion.numeroOperacion}</td>
            <td className="">{operacion.objetivo_especifico?.objetivo}</td>
            <td className="">{operacion.operacion}</td>
            <td className="">{operacion.producto}</td>
            <td className="">{operacion.indicador}</td>
            <td className="numbers ">{operacion.lineaBase}</td>
            <td className="numbers ">{getMeta}</td>
            <td className="numbers ">{metaPeriodo("1")}</td>
            <td className="numbers ">{metaPeriodo("2")}</td>
            <td className="numbers ">{metaPeriodo("3")}</td>
            <td className="numbers ">{metaPeriodo("4")}</td>
            <td className="">{operacion.medioVerificacion}</td>
            <td className="numbers ">{operacion.inicio}</td>
            <td className="numbers ">{operacion.fin}</td>
            <td className="numbers ">{operacion.categoriaProgramatica}</td>
            <td className="numbers ">{operacion.monto}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default OperacionContainer;
