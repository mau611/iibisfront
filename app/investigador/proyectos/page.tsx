"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import Proyectos from "@/components/Proyectos/Proyectos";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    getProyectos();
  }, []);

  const getProyectos = async () => {
    try {
      const response = await axios.get(`${endpoint}/sispoas_inv/${1}`);
      setProyectos(response.data);
    } catch (error) {
      console.log(error);
      setProyectos([]);
    }
  };
  return (
    <InvLayout>
      <Title title="Proyectos" />
      <Proyectos proyectos={proyectos} />
    </InvLayout>
  );
};

export default page;
