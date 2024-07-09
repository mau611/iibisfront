"use client";
import axiosApi from "@/Api/AxiosApi";
import OperacionHead from "@/components/Operaciones/Operacion/OperacionHead";
import UnidadesTable from "@/components/Operaciones/Operacion/UnidadesTable";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useEffect, useState } from "react";

const Operacion = ({ params }: { params: { oid: number } }) => {
  const [operacion, setOperacion] = useState([]);
  useEffect(() => {
    getOperacion();
  }, []);
  const totalPeriodo = (docsVerificacion, periodo) => {
    let total = 0;
    docsVerificacion?.map((doc) => {
      if (doc.metas[0].periodo === String(periodo)) {
        total = total + doc.metas[0].meta;
      }
    });
    return total;
  };
  const totalLogrado = (docsVerificacion) => {
    let total = 0;
    docsVerificacion?.map((doc) => {
      total = total + doc.metas[0].meta;
    });
    return total;
  };
  const getOperacion = async () => {
    const response = await axiosApi.get(`/operacion/${params.oid}`);
    setOperacion(response.data);
  };
  return (
    <AdminLayout>
      <Title
        title={`${
          operacion.length !== 0 ? operacion.operacion : "Cargando......."
        }`}
      />
      <OperacionHead operacion={operacion} />
      <div className="p-3">
        <strong>Meta logrado:</strong>{" "}
        {totalLogrado(operacion.documentos_verificacion)}.
        <strong> Primer: </strong>{" "}
        {totalPeriodo(operacion.documentos_verificacion, 1)} ,
        <strong> Segundo: </strong>{" "}
        {totalPeriodo(operacion.documentos_verificacion, 2)} ,
        <strong> Tercer: </strong>{" "}
        {totalPeriodo(operacion.documentos_verificacion, 3)} ,
        <strong> Cuarto: </strong>{" "}
        {totalPeriodo(operacion.documentos_verificacion, 4)}.
      </div>
      <UnidadesTable docsVerificacion={operacion.documentos_verificacion} />
    </AdminLayout>
  );
};

export default Operacion;
