"use client";

export default function bookdetails({ book }) {
  if (!book) return null;

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row gap-6">
          
          {/* Book Cover */}
          <div className="flex-shrink-0 md:w-1/3">
            <img
              src={book.coverImage}
              alt={book.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Book Details */}
          <div className="p-6 flex flex-col flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">{book.title}</h1>
            <p className="text-gray-600 mb-2">By {book.author}</p>
            <p className="text-gray-500 text-sm mb-2">{book.genre} | {book.language}</p>
            <p className="text-gray-500 text-sm mb-2">
              Published: {book.publishedYear} | Publisher: {book.publisher}
            </p>
            <p className="text-gray-500 text-sm mb-2">Pages: {book.pages} | ISBN: {book.ISBN}</p>
            <p className="text-gray-500 text-sm mb-4">
              Formats: {book.format.join(", ")}
            </p>

            <p className="text-gray-700 mb-4 line-clamp-6">{book.description}</p>

            <div className="flex items-center justify-between mt-auto">
              <span className="text-teal-700 font-bold text-lg">${book.price}</span>
              <span className="text-yellow-400 font-semibold">{book.rating}⭐</span>
            </div>

            <button className="mt-6 px-6 py-2 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
