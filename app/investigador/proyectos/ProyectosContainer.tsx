import { endpoint } from "@/components/Endpoint/Endpoint";
import Proyectos from "@/components/Proyectos/Proyectos";
import Title from "@/components/Title/Title";
import UserContext from "@/components/data/Context/UserContext";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const ProyectosContainer = () => {
  const { getUser, user } = useContext(UserContext);
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    getProyectos();
  }, []);

  const getProyectos = async () => {
    const user = await getUser();
    try {
      const response = await axios.get(
        `${endpoint}/sispoas_inv/${user.investigador.id}`
      );
      setProyectos(response.data);
    } catch (error) {
      console.log(error);
      setProyectos([]);
    }
  };
  return (
    <>
      <Title title="Proyectos" />
      <Proyectos proyectos={proyectos} />
    </>
  );
};

export default ProyectosContainer;
