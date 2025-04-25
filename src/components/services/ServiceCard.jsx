import React from "react";

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-[#121212] p-6 rounded-lg cursor-pointer border border-gray-800 hover:border-orange-500 transition">
      <div className="mb-4">
        <div className="bg-white rounded-full p-3 w-12">{icon}</div>
        <h3 className="text-lg font-semibold mt-3">{title}</h3>
      </div>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
