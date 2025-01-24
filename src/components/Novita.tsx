import { Container, Row, Col, Card } from "react-bootstrap";
import novita1 from "../../public/images/1a.png";
import novita2 from "../../public/images/1b.png";
import novita3 from "../../public/images/1c.png";
import image2a from "../../public/images/2a.png";
import image2b from "../../public/images/2b.png";
import image2c from "../../public/images/2c.png";
import image2d from "../../public/images/2d.png";
import image2e from "../../public/images/2e.png";
import image2f from "../../public/images/2f.png";
import NuoveUscite from "./NuoveUscite";
import Esplora from "./Esplora";
import Footer from "./Footer";

const Novita: React.FC = () => {
  return (
    <Container className="mt-1">
      <h3 className="text-light mb-4">Novità</h3>
      <hr className="text-light" />
      <Row className="justify-content-center justify-content-md-start">
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="bg-dark text-light border-0">
            <Card.Body>
              <Card.Title className="uppercase fs-6 my-1 py-1">
                Nuova stazione Radio
              </Card.Title>
              <Card.Text>Rilassati, ascolta Apple Music Chill</Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={novita1} className="rounded-3" />
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="bg-dark text-light border-0">
            <Card.Body>
              <Card.Title className="uppercase fs-6 my-1 py-1">
                nuova stazione radio
              </Card.Title>
              <Card.Text>Ecco la nuova casa della musica latina</Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={novita2} className="rounded-3" />
          </Card>
        </Col>
        <Col xs={12} md={6} lg={4} className="mb-4">
          <Card className="bg-dark text-light border-0">
            <Card.Body>
              <Card.Title className="uppercase fs-6 my-1 py-1">
                nuova stazione radio
              </Card.Title>
              <Card.Text>E' arrivata l'ora del divertimento </Card.Text>
            </Card.Body>
            <Card.Img variant="top" src={novita3} className="rounded-3" />
          </Card>
        </Col>
      </Row>

      <h3 className="text-light ms-auto mb-4">Nuovi episodi Radio </h3>
      <hr className="text-light" />

      <Row className="justify-content-center justify-content-md-start flex-nowrap overflow-hidden">
        <Col
          xs={4}
          md={2}
          style={{ width: "10.3rem" }}
          className="mb-4 mx-2 px-0 d-block d-md-block"
        >
          <Card className="bg-dark border-0">
            <Card.Img
              variant="top"
              src={image2a}
              className="mb-0 p-0 rounded-3"
            />
            <Card.Body className="mt-0 py-0 bg-dark text-light fw-bold ">
              <p className="text-start">Pròlogo con Abuelo</p>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={4}
          md={2}
          style={{ width: "10.3rem" }}
          className="mb-4 mx-2 px-0 d-block d-md-block"
        >
          <Card className="bg-dark border-0">
            <Card.Img
              variant="top"
              src={image2b}
              className="mb-0 p-0 rounded-3"
            />
            <Card.Body className="mt-0 py-0 bg-dark text-light fw-bold ">
              <p className="text-start">The Wanderer</p>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={4}
          md={2}
          style={{ width: "10.3rem" }}
          className="mb-4 mx-2 px-0 d-block d-md-block"
        >
          <Card className="bg-dark border-0">
            <Card.Img
              variant="top"
              src={image2c}
              className="mb-0 p-0 rounded-3"
            />
            <Card.Body className="mt-0 py-0 bg-dark text-light fw-bold ">
              <p className="text-start">Michael Bublè</p>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={4}
          md={2}
          style={{ width: "10.3rem" }}
          className="mb-4 mx-2 px-0 d-none d-lg-block"
        >
          <Card className="bg-dark border-0">
            <Card.Img
              variant="top"
              src={image2d}
              className="mb-0 p-0 rounded-3"
            />
            <Card.Body className="mt-0 py-0 bg-dark text-light fw-bold ">
              <p className="text-start">Stephan Moccio</p>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={4}
          md={2}
          style={{ width: "10.3rem" }}
          className="mb-4 mx-2 px-0 d-none d-lg-block"
        >
          <Card className="bg-dark border-0">
            <Card.Img
              variant="top"
              src={image2e}
              className="mb-0 p-0 rounded-3"
            />
            <Card.Body className="mt-0 py-0 bg-dark text-light fw-bold ">
              <p className="text-start">Chart Spotlight</p>
            </Card.Body>
          </Card>
        </Col>
        <Col
          xs={4}
          md={2}
          style={{ width: "10.3rem" }}
          className="mb-4 mx-2 px-0 d-none d-lg-block"
        >
          <Card className="bg-dark border-0">
            <Card.Img
              variant="top"
              src={image2f}
              className="mb-0 p-0 rounded-3"
            />
            <Card.Body className="mt-0 py-0 bg-dark text-light fw-bold ">
              <p className="text-start">Your Podcasts</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <NuoveUscite/>
        </Row>
        <Row>
        <Esplora/>
      </Row>
      <Row>
      <Footer/>
      </Row>
    </Container>
  );
};

export default Novita;
