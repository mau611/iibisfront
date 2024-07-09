"use client";
import SeguimientoProyecto from "@/components/TablaExcel/Seguimientos/SeguimientoProyecto";
import TablaContainer from "@/components/TablaExcel/TablaContainer";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React from "react";

const page = () => {
  return (
    <InvLayout>
      <SeguimientoProyecto periodo={2} />
    </InvLayout>
  );
};

export default page;
