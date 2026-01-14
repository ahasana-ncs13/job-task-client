"use client";

import { FaBookOpen, FaUsers, FaStar, FaBook } from "react-icons/fa";

const stats = [
  {
    id: 1,
    label: "Books Available",
    value: "12K+",
    icon: <FaBook className="text-3xl text-teal-700" />,
  },
  {
    id: 2,
    label: "Active Readers",
    value: "8.5K+",
    icon: <FaUsers className="text-3xl text-teal-700" />,
  },
  {
    id: 3,
    label: "Reviews Written",
    value: "25K+",
    icon: <FaStar className="text-3xl text-teal-700" />,
  },
  {
    id: 4,
    label: "Book Clubs",
    value: "320+",
    icon: <FaBookOpen className="text-3xl text-teal-700" />,
  },
];

export default function Stats() {
  return (
    <section className="py-14 sm:py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            BookNest in Numbers
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            A growing community of book lovers worldwide
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="bg-white rounded-xl p-6 text-center shadow hover:shadow-lg transition"
            >
              <div className="flex justify-center mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
