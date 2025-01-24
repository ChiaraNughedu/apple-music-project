import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Esplora: React.FC = () => {
  const categories = [
    "Esplora per genere",
    "Worldwide",
    "Video musicali",
    "Decenni",
    "Classifiche",
    "Nuovi artisti",
    "Attività e stati d'animo",
    "Audio spaziale",
    "Hit del passato",
  ];

  return (
    <Container className="mt-5 text-start">
      <h2 className="text-light mb-4">Altro da esplorare</h2>
      <hr className="text-light" />
      <Row className="g-3">
        {categories.map((category, index) => (
          <Col xs={12} md={4} key={index}>
            <Button
              variant="dark"
              className="w-100 py-2 text-start fw-bold border border-secondary text-danger"
            >
              {category}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Esplora;