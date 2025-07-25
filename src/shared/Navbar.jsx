import navLogo from "../assets/image/logo/main-logo.png";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-30 flex justify-center gap-6 md:gap-20 py-10 text-white font-[500px] text-sm md:text-xl mt-5">
      <a href="#about" className="hover:text-gray-300">
        Project
      </a>
      <a href="/services" className="hover:text-gray-300">
        Design Templates
      </a>
      <a href="/" className=" hover:text-gray-300">
        <img className="w-14 h-14" src={navLogo} alt="logo" />
      </a>

      <a href="#contact" className="hover:text-gray-300">
        Free Resources
      </a>
      <a href="#contact" className="hover:text-gray-300">
        Contact
      </a>
    </nav>
  );
};

export default Navbar;
