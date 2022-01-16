import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import resume from "../assets/images/wire-frame.pdf";
//import pdf from folder for resume
const Resume = () => (
  <Container >
    <Row className="about-text">
    <h1>Resume Page</h1>

    <Button variant="success subtitle">
      <a href={resume} download="wire-frame.pdf">
        Click to download
      </a>
    </Button>
    </Row>
  </Container>
);

export default Resume;
