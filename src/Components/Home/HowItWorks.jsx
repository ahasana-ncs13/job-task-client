"use client";

import { FaBookOpen, FaHeart, FaUsers } from "react-icons/fa";
import Link from "next/link";

const steps = [
  {
    title: "Browse Books",
    description:
      "Discover books across genres and find your next favorite read.",
    icon: <FaBookOpen className="text-3xl text-teal-600" />,
  },
  {
    title: "Add Favorites",
    description:
      "Save books you love and keep track of your reading interests.",
    icon: <FaHeart className="text-3xl text-teal-600" />,
  },
  {
    title: "Connect with Readers",
    description:
      "Share reviews, get recommendations, and connect with book lovers.",
    icon: <FaUsers className="text-3xl text-teal-600" />,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            How BookNest Works
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Start your reading journey in just a few simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group bg-teal-50 rounded-xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-teal-100 mb-4">
                {step.icon}
              </div>

              <h3 className="font-semibold text-lg mb-2">
                {index + 1}. {step.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/booklists"
            className="inline-block bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg text-sm font-medium transition"
          >
            Start Your Reading Journey
          </Link>
        </div>

      </div>
    </section>
  );
}
