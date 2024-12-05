import React from "react";

const Project1 = () => {
  return (
    <div className="bg-black text-white min-h-screen font-sciFi">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-purple-900 via-black to-gray-900 py-16 px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-widest text-cyan-400 glow">
          Project1
        </h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-300">
          Unveiling the Future of Sci-Fi Innovation
        </p>
      </header>

      {/* Features Section */}
      <section className="py-16 px-8">
        <h2 className="text-4xl font-bold text-cyan-400 glow mb-8 text-center">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card */}
          {["Quantum Technology", "AI Integration", "Interplanetary Communication"].map(
            (feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-2xl font-semibold text-cyan-300 mb-4">{feature}</h3>
                <p className="text-gray-400">
                  Experience cutting-edge advancements in {feature.toLowerCase()}.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-gradient-to-t from-gray-900 to-black py-12 px-8 text-center">
        <h2 className="text-3xl font-bold text-cyan-400 glow mb-6">
          Ready to Explore?
        </h2>
        <p className="text-gray-300 text-lg mb-8">
          Dive into the sci-fi universe with Project1 today!
        </p>
        <button className="px-6 py-3 rounded-md bg-cyan-400 text-black font-bold uppercase hover:bg-cyan-300 transition">
          Get Started
        </button>
      </footer>
    </div>
  );
};

export default Project1;
