import { useState, useEffect, useRef } from "react";
import navLogo from "../assets/image/logo/main-logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      // add background on scroll
      setIsScrolled(currentScrollY > 50);

      lastScrollY.current = Math.max(currentScrollY, 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 h-20 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-black/40 backdrop-blur-md shadow-sm"
          : "py-6 bg-transparent"
      } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Brand */}
        <div className="text-white text-lg font-medium">destudio.com</div>

        {/* Desktop navigation */}
        <div className="hidden text-white md:flex items-center gap-8 md:gap-12 flex-1 justify-center">
          <a href="#projects" className="nav-link hover:text-blue-600">
            Projects
          </a>
          <a href="#templates" className="nav-link hover:text-blue-600">
            Templates
          </a>
          <a href="/" className="flex justify-center">
            <img
              className={`transition-all duration-500 ${
                isScrolled ? "w-10 h-10" : "w-14 h-14"
              }`}
              src={navLogo}
              alt="Shakil Design Logo"
            />
          </a>
          <a href="#resources" className="nav-link hover:text-blue-600">
            Resources
          </a>
          <a href="#about" className="nav-link hover:text-blue-600">
            About
          </a>
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-white text-black px-5 py-2.5 rounded-full hover:bg-blue-100 transition-all duration-300 text-sm font-medium"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          aria-label="Toggle mobile menu"
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`bg-black/95 backdrop-blur-lg transition-transform duration-500 origin-top transform ${
          isMobileMenuOpen ? "scale-y-100 py-4" : "scale-y-0 py-0"
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col gap-4">
          <a
            href="#projects"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#templates"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Design Templates
          </a>
          <a
            href="#resources"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Free Resources
          </a>
          <a
            href="#about"
            className="mobile-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </a>
          <a
            href="#contact"
            className="bg-white text-black px-5 py-3 rounded-full hover:bg-blue-100 transition-all duration-300 text-center font-medium mt-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
