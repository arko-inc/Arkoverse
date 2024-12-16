import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
// import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

// import Project1 from "./Pages/sub_pages/Project1";
// import Toddy from "./Pages/sub_pages/Toddy";
import AppWrapper from "./AppWrapper";
import './index.css';
import './App.css';
import Under from "./Pages/Under";

function App() {
  return (
    <Router>
      <AppWrapper>
        {/* Move Navbar and Footer inside AppWrapper */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Under/>} />
          {/* <Route path="/projects/toddy" element={<Toddy />} /> Updated path */}
          {/* <Route path="/projects/project1" element={<Project1 />} /> Example for another project */}
          <Route path="/contact" element={<Contact />} />
       
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
