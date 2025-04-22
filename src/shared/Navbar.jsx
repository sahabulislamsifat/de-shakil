const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 flex justify-center gap-6 md:gap-20 py-10 text-white font-semibold text-sm md:text-base">
      <a href="#about" className="hover:text-gray-300">
        ABOUT
      </a>
      <a href="#early-life" className="hover:text-gray-300">
        EARLIER LIFE
      </a>
      <a href="#iman" className="hover:text-gray-300">
        DE SHAKIL
      </a>
      <a href="#companies" className="hover:text-gray-300">
        COMPANIES
      </a>
      <a href="#contact" className="hover:text-gray-300">
        CONTACT
      </a>
    </nav>
  );
};

export default Navbar;
