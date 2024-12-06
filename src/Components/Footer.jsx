import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-md text-gray-300 py-10 px-6 font-mont">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-100 mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Welcome to our universe, where ideas turn into reality. Join us on
            our journey to innovate, explore, and create amazing things.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-100 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/aboutme"
                className="hover:text-gray-100 transition hover:underline"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:text-gray-100 transition hover:underline"
              >
                projects
              </Link>
            </li>
            <li>
              <Link
                to="/aboutme"
                className="hover:text-gray-100 transition hover:underline"
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                to="/resume"
                className="hover:text-gray-100 transition hover:underline"
              >
                My Resume
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-gray-100 transition hover:underline"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-xl font-bold text-gray-100 mb-4">Connect with Us</h3>
          <p className="text-sm leading-relaxed mb-4">
            Follow us on social media for updates, insights, and exclusive content.
          </p>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-100 transition"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-sm text-gray-500">
        © 2024 Your Company. All rights reserved. | Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;
