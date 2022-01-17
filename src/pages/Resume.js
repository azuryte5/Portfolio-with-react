import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import resume from "../assets/images/Resume.pdf";

const Resume = () => (
  <Container>
    <Row className="about-text">
      <h1>Resume Page</h1>
    </Row>
    <Row>
      <Col>
        <h2>Front-End Proficiencies</h2>
        <ul>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Reactjs</li>
          <li>Handlebars</li>
        </ul>
      </Col>
      <Col>
        <h2>Back-End Proficiencies</h2>
        <ul>
          <li>Nodejs</li>
          <li>Expressjs </li>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
        </ul>
      </Col>
      <Col>
        <h2>Full-Stack Proficiencies</h2>
        <ul>
          <li>GraphQL</li>
          <li>MVC</li>
          <li>PWA</li>
          <li>REST API</li>
          <li>MERN Stack</li>
        </ul>
      </Col>
    </Row>
    <Row>
      <Button variant="success subtitle">
        <a href={resume} download="Resume.pdf">
          Click to download
        </a>
      </Button>
    </Row>
  </Container>
);

export default Resume;
