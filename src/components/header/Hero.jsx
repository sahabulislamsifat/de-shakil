import React from "react";
// import Navbar from "./../navbar/Navbar";
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import heroImage from "../../assets/image/bg-hero.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="hero"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-50" /> */}
      </div>

      {/* Navbar */}
      {/* <div className="relative z-10">
        <Navbar />
      </div> */}

      {/* Main Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        {/* <h1 className="text-white font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide">
          DE <span className="text-gray-300">SHAKIL</span>
        </h1> */}
        <h1 className="text-white font-serif text-3xl  md:text-4xl lg:text-6xl tracking-wide">
          Designs That Speak for Your Brand
        </h1>
        <h3 className="text-white font-serif text-3xl my-2">
          Logos, Branding, and Visual Content that Converts
        </h3>
      </div>

      {/* Scroll Arrow */}
      <div className="relative z-10">
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
