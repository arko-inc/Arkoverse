import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselWithText = ({ images, headers, texts, title, description }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="px-2 sm:px-5 md:px-10 py-10 relative">
      <div className="text-center">
        <h2 className="text-3xl md:text-5xl font-thin tracking-wider animate__animated animate__fadeInDown">
          {title}
        </h2>
        <p className="mt-6 text-lg md:text-xl tracking-wide">
          {description}
        </p>
      </div>
      <div className="mt-12 flex flex-col md:flex-row">
        <div className="relative z-10 w-full md:w-1/2">
          <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            showStatus={false}
            showIndicators={false} // Hides the dots
            interval={4000}
            onChange={(index) => setCurrentSlide(index)}
            className="custom-carousel"
          >
            {images.map((image, index) => (
              <div key={index} className="fade-in">
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-64 md:h-96 object-contain"
                />
              </div>
            ))}
          </Carousel>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center mt-4 md:mt-0 fade-in">
          <h3 className="text-xl md:text-2xl font-semibold" key={`header-${currentSlide}`}>
            {headers[currentSlide]}
          </h3>
          <p className="text-lg md:text-xl tracking-wide fade-in" key={`text-${currentSlide}`}>
            {texts[currentSlide]}
          </p>
        </div>
      </div>
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
