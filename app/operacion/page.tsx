"use client";
import OperacionContainer from "@/components/TablaExcel/Operaciones/OperacionContainer";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React from "react";

const page = () => {
  return (
    <InvLayout>
      <OperacionContainer />
    </InvLayout>
  );
};

export default page;
