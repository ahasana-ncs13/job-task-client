"use client";

import { RiGroup3Fill } from "react-icons/ri";
import { FaUsers, FaBook, FaPlus } from "react-icons/fa";

const clubs = [
  {
    name: "Mystery Lovers",
    description: "Discuss thrilling mysteries and detective novels.",
    members: 124,
    book: "The Silent Patient",
  },
  {
    name: "Sci-Fi Explorers",
    description: "Exploring futuristic worlds and space adventures.",
    members: 98,
    book: "Dune",
  },
  {
    name: "Romance Readers",
    description: "Heartwarming love stories and emotional journeys.",
    members: 156,
    book: "It Ends With Us",
  },
];

const testimonials = [
  {
    name: "Ayesha Rahman",
    text: "BookNest helped me find readers who love the same genres as me!",
  },
  {
    name: "Tanvir Hasan",
    text: "Joining a book club made reading more fun and interactive.",
  },
];

export default function Community() {
  return (
    <section className="py-14 sm:py-20 bg-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Community & Book Clubs
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Read together, share ideas, and grow with fellow book lovers
          </p>
        </div>

        {/* Clubs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {clubs.map((club) => (
            <div
              key={club.name}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-3 text-teal-700">
                <FaUsers />
                <h3 className="font-semibold text-lg">{club.name}</h3>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {club.description}
              </p>

              <div className="text-xs text-gray-500 space-y-1">
                <p className="flex gap-2"><RiGroup3Fill/> {club.members} members</p>
                <p>📖 Current read: {club.book}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm mb-12">
          <h3 className="text-lg font-semibold mb-4 text-center">
            What Our Readers Say
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="border-l-4 border-teal-600 pl-4 text-sm text-gray-600"
              >
                “{t.text}”
                <span className="block mt-2 font-medium text-gray-800">
                  — {t.name}
                </span>
              </blockquote>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
