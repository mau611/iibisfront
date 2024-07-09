"use client";
import axiosApi from "@/Api/AxiosApi";
import OperacionContainer from "@/components/TablaExcel/Operaciones/OperacionContainer";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";

const page = ({ params }: { params: { oid: number } }) => {
  const [operacion, setOperacion] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    getOperacion();
  }, []);
  const getOperacion = async () => {
    const response = await axiosApi.get(`/operacion/${params.oid}`);
    setOperacion(response.data);
  };
  return (
    <InvLayout>
      <Breadcrumb className="m-3">
        <Breadcrumb.Item href="/investigador">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item href="/investigador/operaciones">
          Operaciones
        </Breadcrumb.Item>
        <Breadcrumb.Item active>Operacion</Breadcrumb.Item>
      </Breadcrumb>
      <OperacionContainer operacion={operacion} />
    </InvLayout>
  );
};

export default page;
