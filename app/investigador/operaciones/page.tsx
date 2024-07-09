"use client";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React from "react";
import OperacionesContainer from "./OperacionesContainer";
import { Breadcrumb } from "react-bootstrap";

const page = () => {
  return (
    <InvLayout>
      <Breadcrumb className="m-3">
        <Breadcrumb.Item href="/investigador">Inicio</Breadcrumb.Item>
        <Breadcrumb.Item active>Operaciones</Breadcrumb.Item>
      </Breadcrumb>
      <OperacionesContainer />
    </InvLayout>
  );
};

export default page;
