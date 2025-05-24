import { Heart, Plus, Share2 } from "lucide-react";
import React from "react";
import logo8 from "../../assets/image/logo/eight-logo.webp";

const BrandCard = () => {
  return (
    <div className="w-64 rounded-xl p-4 bg-[#C2F2D0] relative">
      <div className="absolute top-4 left-4 ">
        <Heart className="w-5 h-5 text-black" />
      </div>
      <div className="absolute top-4 right-4">
        <Share2 className="w-5 h-5 text-black" />
      </div>

      <div className=" rounded-xl p-4">
        <img
          src={logo8}
          alt="PRESTIGIO"
          className="w-full h-44 object-contain mx-auto"
        />
      </div>

      <div className="mt-4">
        <h2 className="text-sm text-gray-700 font-semibold">PRESTIGIO</h2>
        <p className="text-lg font-bold text-gray-900">$4.500</p>
      </div>

      <button className="mt-4 flex items-center justify-center w-full bg-white text-black font-semibold py-2 rounded-xl shadow-md hover:bg-gray-100">
        <Plus className="w-4 h-4 mr-2" />
        Add to Cart
      </button>
    </div>
  );
};

export default BrandCard;
