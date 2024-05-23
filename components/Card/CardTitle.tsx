import Link from "next/link";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./CardTitle.css";

const CardTitle = ({ title, link }) => {
  return (
    <Card className="custom-card">
      <Card.Body className="text-center">
        <Card.Title>
          <Link href={link}>{title}</Link>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardTitle;
