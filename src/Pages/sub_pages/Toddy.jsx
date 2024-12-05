import React from 'react';
import { Link } from 'react-router-dom';

const Toddy = () => {
  return (
    <div className="relative bg-cover bg-fixed text-white p-5 md:p-10 lg:p-20 h-max font-mont overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/5 via-black/60 to-gray-900/20 z-0"></div>
      <header className="py-12 text-center relative">
        <h1 className="text-5xl font-extrabold tracking-wider animate__animated animate__bounceIn">Meet Toddy </h1>
        <p className="text-2xl mt-4 tracking-wide">Your froggy rover companion for Deimos exploration.</p>
      </header>

      <section className="px-2 sm:px-5 md:px-10 py-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="lg:w-1/2 z-30">
            <img src="https://science.nasa.gov/wp-content/uploads/2024/06/ingenuity-topiccard-3x2-1.jpg?w=1200" alt="Toddy" className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out" />
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0 relative md:ml-9">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What is Toddy?</h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed">
              Toddy is a <strong>frog-like rover companion</strong> designed for exploring the surface of <strong>Deimos</strong>, one of Mars’ moons. It will assist the main rover by hopping around and scouting terrain, all while using Deimos' low gravity to its advantage!
            </p>
            <p className="mt-6 text-base md:text-lg">
              With a top speed of <strong>1 m/s</strong>, Toddy is agile, efficient, and ready to help uncover the mysteries of Deimos, without fear of drifting off into space due to its well-calculated jump speed.
            </p>
          </div>
        </div>
      </section>

      <section className="px-2 sm:px-5 md:px-10 py-10 bg-transparent relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-thin tracking-wider animate__animated animate__fadeInDown">Toddy's Features in Action</h2>
          <p className="mt-6  text-thin md:text-xl tracking-wide">Explore how Toddy works in the harsh and mysterious environment of Deimos.</p>
        </div>

        {/* Features Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-xl md:text-2xl font-thin">Agile Jumps</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Toddy uses the low gravity of Deimos to perform controlled, <strong>efficient jumps</strong> that let it scout the terrain without losing control.
            </p>
          </div>
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-xl md:text-2xl font-thin">Low Gravity Mastery</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              By leveraging Deimos' unique gravity, Toddy can travel distances <strong>much farther</strong> than traditional rovers, saving energy and time.
            </p>
          </div>
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-xl md:text-2xl font-thin">Radiation Shielding</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Toddy’s <strong>advanced shielding system</strong> ensures that it stays protected from harmful space radiation, ensuring long-term durability and mission success.
            </p>
          </div>
        </div>

        {/* Interactive Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-xl md:text-2xl font-thin">Terrain Mapping</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Toddy uses <strong>advanced cameras and sensors</strong> to map Deimos’ surface, capturing key data points for future exploration and rover navigation.
            </p>
            <button className="mt-4 bg-white text-black py-2 px-4 md:px-6 rounded-full transform hover:scale-105 transition-transform duration-500 ease-in-out">
              See Data
            </button>
          </div>
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-xl md:text-2xl font-thin">Environmental Sensing</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              With the ability to measure <strong>radiation levels</strong>, temperature, and more, Toddy gathers crucial environmental data for the team.
            </p>
            <button className="mt-4 bg-white text-black py-2 px-4 md:px-6 rounded-full transform hover:scale-105 transition-transform duration-500 ease-in-out">
              Learn More
            </button>
          </div>
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
            <h3 className="text-xl md:text-2xl font-thin">Energy Efficiency</h3>
            <p className="mt-4 text-base md:text-lg leading-relaxed">
              Toddy operates with <strong>solar panels</strong> and a <strong>minimal energy footprint</strong>, making it an eco-friendly and sustainable solution for long-term missions.
            </p>
            <button className="mt-4 bg-white text-black py-2 px-4 md:px-6 rounded-full transform hover:scale-105 transition-transform duration-500 ease-in-out">
              Discover How
            </button>
          </div>
        </div>

        {/* Action Button Section */}
  
      
      </section>
    </div>
  );
};

export default Toddy;
