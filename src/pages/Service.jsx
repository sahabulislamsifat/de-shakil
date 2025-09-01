import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Logo Design",
    subtitle: ["Branding", "Packaging", "Website design", "Print Design"],
    description:
      "No matter the size of your brand, we design logos that are clear, unique and built to last. Our process is thoughtful and collaborative. We dive into your brand, understand what makes it special and turn that into a logo that looks great and feels right. We make sure it works across everything - your website, packaging, social media and more.",
    images: [
      "https://wallpapers.com/images/hd/zelda-blue-vector-art-2ayqaizaron8l3or.jpg",
      "img2",
    ],
    features: [
      "Discover and brand alignment",
      "Moodboard and creative direction",
      "Typography and symbol design",
      "Several unrefined versions",
      "Usage guidelines and file export",
      "Logo orientation (optional)",
    ],
  },
  {
    id: 2,
    title: "Branding",
    subtitle: ["Logo Design", "Packaging", "Website design", "Print Design"],
    description:
      "A strong brand is the full picture. We create visual systems that bring your brand to life and make it easy to recognize everywhere. From colors and fonts to icons, layouts and rules for using everything right, we make sure your brand feels consistent, confident and true to who you are.",
    images: ["img1", "img2", "img3", "img4"],
    features: [
      "Brand strategy & positioning",
      "Color palettes & typography",
      "Visual language & icons",
      "Design system & guidelines",
      "Brand book & guidelines",
      "Application mockups",
    ],
  },
  {
    id: 3,
    title: "Packaging",
    subtitle: ["Logo Design", "Branding", "Website design", "Print Design"],
    description:
      "A strong brand is the full picture. We create visual systems that bring your brand to life and make it easy to recognize everywhere. From colors and fonts to icons, layouts and rules for using everything right, we make sure your brand feels consistent, confident and true to who you are.",
    images: ["img1"],
    features: [
      "Structural packaging consultation",
      "Label and surface design",
      "Typography and material research",
      "Mockups and print-ready files",
      "Unboxing experience",
      "Coordination with printers",
    ],
  },
  {
    id: 4,
    title: "Website design",
    subtitle: ["Logo Design", "Branding", "Packaging", "Print Design"],
    description:
      "Your packaging is often the first thing people notice, so it has to make a great impression. We design packaging that looks good, feels right and reflects your brand clearly. Whether it's for shelves, unboxing videos, or online stores, our focus is on creating designs that grab attention and stand out in a crowded market.",
    images: ["img1"],
    features: [
      "UX strategy & wireframing",
      "UI design & prototyping",
      "Frontend development",
      "Responsive & mobile optimization",
      "CMS integration (WordPress or Webflow)",
      "SEO & launch support",
    ],
  },
  {
    id: 5,
    title: "Print Design",
    subtitle: ["Logo Design", "Branding", "Packaging", "Website design"],
    description:
      "We build websites that not only look great but also work smoothly and load fast.Every site is designed to reflect your brand, feel good to use and help you reach your goals, whether that's getting more clicks or sales",
    images: ["img1", "img2", "img3", "img4"],
    features: [
      "Brochure & flyer design",
      "Business cards & stationery",
      "Posters & banners",
      "Editorial & magazine layouts",
      "Print-ready artwork setup",
      "Coordination with printers",
    ],
  },
];

const ImageLayout = ({ service }) => {
  // 1. Logo Design → 5 no service এর proportion মতো
  if (service.id === 1) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Left: 2 small images stacked */}
        <div className="flex flex-col gap-4">
          {service.images.slice(0, 2).map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-300 aspect-square flex items-center justify-center"
            >
              Small {idx + 1}
            </div>
          ))}
        </div>
        {/* Right: 1 big image */}
        <div className="bg-gray-300 aspect-video sm:aspect-auto sm:h-full flex items-center justify-center">
          Big Image
        </div>
      </div>
    );
  }

  // 2. Branding → 2x2 grid
  if (service.id === 2) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {service.images.map((_, idx) => (
          <div
            key={idx}
            className="bg-gray-300 aspect-square flex items-center justify-center"
          >
            Image {idx + 1}
          </div>
        ))}
      </div>
    );
  }

  // 3 & 4. Packaging & Website → 1 big image (lomba)
  if (service.id === 3 || service.id === 4) {
    return (
      <div className="h-48 sm:h-64 md:h-[332px] bg-gray-300 flex items-center justify-center">
        Big Image
      </div>
    );
  }

  // 5. Print Design → reverse left-to-right
  if (service.id === 5) {
    return (
      <div className="grid grid-cols-2 gap-4">
        {/* Top row: right image first, left empty space */}
        <div className="bg-transparent hidden sm:block"></div>
        <div className="bg-gray-300 aspect-square flex items-center justify-center col-span-2 sm:col-span-1">
          Img 1
        </div>

        {/* Bottom row: reverse order */}
        {service.images
          .slice(1, 3)
          .reverse()
          .map((_, idx) => (
            <div
              key={idx}
              className="bg-gray-300 aspect-square flex items-center justify-center"
            >
              Img {idx + 2}
            </div>
          ))}
      </div>
    );
  }

  return null;
};

// Checklist
const Checklist = ({ items }) => {
  const [checked, setChecked] = useState(Array(items.length).fill(false));

  const toggleCheck = (index) => {
    const updated = [...checked];
    updated[index] = !updated[index];
    setChecked(updated);
  };

  return (
    <ul className="space-y-2">
      {items.map((item, idx) => (
        <li
          key={idx}
          className="flex items-start space-x-3 cursor-pointer"
          onClick={() => toggleCheck(idx)}
        >
          <div
            className={`w-5 h-5 flex-shrink-0 mt-0.5 flex items-center justify-center border rounded-none ${
              checked[idx] ? "bg-black border-black" : "border-gray-400"
            }`}
          >
            {checked[idx] && (
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <span className="text-gray-700 text-sm md:text-base">{item}</span>
        </li>
      ))}
    </ul>
  );
};

const Services = () => {
  return (
    <section className="py-8 md:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
      {services.map((service) => (
        <div
          key={service.id}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start mb-12 md:mb-20"
        >
          {/* Sidebar - now appears above on mobile */}
          <div className="md:col-span-3">
            <ul className="text-lg md:text-xl font-medium">
              <li className="text-black font-semibold text-xl md:text-2xl">
                {service.id}. {service.title}
              </li>
              {service.subtitle.map((sub, idx) => (
                <li
                  key={idx}
                  className="ml-4 md:ml-6 text-gray-400 text-sm md:text-base"
                >
                  {sub}
                </li>
              ))}
            </ul>
          </div>

          {/* Main content */}
          <div className="md:col-span-9">
            {/* Description full width */}
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 w-full max-w-full md:max-w-[650px] text-sm md:text-base">
              {service.description}
            </p>

            {/* Split row: Images (2/3) + Checklist (1/3) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="md:col-span-2 order-2 md:order-1">
                <ImageLayout service={service} />
              </div>
              <div className="md:col-span-1 order-1 md:order-2 md:mt-0">
                <Checklist items={service.features} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
