import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center px-6 font-mont relative bg-cover bg-fixed" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}>
      <div className="absolute inset-0 bg-transparent z-1"></div>

      {/* Hero Section */}
      <div className="w-full max-w-4xl text-center py-16 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-mont font-light relative text-white mb-6 animate-pulse leading-tight">
          Contact Me
        </h1>
        <p className="text-lg lg:text-xl text-white max-w-2xl mx-auto">
          Have questions, ideas, or just want to chat? Let’s connect and make awesome things happen together. 🚀
        </p>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-transparent backdrop-blur-sm border border-white rounded-lg shadow-xl p-10 mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-center mb-8 text-white leading-tight">
          Send a Message
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full bg-transparent border-0 border-b border-gray-200 text-gray-200 focus:ring-0 focus:outline-none focus:border-b-2"
              placeholder="Your Name"
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full bg-transparent border-0 border-b border-gray-200 text-gray-200 focus:ring-0 focus:border-b-2 focus:outline-none"
              placeholder="Your Email"
            />
          </div>
          <div className="relative">
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="mt-1 block w-full bg-transparent border-0 border-b border-gray-200 text-gray-200 focus:ring-0 focus:border-b-2 focus:outline-none"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-3/12 bg-transparent backdrop-blur-lg  border-white border text-white font-base py-3 rounded-md shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Social Links */}
  
    </div>
  );
};

export default Contact;
