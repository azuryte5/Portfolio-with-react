import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./components/Project";

import Resume from './pages/Resume';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const [currentSection, handleSectionChange] = useState();

  const renderPage = () => {
    switch (currentSection) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="App">
      <Header
        currentSection={currentSection}
        handleSectionChange={handleSectionChange}
      />
      <section class="jumbotron">
        <div class="subtitle">
          <h2>Looking for a job</h2>
        </div>
      </section>
      <div>{renderPage(currentSection)}</div>
      <Footer />
    </div>
  );
}

export default App;
