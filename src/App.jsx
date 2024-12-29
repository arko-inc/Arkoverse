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
      <AppWrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/toddy" element={<Toddy />} />
          <Route path="/projects/project1" element={<Project1 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </AppWrapper>
    </Router>
  );
}

export default App;
