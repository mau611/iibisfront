"use client";
import ActividadTable from "@/components/Actividades/ActividadTable";
import Componente from "@/components/Componente/Componente";
import { endpoint } from "@/components/Endpoint/Endpoint";
import Title from "@/components/Title/Title";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ComponenteContainer = ({ componenteId }) => {
  const [componente, setComponente] = useState([]);
  const [actividad, setActividad] = useState([]);
  const [actividadId, setActividadId] = useState(0);
  useEffect(() => {
    getComponente();
    setActividadId(0);
  }, [componenteId]);
  const getComponente = async () => {
    try {
      const response = await axios.get(
        `${endpoint}/componente/${componenteId}`
      );
      setComponente(response.data);
    } catch (error) {
      setComponente([]);
      console.log(error);
    }
  };
  const setActividadIdAndActividad = async (actividadId) => {
    setActividadId(actividadId);
    try {
      const response = await axios.get(`${endpoint}/actividad/${actividadId}`);
      setActividad(response.data);
    } catch (error) {
      setActividad([]);
      console.log(error);
    }
  };
  return (
    <div className="px-5">
      <Title title="Componente" />
      <Componente
        componente={componente}
        setActividadIdAndActividad={setActividadIdAndActividad}
      />
      {actividadId > 0 && (
        <div>
          <Title title={`Actividad ${actividadId}`} />
          <ActividadTable actividad={actividad} user="inv" />
        </div>
      )}
    </div>
  );
};

export default ComponenteContainer;
