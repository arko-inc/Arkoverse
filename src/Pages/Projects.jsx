import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const projects = [
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/toddy",
  },
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },

  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },
  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },

  {
    title: "Toddy!",
    description: "The funniest but coolest robot I have ever made1",
    imageUrl:
      "https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200",
    link: "/projects/project1",
  },
  // Add more projects here as needed
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
      {/* Helmet for SEO */}
      <Helmet>
        <title>Projects | Arkoverse</title>
        <meta
          name="description"
          content="Explore Arko's projects, including innovative robots like Toddy, designed to showcase creativity and groundbreaking ideas."
        />
        <meta
          name="keywords"
          content="projects, Arko, Toddy, innovation, robots, portfolio, Arkoverse"
        />
        <meta name="author" content="Arko" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Projects by Arko",
          "description": "A showcase of innovative projects by Arko.",
          "itemListElement": projects.map((project, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: project.title,
            description: project.description,
            url: `https://arkoverse.example.com${project.link}`, // Replace with your site URL
          })),
        })}
      </script>

      {/* Darker overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/30 via-black/60 to-gray-900/20 z-0"></div>

      {/* Content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-thin mb-4 animate-pulse font-mont">
            My Projects
          </h1>
          <p className="text-lg sm:text-xl text-gray-100 font-mont font-thin">
            A showcase of my work and creations
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Link to={project.link} key={index} className="">
              <div className="bg-[#1a1a1a] bg-opacity-10 border-white border-[.5px] backdrop-blur-md rounded-xl overflow-hidden transform transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-3 hover:shadow-md h-56 md:h-72 hover:shadow-white">
                <img
                  className="w-full h-28 object-cover md:h-48"
                  src={project.imageUrl}
                  alt={project.title}
                />
                <div className="pt-5 px-2 md:p-2">
                  <h1 className="md:text-2xl text-sm font-thin font-mont">
                    {project.title}
                  </h1>
                  <p className="text-gray-400 mb-4 font-mont text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
