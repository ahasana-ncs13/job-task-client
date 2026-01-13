"use client";

import {
  FaBook,
  FaRocket,
  FaHeart,
  FaUserFriends,
  FaSearch,
} from "react-icons/fa";

const categories = [
  {
    name: "Fiction",
    icon: <FaBook className="text-3xl sm:text-4xl text-white" />,
    description: "Explore imaginative stories and creative narratives.",
  },
  {
    name: "Mystery",
    icon: <FaSearch className="text-3xl sm:text-4xl text-white" />,
    description: "Dive into suspenseful tales full of twists and secrets.",
  },
  {
    name: "Sci-Fi",
    icon: <FaRocket className="text-3xl sm:text-4xl text-white" />,
    description: "Discover futuristic worlds and advanced technology.",
  },
  {
    name: "Romance",
    icon: <FaHeart className="text-3xl sm:text-4xl text-white" />,
    description: "Fall in love with heartwarming and passionate stories.",
  },
  {
    name: "Non-Fiction",
    icon: <FaUserFriends className="text-3xl sm:text-4xl text-white" />,
    description: "Learn from real stories, biographies, and factual content.",
  },
];

// duplicate list for seamless loop
const infiniteCategories = [...categories, ...categories];

export default function Category() {
  return (
    <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Explore by Genre
        </h2>

        {/* Infinite Scroll Wrapper */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex gap-4 sm:gap-6 animate-scroll hover:[animation-play-state:paused]"
          >
            {infiniteCategories.map((category, index) => (
              <div key={index} className="group cursor-pointer">
                {" "}
                <div className=" flex flex-col items-center justify-center h-full bg-gradient-to-r from-teal-800 to-teal-900 rounded-xl p-5 sm:p-6 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl w-90 ">
                  {" "}
                  <div className="mb-3 sm:mb-4"> {category.icon} </div>{" "}
                  <h3 className="text-white font-semibold text-base sm:text-lg text-center">
                    {" "}
                    {category.name}{" "}
                  </h3>{" "}
                  <p className="text-white/80 text-center text-xs sm:text-sm mt-2 leading-relaxed">
                    {" "}
                    {category.description}{" "}
                  </p>{" "}
                </div>{" "}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
