import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";
// import {Jumbotron} from 'react-bootstrap';

function App() {
  const sections = [
    { name: "About", content: "This is About Me" },
    { name: "Portfolio", content: "This is my portfolio" },
    { name: "Contact Me", content: "This is my Contact" },
    { name: "Resume", content: "This is my Resume" },{}
  ];
  const [currentSection, handleSectionChange] = useState(sections[0]);
  return (
    <div className="App">
      <Header
        sections={sections}
        currentSection={currentSection}
        handleSectionChange={handleSectionChange}
      />
      <section class="jumbotron">
        <div class="subtitle">
          <h2>Looking for a job</h2>
        </div>
      </section>
      <article>{currentSection.content}</article>
      <Project />
      <Footer />
    </div>
  );
}

export default App;
