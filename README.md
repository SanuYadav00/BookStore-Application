# 📚 Bookstore API – Backend Developer Assignment

This is a **full-stack Bookstore Application** built with **NestJS (TypeScript)** on the backend and a responsive **HTML/CSS frontend**. The project supports user **authentication**, **CRUD operations on books**, and features like **filtering, sorting, and searching**. All operations are protected via **JWT-based authentication**.

---

# 📚 Assignment Overview
I have developed a full-stack Bookstore Web Application that fulfills all core requirements outlined in the backend developer assignment. The project comprises a NestJS-based RESTful API and a clean HTML/CSS/JS-based frontend, providing a seamless user experience.

This application allows users to authenticate, manage books, apply filters/search, and interact through a friendly web UI.

## 📌 Core Functional Requirements – ✅ Completed

### 1. ✅ User Authentication (JWT-Based)
- **Signup**: Users can register using an email and password.
- **Passwords** are securely hashed using `bcrypt`.
- **Login**: Valid users receive a **JWT token** on login.
- **Protected Routes**: All book management operations (create, update, delete) are secured via JWT.

---

### 2. ✅ Books API Endpoints

| Method | Endpoint        | Description             |
|--------|------------------|-------------------------|
| POST   | /books           | Add a new book          |
| GET    | /books           | Retrieve all books      |
| GET    | /books/:id       | Get book details by ID  |
| PATCH  | /books/:id       | Update a book by ID     |
| DELETE | /books/:id       | Delete a book by ID     |

> Fields include: `title`, `author`, `category`, `price`, `rating`, `publishedDate`

---

### 3. ✅ Filtering & Search
- **Filter books by**:
  - Author
  - Category
  - Rating
- **Search** books by partial title match

---

### 4. ✅ Error Handling
- Returns proper HTTP **status codes** for all invalid inputs
- Clear and user-friendly **error messages** shown in the frontend UI

---

## 🎯 Bonus Features – ✅ Implemented

- ✅ **Sorting**: Books can be sorted by price or rating
- ✅ **Modular Architecture** using NestJS modules, services, and controllers
- ✅ **Pagination Ready**: Models and APIs are structured to support pagination (extensible)
- ✅ **Dockerized Setup**:
  - Includes a working `Dockerfile` and `docker-compose.yml`

---

### ✅ Frontend UI

- Static **HTML/CSS/JS frontend** (no React)

#### Pages for:
- 🔐 **Login**
- 📝 **Signup**
- 📚 **Book Management** (Create, Edit, Delete)
- 🔍 **Search / Filter / Sort**

#### User feedback for:
- Form validation errors  
- Invalid login or short password  
- Unauthorized access  
- Empty search results


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

```
bookstore-api/
│
├── src/
│   ├── auth/          # Auth Module (JWT, bcrypt)
│   ├── books/         # CRUD for books
│   ├── users/         # User schema
│   ├── public/        # HTML/CSS/JS for UI
│   ├── app.module.ts  # Main module
│   └── main.ts        # App bootstrap
│
├── .env
├── Dockerfile
├── package.json
└── README.md
```

---

## 🧪 Installation & Running

### 1. Clone the Repo / Extract ZIP

### 2. Install Dependencies
```bash
npm install
```

### 3. MongoDB Setup
Ensure MongoDB is running locally:
```bash
mongod
```

Or you can run MongoDB via Docker:
```bash
docker run -d -p 27017:27017 --name mongo mongo
```

### 4. Configure Environment
Create a `.env` file in the root:
```
MONGODB_URI=mongodb://localhost:27017/bookstore
JWT_SECRET=sanuyadav
JWT_EXPIRES_IN=1d
```

### 5. Start the Server
```bash
npm run start:dev
```

Server will start at: `http://localhost:3000`

---

## 🧩 Using the App

Open `src/public/index.html` in your browser and interact with the full UI:
- Login / Signup
- Create, Edit, Delete Books
- Search / Filter / Sort
- All responses are clean and user-friendly (no raw JSON)

---

## 🐳 Docker Support

### Build Docker Image
```bash
docker build -t bookstore-api .
```

### Run Docker Container
```bash
docker run -p 3000:3000 --env-file .env bookstore-api
```

---

## 📌 Notes
- Ensure `.env` file is properly set
- JWT token is stored in browser's `localStorage`
- All frontend pages use plain HTML + JS (no framework)

---

## 🙌 Final Words

This project demonstrates full-stack capabilities including:
- Secure authentication
- RESTful API design
- UI integration
- Dockerization

It closely follows the given assignment instructions with additional enhancements for better UX.

---

**Author:** Sanu Yadav  
**Assignment:** Backend Developer – Bookstore API  
**Tech Stack:** NestJS + MongoDB + TypeScript + HTML/CSS + Docker

---

