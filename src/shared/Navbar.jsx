const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 flex justify-center gap-6 md:gap-20 py-10 text-white font-semibold text-sm md:text-xl mt-5">
      <a href="#about" className="hover:text-gray-300">
        Project
      </a>
      <a href="/services" className="hover:text-gray-300">
        Process
      </a>
      <a href="/" className=" hover:text-gray-300">
        DE <span>SHAKIL</span>
      </a>
      <a href="#companies" className="hover:text-gray-300">
        Team
      </a>
      <a href="#contact" className="hover:text-gray-300">
        About
      </a>
      <a href="#contact" className="hover:text-gray-300">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
