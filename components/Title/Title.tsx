import React from "react";
import "./styles.css";

interface PropTypes {
  title: string;
}

const Title = ({ title }: PropTypes) => {
  return (
    <div className="title">
      <h5>{title}</h5>
    </div>
  );
};

export default Title;
