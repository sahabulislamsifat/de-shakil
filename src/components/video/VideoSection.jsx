import React from "react";

const VideoSection = () => {
  return (
    <section className="bg-[#000000]">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex items-center justify-center h-full px-6 text-center pt-28">
          <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl leading-relaxed max-w-5xl mx-auto backdrop-blur-md bg-black/40 p-6">
            Where Innovation Meets Excellence! <br />
            Our design agency is dedicated to crafting exceptional digital
            experiences that captivate and inspire — bringing your vision to
            life with creativity and precision.
          </h1>
        </div>
        {/* Background YouTube Video */}
        <div className="relative h-screen w-full overflow-hidden bg-[#000000]">
          <div className="absolute inset-0 z-0">
            <video
              src="https://dzinr.co.in/wp-content/uploads/2023/08/DZINR-Final-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto rounded-lg pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
