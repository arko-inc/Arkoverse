import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Loading from './Components/Loading';

function App() {
  return (
    <Router>
      <Navbar />
      <PageLoaderWrapper />
    </Router>
  );
}

const PageLoaderWrapper = () => {
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const location = useLocation(); // Detect route changes

  useEffect(() => {
    // Trigger loading animation on route change
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 2000); // Adjust duration as needed

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [location]);

  return (
    <>
      {isLoading ? (
        <Loading /> // Show loading component during loading
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </>
  );
};

export default App;
