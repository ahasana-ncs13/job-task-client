"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { GiRoundStar } from "react-icons/gi";

const PAGE_SIZE = 8; // Books per page

export default function AllBooks() {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch book data on client
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await fetch("/booksdata.json");
      const data = await res.json();
      setBooks(data.books); // assuming your JSON has { books: [...] }
    };
    fetchBooks();
  }, []);

  // Pagination
  const totalPages = Math.ceil(books.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const currentBooks = books.slice(startIndex, startIndex + PAGE_SIZE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Book List
        </h2>

        {/* Book Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentBooks.map((book) => (
            <div
              key={book.id}
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
              <Link
                href={`/bookdetails/${book.id}`}
              >
                <button className=" px-4 py-2 rounded-md border-none bg-teal-700 text-white hover:bg-teal-800
w-full">View Details</button>
                
              </Link>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-10 gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-teal-700 text-white hover:bg-teal-800"
            } transition`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToPage(i + 1)}
              className={`px-4 py-2 rounded-lg ${
                currentPage === i + 1
                  ? "bg-teal-700 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              } transition`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-teal-700 text-white hover:bg-teal-800"
            } transition`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
