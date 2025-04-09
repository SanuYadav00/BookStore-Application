# 📚 Bookstore API – Backend Developer Assignment

This is a **full-stack Bookstore Application** built with **NestJS (TypeScript)** on the backend and a responsive **HTML/CSS frontend**. The project supports user **authentication**, **CRUD operations on books**, and features like **filtering, sorting, and searching**. All operations are protected via **JWT-based authentication**.

---

## 🚀 Features

### ✅ Authentication
- **Signup & Login** using Email and Password
- **JWT Token-based Authentication**
- Passwords are hashed using `bcrypt`
- All book operations are protected routes

### ✅ Books API
- **Create** a book
- **Read** all books or a specific book
- **Update** a book
- **Delete** a book
- Supports **Filtering by Author, Category, Rating**
- Supports **Search by Title**
- Supports **Sorting by Price and Rating**

### ✅ User Interface (HTML + CSS + JS)
- Clean and functional static UI
- Responsive pages for:
  - Login
  - Signup
  - Create Book
  - Edit Book
  - View Books
  - Search, Filter, Sort
- User-friendly messages (errors, success)
- Authenticated UI experience (token stored locally)

---

## 🛠️ Tech Stack

| Layer         | Technology           |
|---------------|----------------------|
| Language       | TypeScript           |
| Backend        | [NestJS](https://nestjs.com/)         |
| Database       | MongoDB (via Mongoose ODM) |
| Authentication | JWT (jsonwebtoken)  |
| Frontend       | HTML + CSS + JavaScript |
| Password Hashing | bcrypt |
| Containerization | Docker |
| Config Management | dotenv |

---

## 🗃️ Folder Structure

