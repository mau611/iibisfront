import Link from "next/link";
import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import "./CardTitle.css";

const CardTitle = ({ title, link }) => {
  return (
    <Card className="custom-card">
      <Card.Body className="text-center">
        <Card.Title className="d-grid">
          <Button
            variant="outline-primary"
            size="lg"
            style={{ border: "none" }}
            href={link}
          >
            {title}
          </Button>
        </Card.Title>
      </Card.Body>
    </Card>
  );
};

export default CardTitle;
