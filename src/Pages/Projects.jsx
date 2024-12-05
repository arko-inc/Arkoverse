import React from "react";
import { Link } from "react-router-dom"; // Import Link

const projects = [
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made",
    imageUrl: "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/toddy",
  },
  {
    title: "Project 2",
    description: "A brief description of Project 2",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
    link: "/project1",
  },
  {
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
    link: "/project1",
  },{
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
    link: "/project1",
  },{
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
    link: "/project1",
  },{
    title: "Project 1",
    description: "A brief description of Project 1",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg",
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/30 via-black/60 to-gray-900/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-pulse font-mont">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 font-mont">
            A showcase of my work and creations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] bg-opacity-10  border-white border-[.5px] backdrop-blur-md  rounded-xl overflow-hidden  transform transition duration-500 hover:scale-105 hover:shadow-md hover:shadow-white"
            >
              <img
                className="w-full h-48 object-cover"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="p-5">
                <h2 className="text-2xl font-bold mb-2 font-mont">{project.title}</h2>
                <p className="text-gray-400 mb-4 font-mont">{project.description}</p>
                <Link
                  to={project.link}
                  className="inline-block px-6 py-3 rounded-full border-[1px] bg-transparent text-white border-white transition duration-300 focon"
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
