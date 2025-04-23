import React from "react";
// import Navbar from "./../navbar/Navbar";
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import heroImage from "../../assets/image/bg-hero.jpg";
// import BottomNavbar from "../bottom-navbar/BottomNavbar";

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
      </div>

      {/* Main Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white font-serif text-3xl md:text-4xl lg:text-6xl tracking-wide">
          Designs That Speak for Your Brand
        </h1>
        <h3 className="text-white font-serif text-3xl my-2">
          Logos, Branding, and Visual Content that Converts
        </h3>

        {/* Button group moved inside */}
        <div className="flex gap-4 mt-6">
          <a
            href="#contact"
            className="group border-2 px-6 py-2 rounded-sm flex items-center bg-[#EC4900] border-[#EC4900] hover:border-white text-white hover:bg-transparent hover:text-white duration-300"
          >
            Schedule a Call
          </a>
          <a
            href="#projects"
            className="group border-2 px-6 py-2 flex rounded-sm items-center text-white hover:bg-[#EC4900] hover:border-[#EC4900] duration-300"
          >
            Our Work
          </a>
        </div>
      </div>

      {/* Scroll Arrow */}
      <div className="relative z-10">
        <ScrollIndicator />
      </div>
      {/* <BottomNavbar></BottomNavbar> */}
    </section>
  );
};

export default Hero;
