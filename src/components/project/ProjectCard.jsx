import { ArrowRight } from "lucide-react";

const ProjectCard = ({
  title,
  tags,
  description,
  videoUrl,
  imageUrl,
  creator,
}) => (
  <div className="bg-[#111111] my-16 rounded-xl p-6 md:p-10 border border-gray-700">
    <div className="mb-6">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 text-sm px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>

    <div className="md:flex md:justify-between md:items-center mb-8">
      <p className="text-gray-300 max-w-2xl mb-4 md:mb-0">{description}</p>
      <a
        href="#"
        className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded hover:bg-[#EC4900] hover:border-[#EC4900] transition-colors duration-300"
      >
        More about the project
        <ArrowRight size={20} />
      </a>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 aspect-video">
        <iframe
          src={`${videoUrl}?controls=0`} // এইভাবে controls hide হবে
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
      <div className="relative">
        <img
          src={imageUrl}
          alt={creator}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute justify-center py-4 bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 flex items-center gap-2 rounded-b-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="white"
            viewBox="0 0 24 24"
            className="h-5 w-5"
          >
            <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z" />
          </svg>
          <span className="text-white font-medium">{creator}</span>
        </div>
      </div>
    </div>
  </div>
);

export default ProjectCard;
