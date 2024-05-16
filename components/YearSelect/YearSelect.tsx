import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import Cookies from "js-cookie";

const YearSelect = ({ value, onChange, component }) => {
  const [years, setYears] = useState<Number[]>([]);
  useEffect(() => {
    getYears();
  }, []);
  const getYears = () => {
    const currentYear = new Date().getFullYear();
    const pastYears = Array.from(
      { length: 5 },
      (_, index) => currentYear - index - 1
    );
    setYears([...pastYears.reverse(), currentYear]);
  };
  return (
    <InputGroup className="p-2">
      <InputGroup.Text id="basic-addon1">Filtrar por gestion:</InputGroup.Text>
      <Form.Select
        aria-label="Gestion"
        onChange={(e) => {
          onChange(e.target.value);
          if (component === "ops")
            Cookies.set("ops-year", e.target.value, { expires: 1 });
          if (component === "det")
            Cookies.set("det-year", e.target.value, { expires: 1 });
        }}
        value={value}
      >
        <option value="Todos">Todos</option>
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </Form.Select>
    </InputGroup>
  );
};

export default YearSelect;
