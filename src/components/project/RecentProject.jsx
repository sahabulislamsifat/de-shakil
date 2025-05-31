import { FaPlay } from "react-icons/fa";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";

const posts = [
  { image: "/src/assets/image/recent-img-1.jpeg", isVideo: false },
  { image: "/src/assets/image/recent-img-2.jpeg", isVideo: false },
  { image: "/src/assets/image/recent-img-3.jpeg", isVideo: false },
  { image: "/src/assets/image/recent-img-4.jpeg", isVideo: true },
  { image: "/src/assets/image/recent-img-5.jpeg", isVideo: true },
  { image: "/src/assets/image/recent-img-5.jpeg", isVideo: false },
  { image: "/src/assets/image/recent-img-7.jpeg", isVideo: true },
  { image: "/src/assets/image/recent-img-8.jpeg", isVideo: false },
  { image: "/src/assets/image/recent-img-1.jpeg", isVideo: false },
];

const RecentPosts = () => {
  return (
    <section className="bg-[#f4f3ee] px-6 py-16">
      <div className="container mx-auto">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Recent posts
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-md"
            >
              <img
                src={post.image}
                alt={`post-${index}`}
                className="w-full h-full object-cover"
              />
              {post.isVideo && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <FaPlay className="text-white text-xl" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Text and Socials */}
        <div className="mt-10 text-gray-700 text-sm max-w-3xl">
          <p className="mb-4">
            Across social media, over 500,000 people have actively decided to
            join me on my design journey as I share tips and tricks, project
            breakdowns, workflow processes and a bunch of other stuff, typically
            in video format.
          </p>
          <p>
            If you'd like to see what all the fuss is about (I'm not sure I've
            worked that out yet), come and join me on any of your favourite
            platforms.
          </p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex gap-4 justify-end text-green-900 text-xl">
          <FaInstagram className="cursor-pointer hover:text-green-700" />
          <FaFacebookF className="cursor-pointer hover:text-green-700" />
          <FaLinkedinIn className="cursor-pointer hover:text-green-700" />
          <FaTiktok className="cursor-pointer hover:text-green-700" />
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
