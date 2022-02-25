import React from "react";
import { Container, Alert, Figure } from "react-bootstrap";

const About = () => (
  <Container>
    <section className="jumbotron">
      <Figure>
        <Figure.Image
          src="https://user-images.githubusercontent.com/85147307/149609585-ea0a0e3b-1bd0-4b0f-b862-e58514787bfd.jpg"
          width="300rem"
        />
      </Figure>
      <div className="subtitle">
        <h2>Ready for work</h2>
      </div>
    </section>
    <h3 className="big-title">About Andrew</h3>

    <Alert variant="success" className="about-text">
      <span>
        Full stack web developer with experience in implanting creative
        solutions to improve accessibility. With a previous background in
        working with people with disabilities to meet their life goals, I have
        persistence and dedication to my products and responsibilities.
      </span>
      <span>
        Recently earned a certificate in development from Carleton University
        where expanded on skills in JavaScript, React with MERN stack. I've
        successfully bridged my in-person problem solving skills to a digital
        landscape. I've been able to oversee, track, set goals and build on
        previous knowledge to incorporate new ideas.
      </span>
      <span>
        I excel at building tools that keep the user experience in mind so that
        progress matches end goal expectations. Promoting success by guiding,
        consulting, augmenting the capabilities of others to overcome obstacles
        and barriers with patience and dedication.
      </span>
    </Alert>
  </Container>
);

export default About;
