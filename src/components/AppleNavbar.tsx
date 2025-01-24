import { useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Form,
  } from "react-bootstrap";
import { House, Stars, Broadcast } from 'react-bootstrap-icons';
import Novità from "./Novita";

const AppleNavbar = function () {
  const [show, setShow] = useState(false); 
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
        <Container fluid>
          <Navbar.Toggle
            aria-controls="offcanvas-navbar"
            onClick={handleShow}
          />
          <Navbar.Brand className="mx-auto" href="#">
          <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="32"
                version="1.1"
                viewBox="0 0 20 24"
                className="logo my-0 py-0"
              >
                <path
                  fill-rule="evenodd"
                  stroke="none"
                  stroke-width="2"
                  d="M14.5498331,5.79055576 L14.8667346,5.79824073 C15.6519271,5.85753895 17.9167852,6.09354452 19.3663083,8.18658259 C19.2454992,8.2761902 16.6786385,9.72115188 16.7091378,12.7589876 C16.7390911,16.3870553 19.9696682,17.5970079 20,17.6265086 C19.9696682,17.7155832 19.487499,19.3381578 18.3096405,21.0185738 C17.2829229,22.4941235 16.2256873,23.9394547 14.5345925,23.9689736 C12.9038728,23.9984743 12.3599697,23.0246181 10.4887983,23.0246181 C8.61624942,23.0246181 8.01243658,23.9394547 6.47193668,23.9984743 C4.84148068,24.056773 3.60409403,22.4336653 2.57735781,20.9595512 C0.463094554,17.9799264 -1.13731196,12.5531248 1.03685791,8.89465382 C2.09390733,7.06587112 4.02671959,5.91602544 6.10974825,5.88615523 C7.71015477,5.85753895 9.18984525,6.91939744 10.1566562,6.91939744 C11.1229398,6.91939744 12.8433271,5.68057112 14.8667346,5.79824073 Z M14.882569,-1.50990331e-14 C15.034318,1.42063421 14.4589476,2.81085604 13.6110595,3.84623659 C12.7325883,4.85257077 11.3405768,5.6504798 9.94727779,5.53248307 C9.76560653,4.17140151 10.4624841,2.72297789 11.2498451,1.83563692 C12.1267465,0.799444643 13.6413789,0.0602553239 14.882569,-1.50990331e-14 Z"
                ></path>
              </svg>
           
          </Navbar.Brand>
          <Nav.Link href="#" className="text-danger">
            Accedi
          </Nav.Link>
        </Container>
      </Navbar>

      <Container fluid={true} className="mt-0 p-0">
        <Row>
          <Col lg={2} className="d-none mt-0 d-lg-block bg-dark sidebar">
            <Nav className="flex-column mt-0 p-3 text-white">
              <div className="my-0 px-3 py-1">
                 <svg
              height="20"
              viewBox="0 0 83 20"
              width="83"
              xmlns="http://www.w3.org/2000/svg"
              className="logo"
              aria-hidden="true"
            >
              <path d="M34.752 19.746V6.243h-.088l-5.433 13.503h-2.074L21.711 6.243h-.087v13.503h-2.548V1.399h3.235l5.833 14.621h.1l5.82-14.62h3.248v18.347h-2.56zm16.649 0h-2.586v-2.263h-.062c-.725 1.602-2.061 2.504-4.072 2.504-2.86 0-4.61-1.894-4.61-4.958V6.37h2.698v8.125c0 2.034.95 3.127 2.81 3.127 1.95 0 3.124-1.373 3.124-3.458V6.37H51.4v13.376zm7.394-13.618c3.06 0 5.046 1.73 5.134 4.196h-2.536c-.15-1.296-1.087-2.11-2.598-2.11-1.462 0-2.436.724-2.436 1.793 0 .839.6 1.41 2.023 1.741l2.136.496c2.686.636 3.71 1.704 3.71 3.636 0 2.442-2.236 4.12-5.333 4.12-3.285 0-5.26-1.64-5.509-4.183h2.673c.25 1.398 1.187 2.085 2.836 2.085 1.623 0 2.623-.687 2.623-1.78 0-.865-.487-1.373-1.924-1.704l-2.136-.508c-2.498-.585-3.735-1.806-3.735-3.75 0-2.391 2.049-4.032 5.072-4.032zM66.1 2.836c0-.878.7-1.577 1.561-1.577.862 0 1.55.7 1.55 1.577 0 .864-.688 1.576-1.55 1.576a1.573 1.573 0 0 1-1.56-1.576zm.212 3.534h2.698v13.376h-2.698zm14.089 4.603c-.275-1.424-1.324-2.556-3.085-2.556-2.086 0-3.46 1.767-3.46 4.64 0 2.938 1.386 4.642 3.485 4.642 1.66 0 2.748-.928 3.06-2.48H83C82.713 18.067 80.477 20 77.317 20c-3.76 0-6.208-2.62-6.208-6.942 0-4.247 2.448-6.93 6.183-6.93 3.385 0 5.446 2.213 5.683 4.845h-2.573zM10.824 3.189c-.698.834-1.805 1.496-2.913 1.398-.145-1.128.41-2.33 1.036-3.065C9.644.662 10.848.05 11.835 0c.121 1.178-.336 2.33-1.01 3.19zm.999 1.619c.624.049 2.425.244 3.578 1.98-.096.074-2.137 1.272-2.113 3.79.024 3.01 2.593 4.012 2.617 4.037-.024.074-.407 1.419-1.344 2.812-.817 1.224-1.657 2.422-3.002 2.447-1.297.024-1.73-.783-3.218-.783-1.489 0-1.97.758-3.194.807-1.297.048-2.28-1.297-3.097-2.52C.368 14.908-.904 10.408.825 7.375c.84-1.516 2.377-2.47 4.034-2.495 1.273-.023 2.45.857 3.218.857.769 0 2.137-1.027 3.746-.93z"></path>
            </svg>
              </div>
              
              <Form className="d-flex mb-3 text-light">
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="mt-3 me-2 p-1 border-1 bg-dark text-white"
                />
              </Form>
              

              <Nav.Link href="#" className="text-white">
              <House className="text-danger me-2" />
                Home
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
              <Stars className="text-danger me-2" />
                Novità
              </Nav.Link>
              <Nav.Link href="#" className="text-white">
              <Broadcast className="text-danger me-2" />
                Radio
              </Nav.Link>
            </Nav>
          </Col>
          <Col lg={10} className="ms-lg-auto p-4 pt-0">
            <Novità />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AppleNavbar;
