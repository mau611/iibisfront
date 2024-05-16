"use client";
import TableOperaciones from "@/components/Operaciones/TableOperaciones";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { endpoint } from "@/components/Endpoint/Endpoint";
import YearSelect from "@/components/YearSelect/YearSelect";
import Cookies from "js-cookie";

const Operaciones = () => {
  const [operaciones, setOperaciones] = useState([]);
  const [year, setYear] = useState("Todos");
  useEffect(() => {
    const yearCookie = Cookies.get("ops-year");
    setYear(yearCookie ? yearCookie : "Todos");
    getOperaciones();
  }, [year]);
  const getOperaciones = async () => {
    const response = await axios.get(`${endpoint}/operaciones/${year}`);
    setOperaciones(response.data);
  };
  return (
    <AdminLayout>
      <Title title="Operaciones" />
      <YearSelect value={year} onChange={setYear} component={"ops"} />
      <TableOperaciones operaciones={operaciones} />
    </AdminLayout>
  );
};

export default Operaciones;
