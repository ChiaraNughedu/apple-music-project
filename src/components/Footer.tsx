import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="footer bg-dark text-light py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-3 mb-md-0">
            <span className="me-3">Italia</span>
            <span className="text-muted">|</span>
            <span className="ms-3">English (UK)</span>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <a href="#" className="text-decoration-none text-light me-3">
              Condizioni dei servizi internet
            </a>
            <a href="#" className="text-decoration-none text-light me-3">
              Apple Music e privacy
            </a>
            <a href="#" className="text-decoration-none text-light me-3">
              Avviso sui cookie
            </a>
            <a href="#" className="text-decoration-none text-light">
              Supporto
            </a>
            <a href="#" className="text-decoration-none text-light ms-3">
              Feedback
            </a>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12} className="text-center text-muted small">
            Copyright © 2024 Apple Inc. Tutti i diritti riservati.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;