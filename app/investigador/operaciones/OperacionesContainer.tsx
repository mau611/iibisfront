import axiosApi from "@/Api/AxiosApi";
import TableOperaciones from "@/components/Operaciones/TableOperaciones";
import Title from "@/components/Title/Title";
import UserContext from "@/components/data/Context/UserContext";
import React, { useContext, useEffect, useState } from "react";

const OperacionesContainer = () => {
  const { getUser } = useContext(UserContext);
  const [operaciones, setOperaciones] = useState([]);
  useEffect(() => {
    getOperaciones();
  }, []);
  const getOperaciones = async () => {
    const user = await getUser();
    const response = await axiosApi.get(
      `/operaciones_investigador/${
        user.investigador.id
      }/${new Date().getFullYear()}`
    );
    setOperaciones(response.data);
  };
  return (
    <>
      <Title title="Operaciones" />
      <TableOperaciones operaciones={operaciones} />
    </>
  );
};

export default OperacionesContainer;
