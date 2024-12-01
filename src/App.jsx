import { useState } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';  // Use BrowserRouter, not Router
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>  {/* This should wrap your whole application */}
        <Navbar />  {/* Add Navbar to the main layout */}
        <Routes>
          <Route path="/" element={<Home />} />  {/* Add a Home route if needed */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
