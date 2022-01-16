import React from "react";
import { Container, Alert, Figure } from "react-bootstrap";

const About = () => (

  
  <Container>
    <section className="jumbotron">
    <Figure>
      <Figure.Image
      src="https://user-images.githubusercontent.com/85147307/149609585-ea0a0e3b-1bd0-4b0f-b862-e58514787bfd.jpg"
      width="300rem" />
    </Figure>
      <div className="subtitle">
        <h2>Ready for work</h2>
      </div>
    </section>
    <h3 className="big-title">About Andrew</h3>
 
    <Alert variant="success" className="about-text">
      I'm Andrew Lefebvre. I'm re-tailoring my work experience to adjust to a
      web environment. For the last ten years I've been working with adults and
      children with special needs and developmental disabilities. During this
      time, I've developed and created visual aides and virtual tools to assist
      learning and skill acquisition. I've had to continually adapt my skills
      and communication style to interact with people with many different
      medical and developmental needs. Now, I’m interested in web development
      and have been steadily increasing my skills to build web content. I hope
      to apply my accommodation and problem solving skills from a physical
      environment to a virtual one.
    </Alert>
  </Container>
);

export default About;
