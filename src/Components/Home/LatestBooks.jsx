"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiRoundStar } from "react-icons/gi";
import useAxios from "../Modules/Hook/useAxios";

export default function LatestBooks() {
  const [books, setBooks] = useState([]);
  const axiosInstance = useAxios();
  // console.log(books)
  // Fetch book data on client
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axiosInstance.get("/latestbooks");
      //   const data = await res.json();
      setBooks(res.data);
    };
    fetchBooks();
  }, [axiosInstance]);

  return (
    <section className="py-12 sm:py-16 bg-teal-50 mb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className=" text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Latest Arrivals
        </h2>
        <p className="text-gray-600">Discover the newest additions to our growing library</p>
        </div>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Book Cover */}
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-60 object-cover"
              />

              {/* Book Info */}
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-semibold text-lg mb-1">{book.title}</h3>
                <p className="text-sm text-gray-500 mb-1">By {book.author}</p>
                <p className="text-xs text-gray-400 mb-1">
                  {book.genre} | {book.language}
                </p>

                {/* Price & Rating */}
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-teal-700 font-semibold">
                    ${book.price}
                  </span>
                  <span className="text-yellow-400 flex gap-1 items-center font-medium">
                    {book.rating}
                    <GiRoundStar />
                  </span>
                </div>
              </div>
              <Link href={`/bookdetails/${book._id}`}>
                <button
                  className=" px-4 py-2 rounded-md border-none bg-teal-700 text-white hover:bg-teal-800
w-full"
                >
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
