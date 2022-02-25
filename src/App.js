import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Resume from "./pages/Resume";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";

function App() {
  const [currentSection, handleSectionChange] = useState();

  const renderPage = () => {
    switch (currentSection) {
      case "Portfolio":
        return <Portfolio />;
      // case "Contact":
      //   return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };
  return (
    <div className="App">
      <Navbar 
      currentSection={currentSection}
      handleSectionChange={handleSectionChange}/>
      {/* <Header
        currentSection={currentSection}
        handleSectionChange={handleSectionChange}
      /> */}
      <div>{renderPage(currentSection)}</div>
      <Footer />
    </div>
  );
}

export default App;
