"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-indigo-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            Discover, Share, and Fall in Love with Books
          </h1>

          <p className="mt-6 text-gray-600 text-lg">
            Explore thousands of books, build your own library,
            and discover new stories tailored just for you.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/booklists"
              className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition"
            >
              Browse Books
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1512820790803-83ca734da794"
            alt="Books"
            className="rounded-2xl shadow-xl"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
            <p className="text-sm font-semibold"> Reading made simple</p>
          </div>
        </div>
      </div>
    </section>
  );
}
