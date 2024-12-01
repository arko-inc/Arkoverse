import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "Reusable Rocket Engine",
      description:
        "A project focused on designing a reusable rocket engine that can send payloads to orbit at a lower cost. The aim is to make space travel more sustainable and affordable.",
      image: "",
      link: "#",
    },
    {
      title: "CubeSat Launch System",
      description:
        "Developing a cost-effective CubeSat launch system, focusing on making small-scale rockets for deploying nanosatellites to orbit.",
      image: "",
      link: "#",
    },
    {
      title: "AI-Driven Space Platform",
      description:
        "An AI-based system for autonomous space operations, which will handle everything from satellite navigation to resource management on Mars and the Moon.",
      image: "",
      link: "#",
    },
    {
      title: "Interplanetary Fuel System",
      description:
        "A concept for transporting fuel between planets using a tether method, aimed at making space exploration more feasible and efficient by reducing fuel transport costs.",
      image: "",
      link: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-extrabold mb-8">My Projects 🚀</h2>
        <p className="text-lg mb-12">
          Here's a selection of some of the projects I've worked on. Each one represents my passion for space exploration, engineering, and technology. Explore below to see how I'm working to shape the future! 🌠
        </p>
        
        {/* Project List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-black border-white border-[2px]   p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-6"
              />
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-500 font-semibold transition duration-300"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
