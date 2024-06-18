"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import TableOperaciones from "@/components/Operaciones/TableOperaciones";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import OperacionesContainer from "./OperacionesContainer";

const page = () => {
  return (
    <InvLayout>
      <OperacionesContainer />
    </InvLayout>
  );
};

export default page;
