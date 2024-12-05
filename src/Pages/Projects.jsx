import React from "react";
import { Link } from "react-router-dom"; // Import Link

const projects = [
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://via.placeholder.com/300",
    link: "/project1",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    imageUrl: "https://via.placeholder.com/300",
    link: "/project1",
  },
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://via.placeholder.com/300",
    link: "/project1",
  },{
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://via.placeholder.com/300",
    link: "/project1",
  },{
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://via.placeholder.com/300",
    link: "/project1",
  },{
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://via.placeholder.com/300",
    link: "/project1",
  },
];

const Projects = () => {
  return (
    <div
      className="relative bg-cover bg-fixed text-white p-5 md:p-10 lg:p-20 h-max"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      {/* Darker overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-pulse font-conthrax">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 font-nasa">
            A showcase of my work and creations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-80 backdrop-blur-lg rounded-xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-48 object-cover"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2 font-nasa">{project.title}</h2>
                <p className="text-gray-400 mb-4 font-nasa">{project.description}</p>
                <Link
                  to={project.link}
                  className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-red-600 to-indigo-600 text-white hover:from-indigo-700 hover:to-red-600 transition duration-300 focon"
                >
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
