import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-white text-3xl font-space">Arkoverse</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8 font-space">
            <Link
              to="/"
              className="text-white relative  transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
            >
              Home
            </Link>

            <Link
              to="/projects"
              className="text-white relative  transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
            >
              Projects
            </Link>

            <Link
              to="/about"
              className="text-white relative  transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-white relative  transition duration-700 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
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
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden bg-transparent bg-opacity-80 p-4 space-y-4 absolute top-16 left-0 right-0 z-10 rounded-b-lg shadow-lg transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-white relative  transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu}
            className="block text-white relative  transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
          >
            About
          </Link>
          <Link
            to="/projects"
            onClick={toggleMenu}
            className="block text-white relative  transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu}
            className="block text-white relative  transition duration-300 after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
