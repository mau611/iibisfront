"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import Gestion from "@/components/Proyectos/Gestion";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AdminComponente from "./AdminComponente";

const page = ({ params }: { params: { pid: number } }) => {
  const [gestion, setGestion] = useState([]);
  const [componenteId, setComponenteId] = useState(0);
  useEffect(() => {
    getGestion();
  }, []);
  const getGestion = async () => {
    try {
      const response = await axios.get(
        `${endpoint}/proyecto_iibismed/${params.pid}`
      );
      setGestion(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AdminLayout>
      <Title title="Proyecto" />
      <Gestion
        gestionIibismed={gestion}
        usuario={"admin"}
        setComponenteId={setComponenteId}
      />
      {componenteId > 0 && <AdminComponente componenteId={componenteId} />}
    </AdminLayout>
  );
};

export default page;
