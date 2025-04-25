import React from "react";
import { FaGem, FaBoxOpen, FaPalette, FaPenNib } from "react-icons/fa";
import ServiceCard from "./ServiceCard";
import { ArrowRight } from "lucide-react";

const OurServices = () => {
  const services = [
    {
      icon: <FaPenNib className="text-orange-500 text-2xl" />,
      title: "Logo Designing",
      description:
        "Transform your brand's vision into a captivating masterpiece that speaks volumes with just a glance. Let your logo do the talking, while you do the business!",
    },
    {
      icon: <FaGem className="text-orange-500 text-2xl" />,
      title: "Branding",
      description:
        "Unleash the magic of storytelling as we craft a brand experience that sparks love at first sight. Stand out, stay memorable, and conquer the hearts of your audience!",
    },
    {
      icon: <FaBoxOpen className="text-orange-500 text-2xl" />,
      title: "Packaging Design",
      description:
        "Unwrap success with sensational packaging designs that make your products pop! Get ready to leave a lasting impression and make your competition green with envy.",
    },
    {
      icon: <FaPalette className="text-orange-500 text-2xl" />,
      title: "Graphic Design",
      description:
        "From pixel to perfection, our design wizards will turn your ideas into visual wonders. Get ready to wow the world with eye-catching graphics that steal the spotlight!",
    },
  ];

  return (
    <section className="bg-black text-white px-6 py-12">
      <div className="max-w-[1000px] mx-auto">
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-10">
          <div className="flex gap-5 md:gap-3">
            <h2 className="text-4xl sm:text-5xl font-medium leading-tight">
              Our <br className="sm:hidden" /> Services
            </h2>
            <div className="text-white text-4xl sm:ml-4 mt-2">
              <ArrowRight size={88} className="text-gray-400 mt-1"></ArrowRight>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service}></ServiceCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
