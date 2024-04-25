import React from "react";
import { Pagination } from "react-bootstrap";
import "./styles.css";
import ReactHtmlParser from "react-html-parser";
import { link } from "fs";

const Paginacion = ({ links }) => {
  return (
    <div className="paginacion">
      <Pagination>
        {links?.map((link) => (
          <Pagination.Item active={link.active}>
            {ReactHtmlParser(link.label)}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
};

export default Paginacion;
