# BookNest

BookNest is a modern web application for book lovers. It allows users to browse books, view detailed information, read reviews, and manage their own book collection. The platform includes features such as book listings, categories, user authentication, and a protected page for adding new books. BookNest is built with **Next.js**, **Tailwind CSS**, and **React**.

---

## 📦 Setup & Installation

1. **Clone the repository**

```bash
git clone https://github.com/ahasana-ncs13/job-task-client.git
cd booknest
Install dependencies

npm install
Run the development server

npm run dev
The app will be available at http://localhost:3000.

Environment Variables

Create a .env file in the root directory and add:

USER_NAME=BookNest
USER_PASSWORD=b4Mil9qQ4WbLA9JZ
Start the backend server (if using Express.js)


npm run server
Make sure the server is running at http://localhost:5000 

 ##   🌐 Route Summary
Route	Description	Access
/	Home / Hero Section	Public
/booklists	List of all books with pagination	Public
/bookdetails/:id	Detailed view of a single book	Public
/addbooks	Form to add a new book	Protected
/login	Login page for authentication	Public

---
## ✅ Implemented Features
1.Authentication
Simple login form

Cookie-based authentication to protect sensitive routes

Redirect unauthenticated users from /addbooks to /login


2.Book Listings
Display books in a responsive grid

Pagination for easy navigation through large collections

Each book card includes: title, author, price, rating, and cover image


3.Book Details
Detailed information including description, price, rating, and book metadata

Display of multiple formats (Paperback, Hardcover, Ebook, Audiobook)


4.Add New Book (Protected)
Accessible only to logged-in users

Form to add new books with validation

Supports structured input: title, author, genre, published year, publisher, language, pages, ISBN, formats, price, rating, cover image, description

Server-side integration to store book data (Express.js)


5.Categories Section
Browse books by genres (Fiction, Mystery, Sci-Fi, Romance, Non-Fiction)

Responsive layout with hover effects

6.Navigation / Navbar
Dynamic menu highlighting based on current route

Shows login/logout dynamically based on authentication state

Mobile-friendly menu with toggle

7.Responsive Design
Fully responsive for desktop, tablet, and mobile

Modern UI with Tailwind CSS and hover/transition effects

8.Middleware Protection
Server-side middleware to prevent unauthorized access to /addbooks

Client-side fallback redirect for extra security



🛠 Tech Stack
1.Frontend: Next.js, React, Tailwind CSS, DaisyUI

2.Backend: Express.js, MongoDB

3.Authentication: Cookie-based auth for protected routes

4.Icons: React Icons (FaBook, FaHeart, etc.)

---