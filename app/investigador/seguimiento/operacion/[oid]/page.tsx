"use client";
import axiosApi from "@/Api/AxiosApi";
import SeguimientoOperacion from "@/components/TablaExcel/Seguimientos/SeguimientoOperacion";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";

const page = ({ params }: { params: { oid: number } }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [periodo, setPeriodo] = useState(0);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getPeriodo();
  }, []);
  const getPeriodo = async () => {
    try {
      const response = await axiosApi.get(
        `periodo/${new Date().getFullYear()}`
      );
      setPeriodo(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <InvLayout>
        <Breadcrumb className="m-3">
          <Breadcrumb.Item href="/investigador">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/investigador/operaciones">
            Operaciones
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Seguimiento de operacion</Breadcrumb.Item>
        </Breadcrumb>
        <SeguimientoOperacion
          periodo={parseInt(periodo)}
          operacionId={params.oid}
        />
      </InvLayout>
    </div>
  );
};

export default page;
