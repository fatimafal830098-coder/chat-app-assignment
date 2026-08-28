# 💬 Real-Time Chat Application

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Socket.IO-Real--Time-010101?style=for-the-badge&logo=socket.io" />
</p>

<p align="center">
  <b>A simple and modern real-time messaging application.</b>
  <br>
  Built with React, Node.js, Express, MongoDB and Socket.IO.
</p>

---

## 🌷 About

This project is a full-stack **Real-Time Chat Application** where users can register, log in, connect with other users and exchange messages instantly.

The application combines a React frontend with a Node.js and Express backend, MongoDB for storing users and messages, and Socket.IO for real-time communication.

---

## ✨ Features

- 🔐 User Registration & Login
- 🍪 JWT Authentication with Cookies
- 💬 Real-Time Messaging
- 🟢 Online User Status
- ⌨️ Typing Indicator
- 🔔 Unread Messages
- 👥 User List
- 🛡️ Protected Routes
- 💾 Persistent Messages

---

## 🛠️ Technologies

**Frontend**

React.js • Redux Toolkit • JavaScript

**Backend**

Node.js • Express.js • REST API

**Database**

MongoDB • Mongoose

**Real-Time**

Socket.IO

**Authentication**

JWT • Cookies

---

# 📸 Screenshots

### 🔐 Login

<p align="center">
  <img src="screenshot/login.png" width="750" alt="Login"/>
</p>

---

### 📝 Register

<p align="center">
  <img src="screenshot/register.png" width="750" alt="Register"/>
</p>

---

### 🟢 Online Users

<p align="center">
  <img src="screenshot/online.png" width="750" alt="Online Users"/>
</p>

---

### ⌨️ Typing Indicator

<p align="center">
  <img src="screenshot/typing.png" width="750" alt="Typing Indicator"/>
</p>

---

### 🔔 Unread Messages

<p align="center">
  <img src="screenshot/unread.png" width="750" alt="Unread Messages"/>
</p>

---

### 🖥️ Development Setup

<p align="center">
  <img src="screenshot/two-terminals.png" width="750" alt="Two Terminals"/>
</p>

---

# 📁 Project Structure

### 🌐 Client

**Components**
- `ChatThread.jsx` — Chat conversation
- `UserList.jsx` — Users and chat status

**Pages**
- `Chat.jsx`
- `Login.jsx`
- `Register.jsx`

**Redux**
- `authService.js`
- `authSlice.js`
- `chatSlice.js`
- `store.js`

**Core**
- `api.js`
- `socket.js`

---

### 🖥️ Server

**Connection**
- `database.js`

**Controllers**
- `chat.js`
- `user.js`

**Middleware**
- `protect.js`

**Models**
- `Message.js`
- `User.js`

**Routes**
- `auth.js`
- `chat.js`

**Core**
- `server.js`
- `socket.js`

---

# ⚡ How It Works

The application uses two main communication methods:

**REST API** handles authentication and normal client-server requests.

**Socket.IO** handles real-time events such as messages, online users, typing and unread notifications.

Simple flow:

**React Client → Express Server → MongoDB**

and for real-time communication:

**React Client ⇄ Socket.IO ⇄ Server**

---

# 🔐 Authentication

Users can register and log in securely using **JWT authentication and cookies**.

Protected routes are handled through authentication middleware, ensuring that private chat resources are accessible only to authenticated users.

---

# ⚙️ Environment Setup

Create a `.env` file inside the `server` folder.

```env
PORT=4000
DB_URL=your_database_url
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173