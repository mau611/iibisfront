"use client";
import SeguimientoOperacion from "@/components/TablaExcel/Seguimientos/SeguimientoOperacion";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React from "react";

const page = () => {
  return (
    <InvLayout>
      <SeguimientoOperacion periodo={3} />
    </InvLayout>
  );
};

export default page;
