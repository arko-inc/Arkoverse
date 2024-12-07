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
            Aspiring aerospace engineer, passionate about space exploration and AI technology.
          </p>
        </header>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Experience</h2>
          <div className="space-y-8">
            {/* Job 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">Web Development & Student</h3>
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

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Education</h2>
          <div className="space-y-8">
            {/* Degree 1 */}
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-semibold text-white">High School Student (SSC)</h3>
                <p className="text-sm text-white">Bangladesh | Expected Graduation: 2025</p>
              </div>
              <div className="text-sm text-gray-400">Bangladesh</div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">React</h3>
              <p className="text-sm text-gray-400">Building dynamic web applications</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Python</h3>
              <p className="text-sm text-gray-400">Data science and automation scripts</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">AI & Machine Learning</h3>
              <p className="text-sm text-gray-400">AI-driven projects and problem-solving</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">CubeSat Design</h3>
              <p className="text-sm text-gray-400">Design and prototype CubeSats</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Projects</h2>
          <ul className="list-disc pl-6 space-y-4">
            <li><span className="text-white">Developed a rocket prototype as part of my future space agency, Xpace.</span></li>
            <li><span className="text-white">Created a concept for an interplanetary social media platform.</span></li>
            <li><span className="text-white">Built AI-driven applications for CubeSat navigation.</span></li>
          </ul>
        </section>

        <footer className="text-center py-8 text-gray-400">
          <p>&copy; 2024 Arko. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
