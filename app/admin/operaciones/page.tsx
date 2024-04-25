"use client";
import TableOperaciones from "@/components/Operaciones/TableOperaciones";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { endpoint } from "@/components/Endpoint/Endpoint";
import YearSelect from "@/components/YearSelect/YearSelect";
import Paginacion from "@/components/Paginacion/Paginacion";

const Operaciones = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [year, setYear] = useState("Todos");
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getOperaciones();
  }, [year]);
  const getOperaciones = async () => {
    const response = await axios.get(`${endpoint}/operaciones/${year}`);
    setOperaciones(response.data.data);
    setLinks(response.data.links);
  };
  return (
    <AdminLayout>
      <Title title="Operaciones" />
      <YearSelect value={year} onChange={setYear} />
      <TableOperaciones operaciones={operaciones} />
      <Paginacion links={links} />
    </AdminLayout>
  );
};

export default Operaciones;
