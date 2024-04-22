import React, { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const YearSelect = ({ value, onChange }) => {
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
        onChange={(e) => onChange(e.target.value)}
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
