"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import Proyectos from "@/components/Proyectos/Proyectos";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProyectosContainer from "./ProyectosContainer";

const page = () => {
  return (
    <InvLayout>
      <ProyectosContainer />
    </InvLayout>
  );
};

export default page;
