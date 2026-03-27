# 🤖 AI Flow App

A full-stack AI Flow application built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled with **Tailwind CSS**. It features a visual flow interface where users can input prompts, get AI-generated results via the [OpenRouter API](https://openrouter.ai/), and view prompt history stored in a local MongoDB database.

---

## 🚀 Tech Stack

| Layer     | Technology                        |
|-----------|-----------------------------------|
| Frontend  | React 19, Vite, Tailwind CSS      |
| Backend   | Node.js, Express.js               |
| Database  | MongoDB (local) + Mongoose        |
| AI        | OpenRouter API                    |

---

## 📁 Project Structure

```
/
├── client/       # React frontend (Vite + Tailwind CSS)
└── server/       # Node/Express backend (MVC architecture)
```

---

## ⚙️ Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18+)
- [MongoDB](https://www.mongodb.com/try/download/community) (running locally)
- An [OpenRouter API Key](https://openrouter.ai/)

---

## 🛠️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Irfan-Kazi-27/FutureBlink_Task.git
cd FutureBlink_Task
```

### 2. Setup the Backend (Server)

```bash
cd server
npm install
```

Create a [.env] file inside the `server/` folder:

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_URL
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

Start the backend server:

```bash
# Development mode (with nodemon)
npm run dev

# Production mode
npm start
```

The server will run at: `http://localhost:5000`

---

### 3. Setup the Frontend (Client)

```bash
cd ../client
npm install
```

Start the frontend dev server:

```bash
npm run dev
```

The app will run at: `http://localhost:5173`

---

## 🔑 Environment Variables

| Variable            | Description                          |
|---------------------|--------------------------------------|
| `PORT`              | Port for the Express server (default: `5000`) |
| `MONGO_URI`         | MongoDB connection string            |
| `OPENROUTER_API_KEY`| Your OpenRouter API key              |

---

## 📦 Available Scripts

### Server (`/server`)

| Command       | Description                    |
|---------------|--------------------------------|
| `npm run dev` | Start server with nodemon      |
| `npm start`   | Start server with Node         |

### Client (`/client`)

| Command          | Description                      |
|------------------|----------------------------------|
| `npm run dev`    | Start Vite dev server            |
| `npm run build`  | Build for production             |
| `npm run preview`| Preview the production build     |
| `npm run lint`   | Run ESLint                       |

---

## 🌐 Features

- 🧩 Visual flow interface with Input Node and Result Node
- 🤖 AI prompt processing via OpenRouter API
- 📜 Prompt history panel stored in MongoDB
- 🎨 Clean, responsive UI with Tailwind CSS
