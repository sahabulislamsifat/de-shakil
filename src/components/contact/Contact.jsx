import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-4xl text-center text-white py-20">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide mb-6">
          Let's Work Together
        </h2>

        {/* Paragraph */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl mb-10 leading-relaxed">
          I’m currently taking on new projects and would love to hear about
          yours. Let’s build something great together.
        </p>

        {/* Button */}
        <a
          href="mailto:your@email.com"
          className="inline-block border border-white text-white px-6 py-3 rounded-full transition duration-300 hover:bg-white hover:text-black"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Contact;
