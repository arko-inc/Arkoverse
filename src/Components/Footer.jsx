// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 font-nasa">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">About Us</h3>
          <p className="text-sm leading-relaxed">
            Welcome to our universe 🌌, where ideas turn into reality. Join us on our journey to innovate, explore, and create amazing things.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/aboutme" className="hover:text-purple-400 transition">
                About Me
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-purple-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="/portfolio" className="hover:text-purple-400 transition">
                Portfolio
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Section */}
        <div>
          <h3 className="text-xl font-bold text-purple-400 mb-4">Connect with Us</h3>
          <p className="text-sm leading-relaxed mb-4">
            Follow us on social media for updates, insights, and exclusive content.
          </p>
          <div className="flex space-x-4">
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M23.954 4.569c-.885.39-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.949.555-2.005.959-3.127 1.184-.897-.959-2.178-1.56-3.594-1.56-2.724 0-4.932 2.207-4.932 4.932 0 .386.045.763.127 1.124-4.096-.205-7.725-2.166-10.161-5.144-.426.729-.666 1.574-.666 2.476 0 1.708.869 3.216 2.188 4.099-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.829-.413.111-.849.171-1.296.171-.314 0-.623-.03-.922-.086.623 1.951 2.432 3.377 4.576 3.418-1.676 1.309-3.786 2.086-6.079 2.086-.395 0-.788-.023-1.177-.067 2.169 1.392 4.742 2.207 7.514 2.207 9.025 0 13.957-7.477 13.957-13.957 0-.213-.005-.426-.015-.637.961-.693 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6"
              >
                <path d="M22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.51c-1.14 0-2.06-.93-2.06-2.08 0-1.15.92-2.08 2.06-2.08s2.06.93 2.06 2.08c0 1.15-.92 2.08-2.06 2.08zm15.12 12.94h-3.56v-5.5c0-1.31-.03-2.99-1.82-2.99-1.83 0-2.11 1.43-2.11 2.9v5.59H9.45V9h3.41v1.56h.05c.48-.91 1.66-1.88 3.43-1.88 3.67 0 4.35 2.42 4.35 5.57v6.2z" />
              </svg>
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
