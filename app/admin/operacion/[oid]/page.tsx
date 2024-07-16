"use client";
import axiosApi from "@/Api/AxiosApi";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useEffect, useState } from "react";

const Operacion = ({ params }: { params: { oid: number } }) => {
  return <AdminLayout></AdminLayout>;
};

export default Operacion;
