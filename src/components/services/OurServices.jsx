const services = [
  {
    image: "/src/assets/image/service-img-1.png",
    title: "Process",
    description:
      "I've refined my process gradually over the years; tweaking bits, adding meetings, or completely starting from scratch. This is the most effective process I’ve found to create my best work.",
  },
  {
    image: "/src/assets/image/service-img-2.jpg",
    title: "Projects",
    description:
      "One of the many amazing things about my job is that I get to work with such a broad variety of people on a broad variety of projects. Here are some of my selected works.",
  },
  {
    image: "/src/assets/image/service-img-3.jpg",
    title: "Products",
    description:
      "As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow. One of those being templates I share in my shop.",
  },
  {
    image: "/src/assets/image/service-img-3.jpg",
    title: "Products",
    description:
      "As I’ve built my brand, I’ve found various ways to eek out more efficiency in my day-to-day workflow. One of those being templates I share in my shop.",
  },
];

const OurServices = () => {
  return (
    <section className="bg-[#111111] px-6 py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-4 text-center">
          Stuff I do
        </h2>
        <div className="w-20 h-px bg-gray-300 mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="text-center flex flex-col items-center gap-4"
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl w-full h-auto object-cover"
              />
              <span className="bg-[#dfeadd] text-green-900 font-semibold px-6 py-2 rounded-full text-sm">
                {service.title}
              </span>
              <p className="text-gray-300 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
