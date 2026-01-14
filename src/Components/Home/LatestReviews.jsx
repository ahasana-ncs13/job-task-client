"use client";

import { FaStar, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Why Dune Is a Sci-Fi Masterpiece",
    author: "Ayesha Rahman",
    rating: 5,
    excerpt:
      "Dune is more than a science fiction novel—it's a deep exploration of power, ecology, and destiny...",
    reviews: [
      {
        reviewer: "Imran Hossain",
        rating: 5,
        comment:
          "An absolute classic. The world-building and political depth of Dune are unmatched.",
      },
      {
        reviewer: "Sadia Khan",
        rating: 4,
        comment:
          "A bit dense at times, but incredibly rewarding once you get into the story.",
      },
    ],
  },
  {
    id: 2,
    title: "Top 5 Mystery Novels You Must Read",
    author: "Tanvir Hasan",
    rating: 4,
    excerpt:
      "If you love suspense and plot twists, these five mystery novels should be on your reading list...",
    reviews: [
      {
        reviewer: "Rahim Uddin",
        rating: 4,
        comment:
          "Great recommendations! I’ve already read two from this list and loved them.",
      },
      {
        reviewer: "Nabila Islam",
        rating: 5,
        comment:
          "Perfect list for mystery lovers. The twists kept me hooked!",
      },
    ],
  },
  {
    id: 3,
    title: "Romance Books That Will Melt Your Heart",
    author: "Nusrat Ahasana",
    rating: 5,
    excerpt:
      "From slow burns to emotional rollercoasters, these romance books deliver unforgettable love stories...",
    reviews: [
      {
        reviewer: "Farhan Ahmed",
        rating: 5,
        comment:
          "Beautifully written recommendations. Every book feels emotionally rich.",
      },
      {
        reviewer: "Mim Akter",
        rating: 4,
        comment:
          "Loved the selection, especially the slow-burn romances.",
      },
    ],
  },
];

export default function LatestReviews() {
  const [openPost, setOpenPost] = useState(null);

  return (
    <section className="py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Latest Reviews & Blogs
          </h2>
          <p className="mt-3 text-gray-600 text-sm sm:text-base">
            Honest opinions from real readers
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="border rounded-xl p-6 hover:shadow-lg transition bg-teal-700 text-white"
            >
              {/* Title */}
              <h3 className="font-semibold text-lg mb-1">
                {post.title}
              </h3>

              {/* Author */}
              <p className="text-xs mb-2">
                By <span className="font-medium">{post.author}</span>
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < post.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
                <span className="text-xs ml-2">
                  ({post.reviews.length} reviews)
                </span>
              </div>

              {/* Excerpt */}
              <p className="text-sm  mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Toggle Reviews */}
              <button
                onClick={() =>
                  setOpenPost(openPost === post.id ? null : post.id)
                }
                className="flex items-center gap-2 text-sm text-teal-100 font-medium"
              >
                {openPost === post.id ? "Hide Reviews" : "View Reviews"}
                {openPost === post.id ? <FaChevronUp /> : <FaChevronDown />}
              </button>

              {/* Reviews */}
              {openPost === post.id && (
                <div className="mt-4 space-y-3">
                  {post.reviews.map((review, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-3"
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">
                          {review.reviewer}
                        </span>
                        <div className="flex gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <FaStar
                              key={i}
                              className="text-xs text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-gray-600">
                        {review.comment}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
