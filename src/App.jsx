import React, { useState, useEffect } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Loading from "./Components/Loading";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Simulate a loading delay
    }, 1500); // Adjust the delay as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  // Intersection Observer for Scroll Animation
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger when 10% of the element is visible
    };

    const elements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once animated
        }
      });
    }, observerOptions);

    elements.forEach((element) => observer.observe(element));
  }, []);

  if (isLoading) {
    return <Loading />; // Render the loading animation while loading
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Image" element={<Image/>}/>
      </Routes>
    </Router>
  );
}

export default App;
