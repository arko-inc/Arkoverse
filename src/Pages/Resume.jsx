// Resume.js
import React from "react";

const Resume = () => {
  return (
    <div className="relative bg-cover bg-fixed text-white p-5 md:p-10 lg:p-20 h-max font-mont overflow-hidden"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
    }}>
    <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/50 via-black/60 to-gray-900/20 z-0"></div>
      <div className="max-w-6xl mx-auto px-6 mt-10 relative">
        {/* Header Section */}
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white font-mont">Arko's Resume</h1>
          <p className="mt-2 text-xl text-white">
            Passionate about aerospace engineering, AI, and space exploration 
          </p>
        </header>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Web dev & Student</h3>
                <p className="text-sm text-white">XYZ Company | June 2023 - Present</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-8">
            {/* Degree 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">SSC Gpa-5</h3>
                <p className="text-sm text-white">wants to get chance in MIT | Expected Graduation: 2029</p>
              </div>
              <div className="text-sm text-gray-400">Cambridge, MA</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-white">React</h4>
              <p className="text-sm text-white">Building modern web apps with React</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-white">Python</h4>
              <p className="text-sm text-white">Data analysis, automation, and machine learning</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-white">JavaScript</h4>
              <p className="text-sm text-white">Frontend and backend development</p>
            </div>
            <div className="bg-gray-800 p-4 rounded-md text-center">
              <h4 className="text-xl font-semibold text-white">Space Engineering</h4>
              <p className="text-sm text-white">Designing and testing aerospace systems</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
          <div className="space-y-8">
            {/* Project 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Interplanetary Social Media Platform</h3>
                <p className="text-sm text-white">2024 - Ongoing</p>
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
          <h2 className="text-3xl font-bold text-white mb-6">Contact</h2>
          <p className="text-lg text-white">Feel free to get in touch with me! I'm always open to new opportunities and collaborations. 🌟</p>
          <div className="mt-6">
            <a
              href="mailto:arko@example.com"
              className="text-lg text-white hover:text-slate-600 transition"
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
