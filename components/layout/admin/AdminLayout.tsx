import React from "react";
import AdminNav from "./AdminNav";
import BodyContainer from "./BodyContainer";

const AdminLayout = (props) => {
  return (
    <>
      <AdminNav />
      <BodyContainer>{props.children}</BodyContainer>
    </>
  );
};

export default AdminLayout;
