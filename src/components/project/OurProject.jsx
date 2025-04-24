// import { ArrowRight } from "lucide-react";
// import React from "react";

// const OurProject = () => {
//   return (
//     <section className="bg-black text-white py-16 px-6 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="flex items-center gap-4 mb-12">
//           <h1 className="text-4xl md:text-5xl font-semibold">Our Projects</h1>
//           <ArrowRight size={48} className="text-gray-400" />
//         </div>

//         {/* Project Card */}
//         {/* Card 01  */}
//         <div className="bg-[#111111] my-16 rounded-xl p-6 md:p-10 border border-gray-700">
//           {/* Project Title and Tags */}
//           <div className="mb-6">
//             <h2 className="text-3xl font-bold mb-4">House of X</h2>
//             <div className="flex flex-wrap gap-3">
//               <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
//                 Logo Design
//               </span>
//               <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
//                 Brand Identity
//               </span>
//             </div>
//           </div>

//           {/* Description and Button */}
//           <div className="md:flex md:justify-between md:items-center mb-8">
//             <p className="text-gray-300 max-w-2xl mb-4 md:mb-0">
//               A one-stop solution for creators and celebrities to create and
//               empower best-in-class brands of the future. They are on a mission
//               to build a house of brands that cater to the future generation,
//               i.e., GenZ.
//             </p>
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded hover:bg-[#EC4900] hover:border-[#EC4900] transition-colors duration-300"
//             >
//               More about the project
//               <ArrowRight size={20} />
//             </a>
//           </div>

//           {/* Media Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Video Embed */}
//             <div className="md:col-span-2 aspect-video">
//               <iframe
//                 src="https://dzinr.co.in/wp-content/uploads/2023/06/Logo-animation-4K.webm"
//                 title="House of X Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full rounded-lg"
//               ></iframe>
//             </div>

//             {/* Image with Overlay */}
//             <div className="relative">
//               <img
//                 src="https://dzinr.co.in/wp-content/uploads/2023/06/fj7rjazO_400x400.jpg"
//                 alt="Raj Shamani"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//               <div className="absolute justify-center py-4 bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 flex items-center gap-2 rounded-b-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                   className="h-5 w-5"
//                 >
//                   <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z" />
//                 </svg>
//                 <span className="text-white font-medium">Raj Shamani</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Card 02  */}
//         <div className="bg-[#111111] my-16 rounded-xl p-6 md:p-10 border border-gray-700">
//           {/* Project Title and Tags */}
//           <div className="mb-6">
//             <h2 className="text-3xl font-bold mb-4">Maninder Buttar</h2>
//             <div className="flex flex-wrap gap-3">
//               <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
//                 Logo Design
//               </span>
//               <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
//                 Brand Identity
//               </span>
//             </div>
//           </div>

//           {/* Description and Button */}
//           <div className="md:flex md:justify-between md:items-center mb-8">
//             <p className="text-gray-300 max-w-2xl mb-4 md:mb-0">
//               Maninder Buttar is a Punjab-based singer-songwriter who found fame
//               in India’s pop scene by mixing modern electronic, hip-hop and
//               traditional Punjabi instrumentation and vocals. Maninder’s song
//               ‘Sakhiyan’ was a huge hit with 584M+ views on YouTube.
//             </p>
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded hover:bg-[#EC4900] hover:border-[#EC4900] transition-colors duration-300"
//             >
//               More about the project
//               <ArrowRight size={20} />
//             </a>
//           </div>

//           {/* Media Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Image with Overlay */}
//             <div className="relative">
//               <img
//                 src="https://dzinr.co.in/wp-content/uploads/2023/06/Untitled-design-10-1024x1024.png"
//                 alt="Raj Shamani"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//               <div className="absolute justify-center py-4 bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 flex items-center gap-2 rounded-b-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                   className="h-5 w-5"
//                 >
//                   <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z" />
//                 </svg>
//                 <span className="text-white font-medium">Maninder Buttar</span>
//               </div>
//             </div>
//             {/* Video Embed */}
//             <div className="md:col-span-2 aspect-video">
//               <iframe
//                 src="https://dzinr.co.in/wp-content/uploads/2023/07/Logo-animation-1080P.mp4"
//                 title="House of X Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full rounded-lg"
//               ></iframe>
//             </div>
//           </div>
//         </div>
//         {/* Card 03  */}
//         <div className="bg-[#111111] my-16 rounded-xl p-6 md:p-10 border border-gray-700">
//           {/* Project Title and Tags */}
//           <div className="mb-6">
//             <h2 className="text-3xl font-bold mb-4">Indian Farmer</h2>
//             <div className="flex flex-wrap gap-3">
//               <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
//                 Logo Design
//               </span>
//               <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
//                 Brand Identity
//               </span>
//             </div>
//           </div>

//           {/* Description and Button */}
//           <div className="md:flex md:justify-between md:items-center mb-8">
//             <p className="text-gray-300 max-w-2xl mb-4 md:mb-0">
//               One-stop solution for farmers to learn modern-day techniques and
//               explore a whole new world of farming to get better produce
//               eventually. They are on a mission to shatter stereotypes,
//               transform people’s perspective towards farming and provide
//               solutions for real-world problems.
//             </p>
//             <a
//               href="#"
//               className="inline-flex items-center gap-2 border border-white px-5 py-2 rounded hover:bg-[#EC4900] hover:border-[#EC4900] transition-colors duration-300"
//             >
//               More about the project
//               <ArrowRight size={20} />
//             </a>
//           </div>

//           {/* Media Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {/* Video Embed */}
//             <div className="md:col-span-2 aspect-video">
//               <iframe
//                 src="https://dzinr.co.in/wp-content/uploads/2023/07/03.-Indian-Farmer-720P.mp4"
//                 title="House of X Video"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//                 className="w-full h-full rounded-lg"
//               ></iframe>
//             </div>

//             {/* Image with Overlay */}
//             <div className="relative">
//               <img
//                 src="https://dzinr.co.in/wp-content/uploads/2023/07/193188949_323775775982952_3827522544737678112_n-1.jpg"
//                 alt="Raj Shamani"
//                 className="w-full h-full object-cover rounded-lg"
//               />
//               <div className="absolute justify-center py-4 bottom-0 left-0 bg-black bg-opacity-70 w-full px-4 flex items-center gap-2 rounded-b-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="white"
//                   viewBox="0 0 24 24"
//                   className="h-5 w-5"
//                 >
//                   <path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm8.25 3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM12 8.25a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5Z" />
//                 </svg>
//                 <span className="text-white font-medium">Indian Farmer</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurProject;

// import React from "react";
// import { ArrowRight } from "lucide-react";
// // এই কম্পোনেন্ট তুমি উপরে বানালে
// import projects from "../../data/projects.json"; // JSON ডেটা এখানে রাখো
// import ProjectCard from "./ProjectCard";

// const OurProject = () => {
//   return (
//     <section className="bg-black text-white py-16 px-6 md:px-12">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center gap-4 mb-12">
//           <h1 className="text-4xl md:text-5xl font-semibold">Our Projects</h1>
//           <ArrowRight size={48} className="text-gray-400" />
//         </div>

//         {projects.map((project) => (
//           <ProjectCard key={project.id} {...project} />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurProject;

import React, { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";

const OurProject = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/data/projects.json") // public folder থেকে fetch হবে
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold">Our Projects</h1>
          <ArrowRight size={48} className="text-gray-400" />
        </div>

        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default OurProject;
