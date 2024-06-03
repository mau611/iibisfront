"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import Gestion from "@/components/Proyectos/Gestion";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ComponenteContainer from "./ComponenteContainer";

const page = ({ params }: { params: { pid: number } }) => {
  const scrollRef = useRef(null);
  const [gestionIibismed, setGestionIibismed] = useState([]);
  const [componenteId, setComponenteId] = useState(0);
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    getGestionIibismed();
  }, [componenteId]);
  const getGestionIibismed = async () => {
    try {
      const response = await axios.get(
        `${endpoint}/proyecto_iibismed/${params.pid}`
      );
      setGestionIibismed(response.data);
    } catch (error) {
      console.log(error);
      setGestionIibismed([]);
    }
  };
  return (
    <InvLayout>
      <Title title="Proyecto gestion" />
      <Gestion
        gestionIibismed={gestionIibismed}
        usuario="inv"
        setComponenteId={setComponenteId}
      />
      {componenteId > 0 && <ComponenteContainer componenteId={componenteId} />}
      <div ref={scrollRef} />
    </InvLayout>
  );
};

export default page;
