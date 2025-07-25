const LatestProject = () => {
  return (
    <section className="bg-[#111111] py-16 px-6 md:px-20">
      <div className="container mx-auto">
        <h2 className="text-sm font-semibold text-white mb-4">
          Latest project
        </h2>
        <div className="flex flex-col lg:flex-row bg-[#f4f3ee] rounded overflow-hidden shadow-md">
          {/* Image */}
          <div className="lg:w-2/3 w-full h-[350px] lg:h-auto">
            <img
              src="/src/assets/image/latestProject.jpg" // Replace with your image path
              alt="Webster Clinic"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="p-6 flex flex-col bg-[#111111] justify-between lg:w-1/3">
            <div>
              <p className="text-gray-300 text-sm">
                Webster Clinic is a Boston-based mental health practice offering
                culturally competent, psychoanalytically informed care for
                children, adolescents, and adults. Founded on principles of
                curiosity, depth, and inclusion, the clinic provides thoughtful
                support to those navigating complex emotional and relational
                challenges. My role was to develop a visual identity that
                reflects the clinic’s competence and warmth. Something quietly
                confident, contemporary, and capable of holding space for all
                the nuance that defines their work.
              </p>
            </div>

            <div className="mt-6">
              <p className="font-semibold text-gray-300">
                Visual identity design
              </p>
              <p className="text-sm text-gray-400">April 2025</p>
              <button className="mt-4 px-5 py-2 bg-[#d5e9cd] text-gray-800 rounded-full font-medium hover:bg-[#c3ddbb] transition">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestProject;
