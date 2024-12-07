import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";

import Project1 from "./Pages/sub_pages/Project1";
import Toddy from "./Pages/sub_pages/Toddy";
import AppWrapper from "./AppWrapper";
import './index.css';
import './App.css';
function App() {
  return (
    <Router>
      <Navbar />
      <AppWrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/toddy" element={<Toddy />} /> {/* Updated path */}
          <Route path="/projects/project1" element={<Project1 />} /> {/* Example for another project */}
          <Route path="/contact" element={<Contact />} />
       
          <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
      </AppWrapper>
      <Footer />
    </Router>
  );
}

export default App;
