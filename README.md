# 🌸 Shayari World

> A full-stack, AI-powered Shayari platform where users can explore, search, save, share, download, and generate Shayari.

[![Live Demo](https://img.shields.io/badge/Live-Demo-success)](https://shayari-world.vercel.app/)
[![Frontend](https://img.shields.io/badge/Frontend-React-blue)](https://shayari-world.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Node.js-green)](https://shayari-world-production.up.railway.app/)

## 🌐 Live Demo

🚀 **Website:** https://shayari-world.vercel.app/

💻 **GitHub Repository:** https://github.com/Gayatri160288/shayari-world

---

## 📖 About The Project

Shayari World is a full-stack web application built for discovering and managing Shayari.

The application provides a user-friendly interface for browsing Shayari by category, searching content, saving favorites, copying and sharing Shayari, and downloading Shayari as an image.

It also includes a secure admin panel for managing Shayari and categories.

One of the key features of the project is **AI-powered Shayari generation using Google Gemini API**, allowing users to generate new Shayari based on their selected preferences.

---

# ✨ Features

## 👤 User Features

- 🔍 Search Shayari
- 📂 Filter Shayari by category
- 🎲 Get a random Shayari
- ❤️ Add Shayari to favorites
- 📋 Copy Shayari to clipboard
- 📱 Share Shayari on WhatsApp
- ⬇️ Download Shayari
- 🤖 Generate Shayari using AI
- 📱 Responsive user interface

## 🔐 Admin Features

- Secure admin login
- ➕ Add new Shayari
- ✏️ Edit existing Shayari
- 🗑️ Delete Shayari
- 📂 Manage categories
- 🤖 Generate Shayari using Google Gemini AI

---

# 🤖 AI Integration

Shayari World integrates the **Google Gemini API** to generate Shayari dynamically.

The AI generation flow:

```text
User Input
    ↓
React Frontend
    ↓
Node.js / Express API
    ↓
Google Gemini API
    ↓
Generated Shayari
    ↓
Display in Admin Panel

🛠️ Tech Stack
Frontend
React
Vite
Tailwind CSS
Axios
React Router
React Hot Toast
Backend
Node.js
Express.js
Sequelize ORM
JWT Authentication
bcryptjs
Database
MySQL
AI
Google Gemini API
@google/genai
Deployment
Vercel – Frontend
Railway – Backend
Railway MySQL – Database
🏗️ Application Architecture
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │      Vercel         │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Node.js + Express   │
                    │      Railway        │
                    └───────┬───────┬─────┘
                            │       │
                            ▼       ▼
                  ┌─────────────┐  ┌───────────────┐
                  │   MySQL     │  │ Google Gemini │
                  │  Railway    │  │      API      │
                  └─────────────┘  └───────────────┘
📁 Project Structure
shayari-world/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── context/
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vercel.json
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── middleware/
│   ├── app.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
🚀 Running The Project Locally
1️⃣ Clone the repository
git clone https://github.com/Gayatri160288/shayari-world.git
cd shayari-world
2️⃣ Run the Backend
cd backend
npm install
npm run dev

The backend runs on:

http://localhost:5000
3️⃣ Configure Environment Variables

Create a .env file inside the backend folder:

PORT=5000

DB_HOST=your_database_host
DB_PORT=3306
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password

JWT_SECRET=your_jwt_secret

GEMINI_API_KEY=your_gemini_api_key

⚠️ Never commit your .env file or API keys to GitHub.

4️⃣ Run the Frontend

Open another terminal:

cd frontend
npm install
npm run dev

The frontend runs on:

http://localhost:5173
🌐 Deployment

The application is deployed using the following architecture:

Service	Technology	Purpose
Frontend	Vercel	Hosts the React application
Backend	Railway	Hosts the Node.js + Express API
Database	Railway MySQL	Stores Shayari, users and categories
AI	Google Gemini API	Generates Shayari
Production URLs

🌐 Frontend
https://shayari-world.vercel.app/

⚙️ Backend API
https://shayari-world-production.up.railway.app/

🔌 API Overview

Some of the main API functionality includes:

GET    /shayaris
POST   /shayaris
PUT    /shayaris/:id
DELETE /shayaris/:id

Authentication:

POST /api/auth/login

AI Generation:

POST /shayaris/generate
🧠 Key Concepts Demonstrated

This project demonstrates practical experience with:

React component architecture
React state management
Context API
REST APIs
Axios API integration
Node.js and Express
MVC-style backend structure
Sequelize ORM
MySQL database integration
CRUD operations
JWT authentication
Password hashing with bcrypt
Environment variables
AI API integration
Production deployment
Git and GitHub
Vercel deployment
Railway deployment

📸 Screenshots
🏠 Home Page
<img width="943" height="472" alt="image" src="https://github.com/user-attachments/assets/25d40943-59ea-4b9f-9d81-32003a11c665" />

🔍 Search and Category Filter
<img width="941" height="470" alt="image" src="https://github.com/user-attachments/assets/d41f1094-e993-4a4f-b6b1-c090251c07fc" />

❤️ Favorites
<img width="805" height="476" alt="image" src="https://github.com/user-attachments/assets/94f9c965-d030-4775-9a50-fbdc188830d1" />

🔐 Admin Login
<img width="957" height="470" alt="image" src="https://github.com/user-attachments/assets/ebf52369-7ae9-4bc7-94ca-a4cb75aba865" />

📊 Admin Dashboard
<img width="947" height="467" alt="image" src="https://github.com/user-attachments/assets/fe7ce387-4886-42c0-8722-e0726da96a1c" />

🤖 AI Shayari Generator
<img width="940" height="471" alt="image" src="https://github.com/user-attachments/assets/01cba230-694e-48df-8ef7-c858851ed518" />

🎯 Future Improvements
Some possible future enhancements:
Cloud-based favorites
Pagination and infinite scrolling
Shayari reactions and comments
Multiple language support
Social login
AI image generation for Shayari cards
Improved AI retry and fallback handling
Analytics dashboard

👩‍💻 Developer
Gayatri Ingale
Full-Stack Developer

Connect
GitHub: https://github.com/Gayatri160288
⭐ If You Like This Project

If you found this project interesting, please consider giving the repository a ⭐!

📄 License

This project is created for learning, portfolio, and demonstration purposes.
