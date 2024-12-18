import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const timelineData = [
  { year: 2023, event: "completed my K-11" },
  { year: 2022, event: "Completed a major project on AI Development" },
  { year: 2021, event: "Won a coding competition" },
  // Add more events as needed
];

function AboutMe() {
  return (
    <>
      <Helmet>
        <title>About Me | Arko</title>
        <meta name="description" content="Learn more about Arko, an aspiring aerospace engineer passionate about space exploration and AI." />
        <meta name="keywords" content="Arko, aerospace engineer, AI, CubeSat, space exploration" />
        <meta property="og:title" content="About Me | Arko" />
        <meta property="og:description" content="Learn more about Arko, an aspiring aerospace engineer passionate about space exploration and AI." />
        <meta property="og:image" content="https://i.imghippo.com/files/fsJm2995utk.jpeg" />
        <meta property="og:url" content="https://arkoverse.com/about" />

        {/* Schema.org markup for structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Arko",
            "url": "https://arkoverse.com",
            "sameAs": [
              "https://www.linkedin.com/in/arko",
              "https://github.com/arko"
            ],
            "jobTitle": "Aspiring Aerospace Engineer",
            "alumniOf": {
              "@type": "EducationalOccupationalCredential",
              "name": "MIT"
            },
            "image": "https://i.imghippo.com/files/fsJm2995utk.jpeg",
            "description": "Arko is a college student, dreamer, innovator, and aspiring aerospace engineer, committed to pushing the boundaries of the possible."
          })}
        </script>
      </Helmet>

      <section
        className="bg-black min-h-screen px-6 sm:px-2 py-12 md:px-20 lg:px-32 font-mont font-lightrelative bg-cover bg-fixed text-white p-5 md:p-10 lg:p-20 h-max"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/5 via-black/50 to-gray-900/20 z-1"></div>

        {/* Hero Section */}
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-12 mb-16 mt-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl lg:text-6xl font-lighttext-white animate-pulse leading-tight font-mont">
              About <span className="text-white font-thin">Me</span>
            </h1>
            <p className="text-lg mt-4 text-white">
              I'm <span className="text-white font-lightthin ">Arko</span>, a college student, dreamer, innovator, and aspiring aerospace engineer, committed to pushing the boundaries of the possible. Let's journey together into the Arkoverse!
            </p>
            <Link to="/projects">
              <button className="mt-8 px-6 py-3 bg-transparent text-white border-white border-[1px] hover:bg-white hover:text-black rounded-full font-medium shadow-lg transform hover:scale-110 transition duration-300">
                Explore My Work
              </button>
            </Link>
          </div>
          <div className="flex items-center justify-center w-96 h-96 rounded-full overflow-hidden shadow-xl border-[2px] bg-transparent border-white bg-center hover:scale-105 transform transition duration-500">
            <img
              src="https://i.imghippo.com/files/fsJm2995utk.jpeg"
              alt="Arko's Portrait"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-16 font-thin">
          <h2 className="relative text-3xl text-white mb-6">My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-base font-thin">
            {[
              "React",
              "JavaScript",
              "HTML & CSS",
              "Python",
              "AI Development",
              "CubeSat Design",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-lg p-6 text-center font-lightshadow-lg transform transition duration-300 overflow-hidden hover:scale-110 hover:bg-gray-800 hover:shadow-2xl"
              >
                <h3 className="text-lg font-lighttext-gray-100 truncate">
                  {skill}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center"> 
          <div className="timeline md:w-2/3 w-full"> 
            {timelineData.map((item, index) => (
              <div key={index} className="timeline-item ">
                <div className="timeline-content transform hover:scale-105 transition duration-300 relative">
                  <h2>{item.year}</h2> <p>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mb-16 relative z-10 p-8 rounded-lg text-center ">
          <h2 className="text-3xl text-white mb-6">Fun Facts 🌟</h2>
          <ul className="list-none pl-5 space-y-4">
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-lighttext-white">
                My favorite number is <span className="text-red-500">7</span>.
              </span>
            </li>
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-lighttext-white">
                I love chocolates 🍫.
              </span>
            </li>
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-lighttext-white">
                Dreaming of founding a space agency:{" "}
                <span className="text-red-400">Xpace</span>.
              </span>
            </li>
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-lighttext-white">
                I adore challenges and limitless possibilities!
              </span>
            </li>
          </ul>
        </div>

        <div className="max-w-6xl mx-auto px-6 mt-10 relative">
          {/* Header Section */}
          <header className="text-center mb-10">
            <h1 className="text-4xl font-light text-white font-mont">Arko's Resume</h1>
            <p className="mt-2 text-xl text-white">
              Aspiring aerospace engineer, passionate about space exploration and AI technology.
            </p>
          </header>

          {/* Experience Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-light text-white mb-6">Experience</h2>
            <div className="space-y-8">
              {/* Job 1 */}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-light  text-white">Web Development & Student</h3>
                  <p className="text-sm text-white">Freelancer | June 2023 - Present</p>
                </div>
                <div className="text-sm text-gray-400">Remote</div>
              </div>
              <ul className="list-disc pl-6 mt-4">
                <li>Developed and maintained web applications using React, JavaScript, and CSS</li>
                <li>Collaborated on multiple freelance projects for various clients</li>
                <li>Worked with APIs and data to create dynamic web applications</li>
              </ul>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-lighttext-white mb-6">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-3">
                <h3 className="text-lg font-thin">React</h3>
                <p className="text-sm text-gray-400">Building dynamic web applications</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:-rotate-3">
                <h3 className="text-lg font-thin">Python</h3>
                <p className="text-sm text-gray-400">Data science and automation scripts</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:rotate-3">
                <h3 className="text-lg font-thin">AI & Machine Learning</h3>
                <p className="text-sm text-gray-400">AI-driven projects and problem-solving</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:-rotate-3">
                <h3 className="text-lg font-thin">CubeSat Design</h3>
                <p className="text-sm text-gray-400">Design and prototype CubeSats</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
