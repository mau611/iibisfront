"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import OperacionHeadInv from "@/components/Operaciones/OperacionInvestigador/OperacionHeadInv";
import UnidadesTableInv from "@/components/Operaciones/OperacionInvestigador/UnidadesTableInv";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { oid: number } }) => {
  const [operacion, setOperacion] = useState([]);
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
  useEffect(() => {
    getOperacion();
  }, []);
  const getOperacion = async () => {
    const response = await axios.get(`${endpoint}/operacion/${params.oid}`);
    setOperacion(response.data);
  };
  return (
    <InvLayout>
      <Title title={`Operacion`} />
      <OperacionHeadInv operacion={operacion} />
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
      <UnidadesTableInv
        docsVerificacion={operacion.documentos_verificacion}
        operacionId={params.oid}
      />
    </InvLayout>
  );
};

export default page;
