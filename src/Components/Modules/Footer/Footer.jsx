"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About */}
        <div>
          <h3 className="text-white text-lg font-bold mb-4">BookNest</h3>
          <p className="text-sm">
            Discover, read, and organize your favorite books. Your personal
            library, online.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Categories
              </Link>
            </li>
            <li>
              <Link href="/addbooks" className="hover:text-white">
                Add Books
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white font-semibold mb-4">Categories</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white">
                Fiction
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Non-fiction
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Mystery
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-white">
                Sci-fi
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">Subscribe</h4>
          <p className="text-sm mb-2">Get updates on new books and features.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-lg text-gray-900 w-full focus:outline-none"
            />
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        &copy; {new Date().getFullYear()} BookNest. All rights reserved.
      </div>
    </footer>
  );
}
