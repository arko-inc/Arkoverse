import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email or save data)
    alert("Message Sent! 🚀");
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-6">Contact Me 🌠</h2>
        <p className="text-lg mb-12">
          I would love to hear from you! Whether you're interested in space,
          technology, or just want to chat, feel free to reach out using the form
          below. Let's connect! 🌌
        </p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-lg font-semibold text-white mb-2"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 text-black rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-lg font-semibold text-white mb-2"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 text-black rounded-md focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-lg font-semibold text-white mb-2"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              className="w-full p-3 text-black rounded-md focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>
          <div className="flex justify-center space-x-8">
            <a
              href="https://www.linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 text-xl"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 text-xl"
            >
              GitHub
            </a>
            <a
              href="mailto:your-email@example.com"
              className="text-yellow-400 hover:text-yellow-500 text-xl"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
