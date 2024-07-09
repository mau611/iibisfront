"use client";
import Title from "@/components/Title/Title";
import AdminLayout from "@/components/layout/admin/AdminLayout";
import React, { useEffect, useState } from "react";

const page = ({ params }: { params: { pid: number } }) => {
  return (
    <AdminLayout>
      <Title title="Proyecto" />
    </AdminLayout>
  );
};

export default page;
