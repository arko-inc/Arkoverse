// Resume.js
import React from "react";

const Resume = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen py-10 font-nasa">
      <div className="max-w-6xl mx-auto px-6 mt-10">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-purple-400 font-conthrax">Arko's Resume</h1>
          <p className="mt-2 text-xl text-gray-500">
            Passionate about aerospace engineering, AI, and space exploration 
          </p>
        </header>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Experience</h2>
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Web dev & Student</h3>
                <p className="text-sm text-gray-500">XYZ Company | June 2023 - Present</p>
              </div>
              <div className="text-sm text-gray-400">Remote</div>
            </div>
            <ul className="list-disc pl-6 mt-4">
              <li>Developed and maintained web applications using React, Node.js, and MongoDB</li>
              <li>Worked in an agile team environment, collaborating with cross-functional teams</li>
              <li>Contributed to the integration of REST APIs for real-time data updates</li>
            </ul>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Education</h2>
          <div className="space-y-8">
            {/* Degree 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">SSC Gpa-5</h3>
                <p className="text-sm text-gray-500">wants to get chance in MIT | Expected Graduation: 2029</p>
              </div>
              <div className="text-sm text-gray-400">Cambridge, MA</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-purple-400">React</h4>
              <p className="text-sm text-gray-500">Building modern web apps with React</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-purple-400">Python</h4>
              <p className="text-sm text-gray-500">Data analysis, automation, and machine learning</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-purple-400">JavaScript</h4>
              <p className="text-sm text-gray-500">Frontend and backend development</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-purple-400">Space Engineering</h4>
              <p className="text-sm text-gray-500">Designing and testing aerospace systems</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Projects</h2>
          <div className="space-y-8">
            {/* Project 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Interplanetary Social Media Platform</h3>
                <p className="text-sm text-gray-500">2024 - Ongoing</p>
              </div>
              <div className="text-sm text-gray-400">Space & AI</div>
            </div>
            <ul className="list-disc pl-6 mt-4">
              <li>Developing a scalable AI-powered social media platform for Earth and Mars</li>
              <li>Integrating real-time communication features between Earth and Mars</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">Contact</h2>
          <p className="text-lg text-gray-500">Feel free to get in touch with me! I'm always open to new opportunities and collaborations. 🌟</p>
          <div className="mt-6">
            <a
              href="mailto:arko@example.com"
              className="text-lg text-purple-400 hover:text-purple-600 transition"
            >
              Email: arko@example.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;
