import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* Helmet for SEO */}
      <Helmet>
        <title>Arkoverse | Welcome to Arko's Universe</title>
        <meta
          name="description"
          content="Welcome to Arkoverse, the personal universe of Arko—a dreamer and inventor dedicated to pioneering humanity's journey to Mars and creating a legacy of innovation."
        />
        <meta
          name="keywords"
          content="Arkoverse, Arko, Mars exploration, innovation, projects, space engineering, portfolio"
        />
        <meta name="author" content="Arko" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Arko",
          "description":
            "Arko is a dreamer and inventor dedicated to unlocking the secrets of Mars and creating a legacy of innovation.",
          "url": "https://arkoverse.example.com", // Replace with your actual site URL
          "sameAs": [
            "https://www.linkedin.com/in/your-profile", // Replace with your LinkedIn URL
            "https://twitter.com/your-profile", // Replace with your Twitter URL
          ],
          "jobTitle": "Inventor and Space Enthusiast",
          "knowsAbout": ["Mars", "Space Exploration", "Innovation", "Engineering"],
        })}
      </script>

      {/* Hero Section */}
      <section
        className="relative flex flex-col justify-center items-end h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundAttachment: "fixed", // Keeps the background fixed while scrolling
        }}
      >
        {/* Transparent Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/10 via-black/40 to-gray-900/30 z-10"></div>

        {/* Content */}
        <div className="relative z-20 p-5 sm:px-10 max-w-3xl text-right text-white font-mont">
          <h1 className="text-4xl sm:text-6xl font-thin mb-4 leading-tight">
            Welcome to <br />
            <span className="relative inline-block after:block after:absolute after:right-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-white after:transition-all hover:after:w-full">
              Arkoverse
            </span>
          </h1>
          <p className="text-base sm:text-base mb-8 font-mont font-light leading-relaxed">
            I’m{" "}
            <span className="font-bold hover:underline hover:scale-105 transition-all duration-300">
              Arko
            </span>
            —a dreamer and inventor, driven by a vision to pioneer humanity’s
            journey to the Martian surface. My life’s mission is to dedicate
            myself to unlocking the secrets of{" "}
            <span className="font-bold">Mars</span> and leaving a lasting legacy
            of innovation and exploration.
          </p>

          <Link to="/projects">
            <button className="px-12 py-3 rounded-full bg-transparent backdrop-blur-md border-[.5px] border-white text-white hover:bg-white hover:text-black transition duration-300 text-sm">
              Explore Me
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
