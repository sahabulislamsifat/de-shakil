import { Link } from "react-router-dom";

const images = [
  {
    src: "/src/assets/image/logo showcase/image-one.jpg",
    alt: "Logo 1",
    link: "/project/logo-1",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/src/assets/image/logo showcase/image-two.jpg",
    alt: "Logo 2",
    link: "/project/logo-2",
    span: "",
  },
  {
    src: "/src/assets/image/logo showcase/image-three.jpg",
    alt: "Logo 3",
    link: "/project/logo-3",
    span: "",
  },
  {
    src: "/src/assets/image/logo showcase/image-four.jpg",
    alt: "Logo 4",
    link: "/project/logo-4",
    span: "col-span-2",
  },
  {
    src: "/src/assets/image/logo showcase/image-five.jpg",
    alt: "Logo 5",
    link: "/project/logo-5",
    span: "",
  },
  {
    src: "/src/assets/image/logo showcase/image-six.jpg",
    alt: "Logo 6",
    link: "/project/logo-6",
    span: "",
  },
  {
    src: "/src/assets/image/logo showcase/image-seven.jpg",
    alt: "Logo 7",
    link: "/project/logo-7",
    span: "row-span-2",
  },
  {
    src: "/src/assets/image/logo showcase/image-eight.jpg",
    alt: "Logo 8",
    link: "/project/logo-8",
    span: "",
  },
  {
    src: "/src/assets/image/logo showcase/image-nine.jpg",
    alt: "Logo 9",
    link: "/project/logo-9",
    span: "",
  },
  {
    src: "/src/assets/image/logo showcase/image-ten.jpg",
    alt: "Logo 10",
    link: "/project/logo-10",
    span: "col-span-2",
  },
];

const LogoShowcase = () => {
  return (
    <section className=" bg-[#111111] py-10 px-4 md:px-16">
      <div className="container mx-auto">
        <div className="py-5 text-white">
          <h1 className="font-medium">Select Projects</h1>
          <span>
            <hr />
          </span>
          <p>
            Explore our diverse range of projects showcasing our expertise and
            creativity.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 auto-rows-[200px] gap-4">
          {images.map((img, index) => (
            <Link
              to={img.link}
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-sm bg-white hover:shadow-md transition-shadow group ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoShowcase;
