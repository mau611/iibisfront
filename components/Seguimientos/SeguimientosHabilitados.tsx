import axiosApi from "@/Api/AxiosApi";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const SeguimientosHabilitados = () => {
  const [habilitados, setHabilitados] = useState([]);
  useEffect(() => {
    getHabilitados();
  }, []);
  const getHabilitados = async () => {
    const response = await axiosApi.get(
      `periodos_habilitados/${new Date().getFullYear()}`
    );
    setHabilitados(response.data);
  };
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Periodo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {habilitados?.map((habilitado, index) => (
            <tr key={index}>
              <td>{habilitado.periodo}</td>
              <td>
                {habilitado.habilitado > 0 ? "Habilitado" : "Deshabilitado"}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default SeguimientosHabilitados;
