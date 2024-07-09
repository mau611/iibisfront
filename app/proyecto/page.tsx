"use client";
import TablaContainer from "@/components/TablaExcel/TablaContainer";
import InvLayout from "@/components/layout/investigador/InvLayout";
import React from "react";

const page = () => {
  return (
    <InvLayout>
      <TablaContainer />
    </InvLayout>
  );
};

export default page;
