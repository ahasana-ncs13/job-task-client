"use client";

import useAxios from "@/Components/Modules/Hook/useAxios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BookDetails() {
  const [book, setBook] = useState(null);

  const { id } = useParams();
  console.log(id);
  const axiosInstance = useAxios();
  console.log(book);
  // Fetch book data on client
  useEffect(() => {
    const fetchBookDetails = async () => {
      const res = await axiosInstance.get(`/bookdetails/${id}`);
      //   const data = await res.json();
      setBook(res.data);
    };
    fetchBookDetails();
  }, [id, axiosInstance]);

  if (!book) return null;

  return (
    <section className="py-10 sm:py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
          {/* Book Cover */}{" "}
          <div className="w-full md:w-1/3">
            {" "}
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-64 sm:h-80 md:h-full object-cover"
            />{" "}
          </div>
          {/* Book Details */}
          <div className="p-4 sm:p-6 flex flex-col flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
              {book.title}
            </h1>

            <p className="text-sm sm:text-base text-gray-600 mb-4">
              By {book.author}
            </p>

            {/* Meta Information */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 text-sm sm:text-lg text-gray-600">
              {" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="font-medium text-gray-800">Genre</span>{" "}
                <span className="text-gray-500">• {book.genre}</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="font-medium text-gray-800">Language</span>{" "}
                <span className="text-gray-500">• {book.language}</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="font-medium text-gray-800">
                  Published
                </span>{" "}
                <span className="text-gray-500">• {book.publishedYear}</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="font-medium text-gray-800">
                  Publisher
                </span>{" "}
                <span className="text-gray-500">• {book.publisher}</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="font-medium text-gray-800">Pages</span>{" "}
                <span className="text-gray-500">• {book.pages}</span>{" "}
              </div>{" "}
              <div className="flex items-center gap-2">
                {" "}
                <span className="font-medium text-gray-800">ISBN</span>{" "}
                <span className="text-gray-500 break-all">• {book.ISBN}</span>{" "}
              </div>{" "}
            </div>

            {/* Formats */}
            <div className="my-5">
              <p className="text-lg font-medium text-gray-800 mb-2">
                Available Formats
              </p>
              <div className="flex flex-wrap gap-2">
                {book.format?.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs sm:text-sm bg-teal-50 text-teal-700 border border-teal-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-6 flex items-center justify-between border-t">
              <span className="text-lg sm:text-xl font-bold text-teal-700">
                ${book.price}
              </span>
              <span className="text-yellow-500 font-semibold">
                ⭐ {book.rating}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 mt-3">
              Added on{" "}
              <span className="font-medium text-gray-700">
                {new Date(book.createdAt).toLocaleDateString()}
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="mt-10 bg-white rounded-xl shadow p-6 sm:p-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {book.description}
          </p>
        </div>
      </div>
    </section>
  );
}
