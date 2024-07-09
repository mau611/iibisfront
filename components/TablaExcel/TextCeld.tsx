import React from "react";
import { Form } from "react-bootstrap";
import "./styles.css";

const TextCeld = ({ content, children }) => {
  return <div className="celda">{children ? children : content}</div>;
};

export default TextCeld;
