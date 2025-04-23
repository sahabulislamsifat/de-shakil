import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-[#000000]">
      <div className="flex items-center justify-center h-full px-6 text-center pt-28">
        <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl leading-relaxed max-w-5xl mx-auto backdrop-blur-md bg-black/40 p-6 rounded-2xl shadow-lg">
          Where Innovation Meets Excellence! <br />
          Our design agency is dedicated to crafting exceptional digital
          experiences that captivate and inspire — bringing your vision to life
          with creativity and precision.
        </h1>
      </div>
      {/* Background YouTube Video */}
      <div className="relative h-screen w-full overflow-hidden bg-[#000000]">
        <div className="absolute inset-0 z-0">
          <iframe
            className="w-8/12 mx-auto h-full object-cover pointer-events-none"
            src="https://www.youtube.com/embed/NLYbA1HGHUM?autoplay=1&mute=1&loop=1&playlist=NLYbA1HGHUM&controls=0&modestbranding=1&showinfo=0&rel=0"
            title="YouTube video background"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
