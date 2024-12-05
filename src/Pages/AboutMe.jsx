import React from "react";
import { Link } from "react-router-dom";

const timelineData = [
  { year: 2023, event: 'Started MIT Application' },
  { year: 2022, event: 'Completed a major project on AI Development' },
  { year: 2021, event: 'Won a coding competition' },
  // Add more events as needed
];

function AboutMe() {
  return (
    <>
      <section className="bg-black min-h-screen px-8 py-12 md:px-20 lg:px-32 font-mont font-thin relative bg-cover bg-fixed text-white p-5 md:p-10 lg:p-20 h-max" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/5 via-black/90 to-gray-900/20 z-1"></div>

        {/* Hero Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mb-16 mt-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-thin text-white animate-pulse leading-tight font-mont">
              About <span className="text-white font-extralight">Me</span>
            </h1>
            <p className="text-lg mt-4 text-gray-400">
              I'm <span className="text-white font-semibold">Arko</span>, a dreamer, innovator, and aspiring space scientist, committed to pushing the boundaries of the possible. Let's journey together into the Arkoverse!
            </p>
            <Link to="/projects">
              <button className="mt-8 px-6 py-3 bg-transparent text-white border-white border-[1px] rounded-full font-medium shadow-lg transform hover:scale-110 transition duration-300">
                Explore My Work
              </button>
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://i.imghippo.com/files/bqQ1323WEs.png"
              alt="Arko's Portrait"
              className="rounded-full w-72 h-72 md:w-96 md:h-96 shadow-xl border-[2px] border-white hover:scale-105 transform transition duration-500"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-3xl text-white mb-6">My Skills 💡</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-base">
            {["React", "JavaScript", "HTML & CSS", "Python", "Space Engineering", "AI Development", "CubeSat Design"].map(
              (skill, index) => (
                <div
                  key={index}
                  className="bg-[#1a1a1a] rounded-lg p-6 text-center shadow-lg transform hover:scale-110 transition duration-300 overflow-hidden"
                >
                  <h3 className="text-lg font-medium text-gray-100 truncate">{skill}</h3>
                </div>
              )
            )}
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h2>{item.year}</h2>
                <p>{item.event}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mb-16 relative z-10  p-8 rounded-lg ">
          <h2 className="text-3xl text-white mb-6">Fun Facts 🌟</h2>
          <ul className="list-disc pl-5 space-y-4">
            <li className="p-4">
              <span className="font-thin text-white">My favorite number is <span className="text-indigo-400">7</span>.</span>
            </li>
            <li className=" p-4 ">
              <span className="font-thin text-white">I love chocolates 🍫.</span>
            </li>
            <li className="p-4 ">
              <span className="font-thin text-white">Dreaming of founding a space agency: <span className="text-red-400">Xpace</span>.</span>
            </li>
            <li className=" p-4 ">
              <span className="font-thin text-white">I adore challenges and limitless possibilities!</span>
            </li>
          </ul>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-medium text-gray-300">
            Ready to collaborate and explore the Arkoverse?
          </h3>
          <Link to="/contact">
            <button className="mt-8 px-8 py-4 bg-[#1a1a1a] text-white font-medium rounded-md shadow-lg transform hover:scale-110 transition duration-300">
              Contact Me
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
