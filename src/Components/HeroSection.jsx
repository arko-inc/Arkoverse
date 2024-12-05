import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <section
        className="relative flex flex-col justify-center items-end h-screen bg-cover bg-center "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        }}
      >
        {/* Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/5 via-black/40 to-gray-900/10 z-10"></div>

        {/* Content */}
        <div className="relative z-20 p-5 max-w-2xl text-right text-white font-mont">
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Welcome to <br />
            <span className="relative inline-block after:block after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full">
              Arkoverse
            </span>
          </h1>
          <p className="text-lg sm:text-xl mb-8 font-mont">
            A universe of a dreamer who wants to step on Mars
          </p>
          <Link to="/projects">
            <button className="px-6 py-3 rounded-full bg-transparent backdrop-blur-md border-[.5px] border-white text-white hover:bg-white hover:text-black transition duration-300">
              Explore My Projects
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
