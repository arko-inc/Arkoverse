import React from "react";
import { Link } from "react-router-dom";

const AboutMe = () => {
  return (
    <>
    <section className="bg-black text-gray-300  min-h-screen px-8  py-12 md:px-20 lg:px-32 font-conthrax">
      {/* Hero Section */}
      <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mb-16 mt-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-white animate-pulse leading-tight font-conthrax">
            About <span className="text-indigo-600">Me</span>
          </h1>
          <p className="text-lg mt-4 text-gray-400">
            I'm <span className="text-white font-semibold">Arko</span>, a dreamer, innovator, and aspiring space scientist 🌌, committed to pushing the boundaries of the possible. 🚀 Let's journey together into the **Arkoverse**!
          </p>
          <Link to="/projects">
            <button className="mt-8 px-6 py-3 bg-gradient-to-r from-red-600 to-indigo-600 text-white font-medium rounded-md shadow-lg transform hover:scale-110 transition duration-300">
              Explore My Work
            </button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <img
            src="src/assets/me.jpeg"
            alt="Arko's Portrait"
            className="rounded-full w-72 h-72 md:w-96 md:h-96 shadow-xl hover:scale-105 transform transition duration-500"
          />
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-16">
        <h2 className="text-3xl text-white mb-6">My Skills 💡</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {["React", "TailwindCSS", "JavaScript", "HTML & CSS", "Python", "Space Engineering", "AI Development", "CubeSat Design"].map(
            (skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 text-center shadow-lg transform hover:scale-110 transition duration-300"
              >
                <h3 className="text-lg font-medium text-indigo-400">{skill}</h3>
              </div>
            )
          )}
        </div>
      </div>

      {/* Timeline Section */}
      <div className="mb-16">
        <h2 className="text-3xl text-white mb-6">My Journey 🚀</h2>
        <div className="space-y-8">
          {[
            { year: "2022", event: "Started dreaming of MIT 🌟" },
            { year: "2023", event: "Developed innovative CubeSat ideas 🛰️" },
            { year: "2024", event: "Building the Arkoverse 🚀" },
            { year: "2026", event: "Aiming for HSC success and MIT admission 🎓" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className="bg-indigo-600 text-white px-4 py-2 rounded-md shadow-lg transform group-hover:scale-110 transition duration-300">
                {item.year}
              </div>
              <p className="text-gray-400 group-hover:text-gray-300 transition duration-300">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Fun Facts */}
      <div className="mb-16">
        <h2 className="text-3xl text-white mb-6">Fun Facts 🌟</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>My favorite number is <span className="text-indigo-400">7</span>.</li>
          <li>I love chocolates 🍫.</li>
          <li>Dreaming of founding a space agency: <span className="text-red-400">Xpace</span>.</li>
          <li>I adore challenges and limitless possibilities!</li>
        </ul>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h3 className="text-2xl font-medium text-gray-300">
          Ready to collaborate and explore the Arkoverse?
        </h3>
        <Link to="/contact">
          <button className="mt-8 px-8 py-4 bg-gradient-to-r from-indigo-600 to-red-600 text-white font-medium rounded-md shadow-lg transform hover:scale-110 transition duration-300">
            Contact Me
          </button>
        </Link>
      </div>

    </section>
    </>
    
  );
};

export default AboutMe;
