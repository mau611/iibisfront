import React from "react";
import { Pagination } from "react-bootstrap";
import "./styles.css";
import { link } from "fs";

const Paginacion = ({ lastPage, currentPage, onChangePage }) => {
  return (
    <div className="paginacion">
      <Pagination size="sm">
        <Pagination.First
          onClick={() => onChangePage(1)}
          disabled={currentPage === 1}
        />
        <Pagination.Prev
          onClick={() => onChangePage(currentPage - 1)}
          disabled={currentPage === 1}
        />
        {[...Array(lastPage)].map((_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => onChangePage(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next
          onClick={() => onChangePage(currentPage + 1)}
          disabled={currentPage === lastPage}
        />
        <Pagination.Last
          onClick={() => onChangePage(lastPage)}
          disabled={currentPage === lastPage}
        />
      </Pagination>
    </div>
  );
};

export default Paginacion;
