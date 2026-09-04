import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import banner1 from "../../assets/dami_4.jpg";
import banner2 from "../../assets/dami_2.jpg";
import banner3 from "../../assets/dami_3.jpg";
import banner4 from "../../assets/dami_1.jpg";

const slides = [
  {
    id: 1,
    title: "Raised Right. Tastes Better.",
    subtitle:
      "Premium ranch-raised beef, carefully produced with quality and responsible ranching at heart.",
    buttonText: "Shop Beef",
    image: banner1,
  },
  {
    id: 2,
    title: "From Our Ranch to Your Table",
    subtitle:
      "Quality beef raised with care and delivered straight to your kitchen.",
    buttonText: "Explore Our Beef",
    image: banner2,
  },
  {
    id: 3,
    title: "Quality You Can Taste",
    subtitle:
      "From tender steaks to family favorites, discover premium cuts from Red Oak Ranch.",
    buttonText: "Shop Our Cuts",
    image: banner3,
  },
  {
    id: 4,
    title: "Good Land. Good Cattle. Good Beef.",
    subtitle:
      "We believe great beef starts with responsible ranching and a commitment to quality.",
    buttonText: "Our Story",
    image: banner4,
  },
];

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev === slides.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Previous slide
  const previousSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        return slides.length - 1;
      }

      return prev - 1;
    });
  };

  // Next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === slides.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden">
      
      {/* Background Image */}
      <img
        key={slide.id}
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
        <div className="max-w-4xl text-white">

          <h1 className="font-serif text-4xl font-medium sm:text-5xl md:text-6xl lg:text-7xl">
            {slide.title}
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg md:text-xl">
            {slide.subtitle}
          </p>

          <div className="mt-8">
            <Link
              to="/shop"
              className="inline-block border-2 border-white bg-white px-7 py-3 text-lg font-medium text-black transition duration-300 hover:bg-transparent hover:text-white"
            >
              {slide.buttonText}
            </Link>
          </div>

        </div>
      </div>

      {/* Previous */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-black transition hover:bg-white"
      >
        &#8592;
      </button>

      {/* Next */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-5 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-2xl text-black transition hover:bg-white"
      >
        &#8594;
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((item, index) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-3 bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;