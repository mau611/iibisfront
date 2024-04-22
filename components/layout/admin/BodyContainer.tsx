import React from "react";
import { Card, Container } from "react-bootstrap";

const BodyContainer = (props) => {
  return (
    <div style={{ padding: "10px 10px" }}>
      <Card style={{ boxShadow: "2px 2px 15px gray" }}>{props.children}</Card>
    </div>
  );
};

export default BodyContainer;
