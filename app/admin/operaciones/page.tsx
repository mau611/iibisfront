"use client";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useEffect, useState } from "react";
import YearSelect from "@/components/YearSelect/YearSelect";
import Cookies from "js-cookie";

const Operaciones = () => {
  const [year, setYear] = useState("Todos");
  useEffect(() => {
    const yearCookie = Cookies.get("ops-year");
    setYear(yearCookie ? yearCookie : "Todos");
  }, [year]);
  return (
    <AdminLayout>
      <Title title="Operaciones" />
      <YearSelect value={year} onChange={setYear} component={"ops"} />
    </AdminLayout>
  );
};

export default Operaciones;
