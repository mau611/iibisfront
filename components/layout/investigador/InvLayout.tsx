import React from "react";
import InvNav from "./InvNav";
import BodyContainer from "./BodyContainer";

const InvLayout = (props) => {
  return (
    <>
      <InvNav />
      <BodyContainer>{props.children}</BodyContainer>
    </>
  );
};

export default InvLayout;
