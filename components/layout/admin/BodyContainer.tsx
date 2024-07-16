import React from "react";
import { Card, Container } from "react-bootstrap";

const BodyContainer = (props) => {
  return <div style={{ padding: "10px 10px" }}>{props.children}</div>;
};

export default BodyContainer;
