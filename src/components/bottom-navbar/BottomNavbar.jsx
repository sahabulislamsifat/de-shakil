import { ArrowRight } from "lucide-react";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-lg rounded-full px-1 py-1 w-[90%] max-w-md border border-gray-200">
      <div className="flex font-bold justify-between items-center">
        <a
          href="#home"
          className="flex justify-center items-center btn text-black rounded-full hover:bg-black bg-white shadow-none  border-none hover:text-white px-4 transition-all duration-200"
        >
          Service
        </a>
        <a
          href="#about"
          className="flex justify-center items-center btn text-black rounded-full hover:bg-black bg-white shadow-none  border-none hover:text-white px-4 transition-all duration-200"
        >
          Project
        </a>
        <a
          href="#services"
          className="flex justify-center items-center btn text-black rounded-full hover:bg-black bg-white shadow-none  border-none hover:text-white px-4 transition-all duration-200"
        >
          Team
        </a>

        <a
          href="#contact"
          className="flex justify-center items-center btn rounded-full bg-[#1d4eff] border-[#1d4eff] text-white px-4 transition-all duration-200"
        >
          Contact
          <ArrowRight />
        </a>
      </div>
    </div>
  );
};

export default BottomNavbar;
