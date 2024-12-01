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
      <div className="relative z-10 text-right text-white flex flex-col justify-center h-full mr-10">
        <h1 className="text-5xl md:text-7xl mb-4 font-space">
          Welcome <br />
          to <br /><span className="mb-0 relative  transition duration-[3s] after:block after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-white after:transition-all">Arkoverse</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mb-8 font-space text-right ml-auto  ">
          A universe of innovative ideas and limitless possibilities, crafted by
          Arko.
        </p>
        <button
          href="/projects"
          className="px-6 py-3 md:ml-24  rounded-md border-white border-2 bg-transparent text-md text-white  transition duration-300 font-space w-[350px] items-left hover:scale-110"
        >
          Explore My Projects
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
