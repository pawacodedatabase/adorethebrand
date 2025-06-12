import React from 'react';
import bgvid from '../../../src/assets/Adore The Brand.mp4';
import bgpic from '../../../src/assets/Adore The Brand.jpg';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[80vh]">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster={bgpic} // Fallback image
      >
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
   
      {/* Button at the bottom */}
      <div className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 z-20">
      <Link to="/shop" 
          className="bg-transparent border-2 px-4 py-2 border-black rounded-md text-xl font-thin  hover:bg-[black] hover:text-white transition duration-300"
        >
          Shop Now
       </Link>
      </div>
    </section>
  );
};

export default HeroSection;
