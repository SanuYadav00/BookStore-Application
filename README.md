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

