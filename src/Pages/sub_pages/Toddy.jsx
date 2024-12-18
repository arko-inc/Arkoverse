import { Helmet } from "react-helmet";
import { color } from "framer-motion";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Toddy = () => {
  return (
    <>
      <Helmet>
        <title>Toddy - Deimos Rover Companion</title>
        <meta name="description" content="Meet Toddy, the frog-like rover companion designed for Deimos exploration, equipped with advanced features for long-term missions." />
        <meta name="keywords" content="Deimos, rover, space exploration, Toddy, Mars moons, low gravity, technology, space mission" />
        <meta name="author" content="Arko" />
        
        {/* Schema.org JSON-LD for SEO */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Meet Toddy: The Frog-Like Rover Companion for Deimos Exploration",
              "description": "Toddy is a unique frog-like rover designed to assist in the exploration of Deimos, utilizing low gravity for efficient hopping across its surface.",
              "author": {
                "@type": "Person",
                "name": "Arko"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Xpace"
              },
              "datePublished": "2024-12-17",
              "image": "https://science.nasa.gov/wp-content/uploads/2017/11/deimos-1920x1200-1.jpg?w=2048&format=webp"
            }
          `}
        </script>
      </Helmet>

      <div
        className="relative bg-cover bg-fixed text-white p-5 md:p-10 lg:p-20 h-max font-mont overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a]/5 via-black/60 to-gray-900/20 z-0"></div>

        {/* Header Section */}
        <header className="py-12 text-center relative">
          <h1 className="text-5xl font-thin tracking-wider animate__animated animate__bounceIn">
            Meet Toddy
            <i className="fa-solid fa-frog" style={{ color: "#fff" }}></i>
          </h1>
          <p className="text-2xl mt-4 tracking-wide font-thin">
            Your froggy rover companion for Deimos exploration.
          </p>
        </header>

        {/* Description Section */}
        <section className="px-2 sm:px-5 md:px-10 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            <div className="lg:w-1/2 z-30">
              <img
                src="https://science.nasa.gov/wp-content/uploads/2017/11/deimos-1920x1200-1.jpg?w=2048&format=webp"
                alt="Toddy"
                className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 relative md:ml-9">
              <h2 className="text-3xl md:text-4xl font-thin tracking-tight">
                What is Toddy?
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed font-thin text-justify">
                Toddy is a <strong>frog-like rover companion</strong> designed
                to explore the surface of <strong>Deimos</strong>, one of Mars’
                moons. Inspired by the hopping abilities of frogs, Toddy is
                engineered to use the unique conditions of Deimos' low gravity
                to its advantage, making it an ideal assistant for main rovers.
              </p>
              <p className="mt-6 text-base md:text-lg font-thin text-justify">
                Equipped with a top speed of <strong>1 m/s</strong>, Toddy is
                agile and quick, ready to scout difficult terrain, gather data,
                and assist the main rover. Its low-speed jump is designed to
                prevent it from escaping Deimos' gravity, ensuring it stays
                safely on the surface and can continue its missions without
                drifting off into space. 🌍🚀
              </p>
            </div>
          </div>
        </section>
        <section className="px-2 sm:px-5 md:px-10 py-10">
          <div className="flex md:flex-col  lg:flex-row justify-between items-center flex-col-reverse">
            <div className="lg:w-1/2 mt-10 lg:mt-0 relative lg:mr-9">
              <h2 className="text-3xl md:text-4xl font-thin tracking-tight">
                Why Toddy is Perfect for Deimos?
              </h2>
              <p className="mt-6 text-base md:text-lg leading-relaxed font-thin text-justify">
                Deimos, with its low gravity, offers a perfect environment for
                Toddy's design. Toddy can jump several meters at a time, making
                it capable of covering large distances while preserving energy.
                Since Deimos is only about 1/100th the gravity of Earth, Toddy’s
                jumps are much more efficient compared to what would be possible
                on Earth or Mars! 🚀🌑
              </p>
            </div>
            <div className="lg:w-1/2 z-30">
              <img
                src="https://science.nasa.gov/wp-content/uploads/2017/11/deimos-1920x1200-1.jpg?w=2048&format=webp"
                alt="Deimos Surface"
                className="w-full h-auto rounded-xl shadow-xl transform hover:scale-105 hover:-rotate-3 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="px-2 sm:px-5 md:px-10 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-1/2 z-30">
              <img
                src="https://science.nasa.gov/wp-content/uploads/2017/11/deimos-1920x1200-1.jpg?w=2048&format=webp"
                alt="Toddy"
                className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 hover:rotate-3 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 relative md:ml-9">
              <h2 className="text-3xl md:text-4xl font-thin tracking-tight">
                More Feature of Toddy
              </h2>
              <p className="mt-6 text-base md:text-lg font-thin text-justify">
                Additionally, Toddy is equipped with energy-harvesting
                technology, such as <strong>piezoelectric materials</strong> in
                its landing pads, to convert the energy from its landings into
                usable power. Combined with its <strong>solar panels</strong>,
                Toddy can stay powered up for extended missions without needing
                constant recharging, making it highly autonomous.
              </p>
            </div>
          </div>
        </section>

        <section className="px-2 sm:px-5 md:px-10 py-10">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="lg:w-1/2 mt-10 lg:mt-0 relative lg:mr-9">
              <h2 className="text-3xl md:text-4xl font-thin tracking-tight">
                What is Toddy?
              </h2>
              <p className="mt-6 text-base md:text-lg font-thin text-justify">
                Toddy’s design includes{" "}
                <strong>advanced cameras, LIDAR sensors</strong>, and
                <strong> thermal protection</strong> to ensure it can operate
                efficiently in Deimos' harsh environment. Whether hopping across
                the surface or assisting in data collection, Toddy will be an
                invaluable asset in the exploration of Deimos.
              </p>
              <p className="mt-6 text-base md:text-lg font-thin text-justify">
                With a top speed of <strong>1 m/s</strong>, Toddy is agile,
                efficient, and ready to help uncover the mysteries of Deimos,
                without fear of drifting off into space due to its
                well-calculated jump speed.
              </p>
            </div>

            <div className="lg:w-1/2 z-30">
              <img
                src="https://science.nasa.gov/wp-content/uploads/2017/11/deimos-1920x1200-1.jpg?w=2048&format=webp"
                alt="Toddy"
                className="w-full h-auto rounded-xl shadow-xl transform hover:scale-105 hover:-rotate-3 transition-transform duration-500 ease-in-out"
              />
            </div>
          </div>
        </section>

        <section className="px-2 sm:px-5 md:px-10 py-10 bg-transparent relative font-thin text-center">
  <div className="text-center">
    <h2 className="text-3xl md:text-5xl font-thin tracking-wider animate__animated animate__fadeInDown text-center">
      Toddy's Features in Action
    </h2>
    <p className="mt-6 md:text-xl tracking-wide">
      Explore how Toddy works in the harsh and mysterious environment of Deimos.
    </p>
  </div>

  {/* Features Cards */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Low Gravity on Deimos:</h3>
      <p className="mt-4 text-base md:text-md leading-relaxed text-justify">
        Deimos has only about 0.03 m/s² of surface gravity, which is about{" "}
        <span className="font-light">1/100th</span> of Earth's gravity and{" "}
        <span className="font-light">1/38th</span> of Mars' gravity. This{" "}
        <span className="font-light">Low Gravity</span> means that objects on Deimos
        experience much less downward pull. For Toddy, this is a significant
        advantage because it allows him to make efficient, high-flying hops across
        the surface.
      </p>
    </div>
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Jump Height Calculation:</h3>
      <p className="mt-4 text-base md:text-md leading-relaxed text-justify">
        The formula for the jump height (H) is: <br />
        <span className="font-light">H = (v²) / (2 * g)</span> where:
      </p>
      <ul className="mt-4 text-base md:text-md leading-relaxed text-justify">
        <li><strong>v</strong> is the initial velocity of the jump</li>
        <li><strong>g</strong> is the acceleration due to gravity (0.03 m/s² on Deimos)</li>
      </ul>
      <p className="mt-4 text-base md:text-md leading-relaxed text-justify">
        With minimal gravity, Toddy can achieve high jumps and cover large distances
        with reduced energy.
      </p>
    </div>
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Air Time</h3>
      <p className="mt-4 text-base md:text-lg leading-relaxed text-justify">
        By leveraging Deimos' unique gravity, Toddy can travel distances{" "}
        <strong>much farther</strong> than traditional rovers, saving energy and time.
        Toddy can jump up to <strong>166.67 meters</strong>, staying in the air for{" "}
        <strong>666.66 seconds,</strong> allowing it to cover long distances with
        minimal energy expenditure.
      </p>
    </div>
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Air Time Calculation:</h3>
      <p className="mt-4 text-base md:text-lg leading-relaxed">
        The time in the air (t) can be calculated using the formula:{" "}
        <span className="font-light">t = v / g</span> where:
      </p>
      <ul className="mt-4 text-base md:text-md leading-relaxed">
        <li><strong>v</strong> is the vertical speed</li>
        <li><strong>g</strong> is the gravity on Deimos (0.03 m/s²)</li>
      </ul>
      <p className="mt-4 text-base md:text-lg leading-relaxed">
        Toddy's ability to stay in the air for long durations allows for longer travel
        distances, maximizing exploration efficiency.
      </p>
    </div>
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Radiation Shielding</h3>
      <p className="mt-4 text-base md:text-lg leading-relaxed">
        Toddy’s <strong>advanced shielding system</strong> ensures that it stays
        protected from harmful space radiation, ensuring long-term durability and
        mission success. The rover's design incorporates radiation protection
        materials to shield sensitive components.
      </p>
    </div>
  </div>

  {/* Interactive Features */}
  <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Terrain Mapping</h3>
      <p className="mt-4 text-base md:text-lg leading-relaxed">
        Toddy uses <strong>advanced cameras and sensors</strong> to map Deimos’ surface,
        capturing key data points for future exploration and rover navigation. This
        data helps in planning future missions and ensuring safe movement for the rover.
      </p>
    </div>
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Environmental Sensing</h3>
      <p className="mt-4 text-base md:text-lg leading-relaxed">
        With the ability to measure <strong>radiation levels</strong>, temperature, and
        more, Toddy gathers crucial environmental data for the team. This information
        helps scientists understand the conditions on Deimos, aiding in planning
        future missions to Mars and beyond.
      </p>
    </div>
    <div className="bg-[#1a1a1a] p-6 md:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-in-out">
      <h3 className="text-xl md:text-2xl font-thin">Energy Efficiency</h3>
      <p className="mt-4 text-base md:text-lg leading-relaxed">
        Toddy operates with <strong>solar panels</strong> and a <strong>minimal energy
        footprint</strong>, making it an eco-friendly and sustainable solution for
        long-term missions. The rover's energy-efficient design allows it to work
        continuously without needing frequent recharges, maximizing its exploration
        capabilities.
      </p>
    </div>
  </div>
</section>

        {/* Carousel Section */}

        <div className="mb-16 relative z-10 p-8 rounded-lg  font-thin">
          <h2 className="text-3xl text-white mb-6 text-center">Fun Facts 🌟</h2>
          <ul className="list-none pl-5 space-y-4 text-center">
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-thin text-white">
                I got the Idea of Toddy from a frog{" "}
                <i className="fa-solid fa-frog" style={{ color: "#fff" }}></i>{" "}
                what was jumped over me and I was scared
              </span>
            </li>
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-thin text-white">
                Toddy jumps so much higher than a normal frog
              </span>
            </li>
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-thin text-white">
                Toddy doesn't looks like a frog
              </span>
            </li>
            <li className="p-4 transform hover:scale-105 transition duration-300">
              <span className="font-thin text-white">
                I adore challenges and limitless possibilities!
              </span>
            </li>
          </ul>
        </div>
       

      </div>
    </>
  );
};

export default Toddy;