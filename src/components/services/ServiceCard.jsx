const ServiceCard = ({ image, title, description, size }) => {
  const sizeMap = {
    sm: "row-span-1",
    md: "row-span-2",
    lg: "row-span-3",
  };

  return (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all group cursor-pointer flex flex-col ${sizeMap[size]}`}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 md:h-52 lg:h-60 object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="p-5 flex flex-col justify-between h-full">
        <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
