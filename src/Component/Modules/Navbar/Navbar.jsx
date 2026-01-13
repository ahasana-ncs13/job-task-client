"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    // { name: "Categories", href: "/categories" },
    { name: "My Library", href: "/library" },
    // { name: "About", href: "/about" },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-sky-700">
            BookNest
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium ${
                  pathname === link.href
                    ? "underline"
                    : "text-gray-700 hover:text-indigo-700"
                }`}
              >
                {link.name}
              </Link>
            ))}
            {/* Auth Buttons */}
            <Link
              href="/login"
              className="ml-4 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm hover:bg-indigo-700 transition"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block text-sm ${
                pathname === link.href ? "text-indigo-600" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="/login"
            className="block w-full text-center px-4 py-2 bg-indigo-600 text-white rounded-lg"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
