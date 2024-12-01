import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' )",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white flex flex-col justify-center items-center h-full">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          Welcome to Arkoverse 🌌
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto mb-8">
          A universe of innovative ideas and limitless possibilities, crafted by
          Arko. 🚀✨
        </p>
        <a
          href="#projects"
          className="px-6 py-3  hover:bg-gray-100 backdrop-blur-md bg-white/5  shadow-lg  text-white hover:text-black text-lg font-semibold rounded-md transition duration-300"
        >
          Explore My Projects
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
