import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <div className="me-10">
        <nav className="fixed top-0 w-full me-5 z-50 bg-transparent backdrop-blur-md shadow-2xl shadow-black">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="flex-shrink-0">
                <h1 className="text-white text-2xl font-trench font-bold">Arkoverse</h1>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-8 font-mont ml-auto font-light">
                <Link
                  to="/"
                  className={`text-white relative transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all ${isActive("/") ? "after:w-full" : ""}`}
                >
                  Home
                </Link>
                <Link
                  to="/projects"
                  className={`text-white relative transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all ${isActive("/projects") ? "after:w-full" : ""}`}
                >
                  Projects
                </Link>
                <Link
                  to="/aboutme"
                  className={`text-white relative transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all ${isActive("/aboutme") ? "after:w-full" : ""}`}
                >
                  About Me
                </Link>
              
                <Link
                  to="/contact"
                  className={`text-white relative transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all ${isActive("/contact") ? "after:w-full" : ""}`}
                >
                  Get In Touch
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={toggleMenu}
                  className="text-white focus:outline-none"
                >
                  {/* Hamburger or Cross Image */}
                  <img
                    src={isMobileMenuOpen ? "/cross.svg" : "/hamburger.svg"}
                    alt="Menu Icon"
                    className={`h-6 w-6 transform transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`} // Rotation effect for cross
                  />
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              } md:hidden bg-opacity-80 backdrop-blur-xl bg-black p-4 space-y-4 absolute top-16 right-0 left-20 z-10 rounded-b-lg shadow-2xl transition-transform duration-500 ease-in-out text-center`}
            >
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block text-white relative transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all text-right font-mont ${isActive("/") ? "after:w-full" : ""}`}
              >
                Home
              </Link>
              <Link
                to="/aboutme"
                onClick={toggleMenu}
                className={`block text-white relative transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all text-right font-mont ${isActive("/aboutme") ? "after:w-full" : ""}`}
              >
                About Me
              </Link>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className={`block text-white relative transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all text-right font-mont ${isActive("/projects") ? "after:w-full" : ""}`}
              >
                Projects
              </Link>
       
              <Link
                to="/contact"
                onClick={toggleMenu}
                className={`block text-white relative transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all text-right font-mont ${isActive("/contact") ? "after:w-full" : ""}`}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
