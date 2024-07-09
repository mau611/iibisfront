"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import TableOperaciones from "@/components/Operaciones/TableOperaciones";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
