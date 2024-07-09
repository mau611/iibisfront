"use client";
import Title from "@/components/Title/Title";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React from "react";

const page = ({ params }: { params: { pid: number } }) => {
  return (
    <InvLayout>
      <Title title="Proyecto gestion" />
    </InvLayout>
  );
};

export default page;
