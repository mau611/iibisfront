"use client";
import { endpoint } from "@/components/Endpoint/Endpoint";
import Proyectos from "@/components/Proyectos/Proyectos";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [sispoas, setSispoas] = useState([]);
  useEffect(() => {
    getSispoas();
  }, []);
  const getSispoas = async () => {
    try {
      const response = await axios.get(`${endpoint}/sispoas`);
      setSispoas(response.data);
    } catch (error) {
      console.log(error);
      setSispoas([]);
    }
  };
  return (
    <AdminLayout>
      <Title title="Lista de proyectos" />
      <Proyectos proyectos={sispoas} />
    </AdminLayout>
  );
};

export default page;
