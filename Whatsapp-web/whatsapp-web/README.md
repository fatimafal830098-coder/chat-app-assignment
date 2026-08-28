💬 Real-Time Chat Application
A full-stack real-time chat application built with React, Node.js, Express, MongoDB, and Socket.IO.
📌 Overview
This project is a full-stack real-time chat application with secure authentication and instant user-to-user communication.
✨ Features
🔐 User Registration & Login
🍪 JWT Authentication with Cookies
💬 Real-Time Messaging
🟢 Online / Offline User Status
⌨️ Real-Time Typing Indicator
🔔 Unread Message Count
👥 User List
💾 Persistent Messages
🛡️ Protected Routes
⚡ Socket.IO Real-Time Communication
🏗️ Project Structure
Real-Time-Chat/
├── client/
│   ├── components/
│   │   ├── ChatThread.jsx
│   │   └── UserList.jsx
│   ├── pages/
│   │   ├── Chat.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── slice/
│   │   ├── authService.js
│   │   ├── authSlice.js
│   │   ├── chatSlice.js
│   │   └── store.js
│   ├── api.js
│   └── socket.js
│
├── server/
│   ├── connection/
│   │   └── database.js
│   ├── controllers/
│   │   ├── chat.js
│   │   └── user.js
│   ├── helper/
│   │   └── cookie.js
│   ├── middleware/
│   │   └── protect.js
│   ├── models/
│   │   ├── Message.js
│   │   └── User.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── chat.js
│   ├── screenshot/
│   │   ├── login.png
│   │   ├── online.png
│   │   ├── register.png
│   │   ├── two terminals.png
│   │   ├── typing.png
│   │   └── unread.png
│   ├── .env
│   ├── server.js
│   └── socket.js
│
├── .env.example
├── .gitignore
└── README.md
🖥️ Client
The client is built with React and handles the user interface, authentication screens, chat interface, Redux state management, API communication, and Socket.IO events.
Main Client Parts
ChatThread.jsx — Displays the active conversation, messages, timestamps, and typing state.
UserList.jsx — Displays users, online status, active user, and unread counts.
Chat.jsx — Main chat page combining the user list and chat thread.
Login.jsx — User login page.
Register.jsx — New user registration page.
authSlice.js — Manages authentication state.
chatSlice.js — Manages users, active user, messages, online users, and unread counts.
store.js — Configures the Redux store.
api.js — Central API configuration.
socket.js — Client-side Socket.IO connection.
⚙️ Server
The server is built with Node.js and Express. It handles authentication, database operations, protected routes, chat APIs, and real-time Socket.IO communication.
Main Server Parts
database.js — Connects the application to MongoDB.
user.js — Handles user-related controller logic.
chat.js — Handles chat and message controller logic.
cookie.js — Provides cookie-related helper functionality.
protect.js — Protects private routes by validating authentication.
User.js — MongoDB user model.
Message.js — MongoDB message model.
auth.js — Authentication routes.
chat.js — Chat routes.
server.js — Main server entry point.
socket.js — Handles real-time communication.
🔐 Authentication Flow
Register / Login
       ↓
Express API
       ↓
Validate User
       ↓
JWT Token
       ↓
HTTP-Only Cookie
       ↓
Protected Requests
💬 Real-Time Chat Flow
Sender
  ↓
ChatThread
  ↓
Socket.IO Event
  ↓
Server
  ↓
Recipient
  ↓
ChatThread
🟢 Online Users
Socket.IO tracks connected users and allows the application to update online/offline status in real time.
⌨️ Typing Indicator
When a user types, a Socket.IO event is sent to the other user so the interface can display a typing indicator instantly.
🔔 Unread Messages
When a message is received while its conversation is not active, the application can display an unread message count beside that user.
🗄️ Database
MongoDB stores user and message data, while Mongoose is used to define schemas and interact with the database.
🔧 Technologies Used
Technology
Purpose
React.js
Frontend UI
Redux Toolkit
State Management
Node.js
Backend Runtime
Express.js
REST API
MongoDB
Database
Mongoose
MongoDB ODM
Socket.IO
Real-Time Communication
JWT
Authentication
Cookies
Authentication Persistence
JavaScript
Application Logic
🔑 Environment Variables
Create a .env file for your local configuration. Never commit real secrets.
Example:
PORT=4000
DB_URL=your_database_url
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
🚀 Installation
1. Clone the repository
git clone <your-repository-url>
cd <project-folder>
2. Install server dependencies
cd server
npm install
3. Install client dependencies
cd ../client
npm install
4. Start the server
cd ../server
npm run dev
5. Start the client
Open another terminal:
cd client
npm run dev
📸 Screenshots
The screenshots are stored in server/screenshot/.
🔑 Login
�
📝 Register
�
🟢 Online Users
�
🖥️ Two Terminals
�
⌨️ Typing Indicator
�
🔔 Unread Messages
�
Important: The screenshot paths above are relative to the location of README.md. Keep the screenshot folder inside server exactly as shown.
🌟 Project Highlights
This project demonstrates how a modern full-stack application can combine REST APIs, authentication, MongoDB, Redux Toolkit, and Socket.IO into one real-time communication system.
React + Redux
      ↓
REST API
      ↓
Express + Node.js
      ↓
MongoDB
      +
Socket.IO
      ↓
Real-Time Chat
👩‍💻 Author
Your Name
Learn → Build → Debug → Improve 🚀