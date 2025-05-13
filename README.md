🗓️ Event Scheduler App

A full-stack event scheduling application that lets users manage events with features like add/edit/delete, status tracking (`upcoming`, `attending`, `maybe`, `declined`), and search/filter functionality.

## 📁 Project Structure

EventSc/
├── event-scheduler-frontend/ # React frontend
├── event-scheduler-backend/ # Node.js + Express backend
└── README.md


---

## 🚀 Features

### ✅ Core Functionality
- Add, Edit, Delete events
- Each event includes:
  - Title
  - Date
  - Location
  - Description
- Status tracking:
  - `upcoming`
  - `attending`
  - `maybe`
  - `declined`

### 🔍 Search & Filter
- Search by title, location, or date range
- Filter by event status

---

## 🧰 Prerequisites

- Node.js (v16+)
- MongoDB (local or Atlas cloud)
- Git & GitHub account

---

## 🔧 Installation & Usage

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Yusf4/EventSc.git
cd EventSc
2️⃣ Setup Backend (Node + Express + MongoDB)
cd event-scheduler-backend
npm install
Create a .env file in event-scheduler-backend/:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/EventSc?retryWrites=true&w=majority
Replace <username> and <password> with your MongoDB Atlas credentials.
Run the backend server:

npm run dev
Backend runs at: http://localhost:5000

3️⃣ Setup Frontend (React)
cd ../event-scheduler-frontend
npm install
Run the frontend server:

npm run dev
Frontend runs at: http://localhost:5173 (Vite) or http://localhost:3000 (CRA)

4️⃣ Connect Frontend to Backend
Make sure your frontend API calls use this base URL:

axios.defaults.baseURL = "http://localhost:5000/api";
🔗 API Endpoints

Method	Endpoint	Description
GET	/api/events	Get all events
GET	/api/events/:id	Get event by ID
POST	/api/events	Create a new event
PUT	/api/events/:id	Update an event
DELETE	/api/events/:id	Delete an event
📦 GitHub Push Guide

If you haven’t initialized a git repo:

git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/Yusf4/EventSc.git
git branch -M main
git push -u origin main
