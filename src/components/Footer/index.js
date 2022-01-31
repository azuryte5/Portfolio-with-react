import React from "react";
import { Accordion, Container } from "react-bootstrap";

function Footer() {
  return (
    <section className="builder">
      <div className="contact">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Contact Information</Accordion.Header>
            <Accordion.Body>
            <Container fluid>
            <ul>
          <li>
            <a href="https://www.canada411.ca/" target="_blank">
              *RE-DAC-TED*
            </a>
          </li>
          <li>
            <a href="https://www.google.com/" target="_blank">
              and2lefebvre@gmail.com
            </a>
          </li>
          <li>
            <a href="https://github.com/azuryte5" target="_blank">
              Github
            </a>
          </li>
          <li>
            <a href="https://twitter.com/azuryte__5?lang=en" target="_blank">
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/andrew-lefebvre-7a7167213"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.spotify.com/us/" target="_blank">
              Spotify
            </a>
          </li>
        </ul>
        </Container>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
  
        <div className="justify-center">
          &copy;{new Date().getFullYear()} by Azuryte
        </div>
      </div>
    </section>
  );
}
export default Footer;
