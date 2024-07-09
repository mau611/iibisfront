"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import SeguimientoOperacion from "@/components/TablaExcel/Seguimientos/SeguimientoOperacion";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";

const page = ({ params }: { params: { oid: number } }) => {
  return (
    <div>
      <InvLayout>
        <Breadcrumb className="m-3">
          <Breadcrumb.Item href="/investigador">Inicio</Breadcrumb.Item>
          <Breadcrumb.Item href="/investigador/operaciones">
            Operaciones
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Seguimiento de operacion</Breadcrumb.Item>
        </Breadcrumb>
        <SeguimientoOperacion periodo={1} operacionId={params.oid} />
      </InvLayout>
    </div>
  );
};

export default page;
