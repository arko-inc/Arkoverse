// Contact.js
import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center px-6">
      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center py-12">
        <h1 className="text-5xl font-extrabold text-purple-400 mb-4 mt-10">
          Contact Me 
        </h1>
        <p className="text-lg text-gray-300">
          Have questions, ideas, or just want to chat? Let’s connect and make awesome things happen together. 🚀
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl p-8 mb-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-300">
          Send a Message 
        </h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md text-gray-200 shadow-sm focus:ring-purple-500 focus:border-purple-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded-md transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Social Links */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h3 className="text-2xl font-bold text-purple-300 mb-4">Follow Me</h3>
        <div className="flex justify-center space-x-6">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300"
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
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 text-2xl transition duration-300"
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
  );
};

export default Contact;
