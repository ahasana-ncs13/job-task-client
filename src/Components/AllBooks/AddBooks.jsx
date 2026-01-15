"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import useAxios from "../Modules/Hook/useAxios";

export default function AddBooks() {

    const axiosInstance=useAxios()

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    publishedYear: "",
    publisher: "",
    language: "",
    pages: "",
    ISBN: "",
    format: "",
    price: "",
    rating: "",
    coverImage: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setError("");

    const payload = {
      ...formData,
      publishedYear: Number(formData.publishedYear),
      pages: Number(formData.pages),
      price: Number(formData.price),
      rating: Number(formData.rating),
      format: formData.format.split(",").map((f) => f.trim()),
    };

    axiosInstance.post("/addbooks",payload)
     
  };

  return (
    <section className="py-14 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100">
          {/* Header */}
          <div className="border-b px-6 py-4">
            <h2 className="text-2xl font-bold text-gray-800">
              📘 Add New Book
            </h2>
            <p className="text-sm text-gray-500">
              Fill in the details to publish a new book
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <Input
              name="title"
              label="Book Title"
              onChange={handleChange}
              required
            />
            <Input
              name="author"
              label="Author"
              onChange={handleChange}
              required
            />
            <Input name="genre" label="Genre" onChange={handleChange} />
            <Input
              name="publishedYear"
              label="Published Year"
              type="number"
              onChange={handleChange}
            />
            <Input name="publisher" label="Publisher" onChange={handleChange} />
            <Input name="language" label="Language" onChange={handleChange} />
            <Input
              name="pages"
              label="Pages"
              type="number"
              onChange={handleChange}
            />
            <Input name="ISBN" label="ISBN" onChange={handleChange} />

            <Input
              name="format"
              label="Format"
              placeholder="Paperback, Hardcover, Ebook"
              onChange={handleChange}
              className="md:col-span-2"
            />

            <Input
              name="price"
              label="Price ($)"
              type="number"
              step="0.01"
              onChange={handleChange}
            />
            <Input
              name="rating"
              label="Rating (0–5)"
              type="number"
              step="0.1"
              onChange={handleChange}
            />

            <Input
              name="coverImage"
              label="Cover Image URL"
              onChange={handleChange}
              className="md:col-span-2"
            />

            <Textarea
              name="description"
              label="Description"
              onChange={handleChange}
              className="md:col-span-2"
            />

            {error && (
              <p className="md:col-span-2 text-red-600 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 flex justify-center items-center gap-2 bg-teal-700 text-white py-3 rounded-xl font-semibold hover:bg-teal-800 transition disabled:opacity-60"
            >
              {loading ? "Adding Book..." : "Add Book"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Inputs ---------- */

function Input({ label, className = "", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
      <input
        {...props}
        className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
    </div>
  );
}

function Textarea({ label, className = "", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="text-sm font-medium text-gray-600 mb-1">{label}</label>
      <textarea
        rows={4}
        {...props}
        className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
      />
    </div>
  );
}
