import React from "react";
import { Button, Container } from "react-bootstrap";
import resume from "../assets/images/wire-frame.pdf";
//import pdf from folder for resume
const Resume = () => (
  <Container>
    <h1>Resume Page</h1>
    
    <Button variant="success">
      <a href={resume} download="wire-frame.pdf">
        Click to download
      </a>
    </Button>
  </Container>
);

export default Resume;
