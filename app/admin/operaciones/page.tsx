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
  const [lastPage, setLastPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    getOperaciones();
  }, [year, currentPage]);
  const getOperaciones = async () => {
    const response = await axios.get(
      `${endpoint}/operaciones/${year}?page=${currentPage}`
    );
    setOperaciones(response.data.data);
    setLastPage(response.data.last_page);
  };
  const onChangePage = (page) => {
    setCurrentPage(page);
  };
  return (
    <AdminLayout>
      <Title title="Operaciones" />
      <YearSelect
        value={year}
        onChange={setYear}
        setCurrentPage={setCurrentPage}
      />
      <Paginacion
        lastPage={lastPage}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
      <TableOperaciones operaciones={operaciones} />
      <Paginacion
        lastPage={lastPage}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
    </AdminLayout>
  );
};

export default Operaciones;
