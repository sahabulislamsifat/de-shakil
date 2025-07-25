import React from "react";
// import Navbar from "./../navbar/Navbar";
import ScrollIndicator from "../scrollIndicator/ScrollIndicator";
import heroImage from "../../assets/image/logo/bg.png";
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
        <h1 className="font-sfprobold font-[500px] text-white gap-4 flex flex-col text-3xl md:text-4xl lg:text-6xl tracking-wide">
          {/* Logo, Branding and Many More */}
          <p>Making your people</p>
          <p> pick you</p>
        </h1>
        <h3 className="font-sfprobold text-white px-72 text-2xl mb-2 mt-10">
          Thoughtful brand design for all-in people
        </h3>

        {/* Button group moved inside */}
        <div className="flex gap-4 mt-6">
          <a
            href="#contact"
            className="group border-2 px-6 py-2 rounded-sm flex items-center bg-[#1d4eff] border-[#1d4eff] hover:border-white text-white hover:bg-transparent hover:text-white duration-300"
          >
            Schedule a Call
          </a>
          <a
            href="#projects"
            className="group border-2 px-6 py-2 flex rounded-sm items-center text-white hover:bg-[#1d4eff] hover:border-[#1d4eff] duration-300"
          >
            Stuff I do
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
