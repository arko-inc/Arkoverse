import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#111010] backdrop-blur-md text-white py-10 px-6 font-mont">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Welcome to my universe, where I have turned my ideas into reality. Join me on
            my journey to see my innovations, creations and amazing weird stuff.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
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
                Projects
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
          <h3 className="text-xl font-bold text-white mb-4">Connect with me</h3>
          <p className="text-sm leading-relaxed mb-4">
            Follow me on social media for updates, insights, and exclusive content.
          </p>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a
              href="https://x.com/arko_inc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition"
            >
              <i className="fab fa-x-twitter fa-2x"></i>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100076826942709"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/arko_harsh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            {/* GitHub */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-100 transition"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-white mt-6"/>

      {/* Bottom Section */}
      <div className="text-center mt-4 text-sm text-white">
        <i className="fa-regular fa-copyright" style={{ color: '#fff' }}></i> 2024 Arkoverse. All rights reserved. | Made with ❤️
      </div>
    </footer>
  );
};

export default Footer;
