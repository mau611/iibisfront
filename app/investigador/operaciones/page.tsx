"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import TableOperaciones from "@/components/Operaciones/TableOperaciones";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [operaciones, setOperaciones] = useState([]);
  useEffect(() => {
    getOperaciones();
  }, []);
  const getOperaciones = async () => {
    const response = await axios.get(
      `${endpoint}/operaciones_investigador/${13}`
    );
    setOperaciones(response.data);
  };
  return (
    <InvLayout>
      <Title title="Operaciones" />
      <TableOperaciones operaciones={operaciones} />
    </InvLayout>
  );
};

export default page;
