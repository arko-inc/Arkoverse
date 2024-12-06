import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselWithText = ({ images, headers, texts, title, description }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="px-2 sm:px-5 md:px-10 py-10 relative">
      {/* Title and Description Section */}
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-thin tracking-wider animate__animated animate__fadeInDown">
          {title}
        </h2>
        <p className="mt-6 text-lg md:text-xl tracking-wide font-thin">
          {description}
        </p>
      </div>

      {/* Carousel and Text Section */}
      <div className="mt-12 flex flex-col md:flex-row">
        {/* Carousel Section */}
        <div className="relative z-10 w-full md:w-1/2 shadow-2xl">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showIndicators={false} // Hides the dots
            interval={10000}
            onChange={(index) => setCurrentSlide(index)}
            className="custom-carousel rounded-lg"
          >
            {images.map((image, index) => (
              <div key={index} className="fade-in">
                {/* Div wrapper around image with rounded corners */}
                <div className="w-full h-64 md:h-auto shadow-black shadow-lg overflow-hidden rounded-3xl">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </Carousel>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center mt-4 md:mt-0 fade-in font-thin">
          <h3 className="text-xl md:text-2xl font-thin fade-in" key={`header-${currentSlide}`}>
            {headers[currentSlide]}
          </h3>
          <br />
          <p className="text-lg md:text-xl tracking-wide fade-in font-thin" key={`text-${currentSlide}`}>
            {texts[currentSlide]}
          </p>
        </div>
      </div>

      {/* Keyframe Animation */}
      <style>{`
        .fade-in {
          animation: fadeInAnimation 1s ease-in;
        }

        @keyframes fadeInAnimation {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default CarouselWithText;
