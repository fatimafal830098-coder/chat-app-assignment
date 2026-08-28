
# 💬 Real-Time Chat Application

<p align="center">
  <img src="https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-Real--Time-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
</p>

<p align="center">
  <strong>A modern full-stack real-time chat application</strong>
</p>

<p align="center">
  Built with ❤️ using React, Node.js, Express, MongoDB & Socket.IO
</p>

---

## 🌟 About The Project

**Real-Time Chat Application** is a full-stack messaging application designed to provide a smooth, interactive, and real-time communication experience.

The application allows users to register, log in securely, view available users, communicate through instant messages, see online users, receive typing indicators, and track unread messages.

The project combines a **React frontend**, **Node.js + Express backend**, **MongoDB database**, and **Socket.IO real-time communication layer**.

### 🎯 Main Goal

The main goal of this project is to understand and implement how a complete full-stack application works when:

- Frontend and backend communicate through APIs
- Users are authenticated securely
- Data is stored in MongoDB
- Redux manages application state
- Socket.IO provides real-time communication

---

# ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- User Logout
- JWT Authentication
- Cookie-based authentication
- Protected routes

### 💬 Chat
- Real-time messaging
- User-to-user conversations
- Message persistence
- Message timestamps

### 🟢 Real-Time Status
- Online users
- Offline users
- Real-time connection tracking

### ⌨️ Typing Experience
- Real-time typing indicator
- Socket-based typing events

### 🔔 Notifications
- Unread message count
- Real-time unread updates

---

# 🖼️ Application Preview

## 🔐 User Registration

Users can create a new account through the registration page.

<p align="center">
  <img src="server/screenshot/register.png" alt="Register Page" width="800"/>
</p>

---

## 🔑 User Login

After registration, users can securely log in to access the chat application.

<p align="center">
  <img src="server/screenshot/login.png" alt="Login Page" width="800"/>
</p>

---

# 🔐 Authentication System

The application uses **JWT-based authentication with cookies**.

The authentication process works like this:

```text
          👤 User
             │
             ▼
      Register / Login
             │
             ▼
        Express API
             │
             ▼
      User Validation
             │
             ▼
         JWT Token
             │
             ▼
      🍪 Authentication Cookie
             │
             ▼
       🛡️ Protected Routes
The protect middleware checks the authentication token before allowing access to protected resources.
This helps prevent unauthorized users from accessing private chat functionality.
💬 Real-Time Chat
The main feature of the application is real-time communication.
Instead of waiting for the page to refresh, Socket.IO allows messages and events to be delivered instantly.
👤 Sender
    │
    ▼
💬 ChatThread
    │
    ▼
⚡ Socket.IO
    │
    ▼
🖥️ Server
    │
    ▼
⚡ Socket.IO
    │
    ▼
👤 Recipient
Messages can also be stored in MongoDB so that conversations remain available.
🟢 Online Users
The application tracks users who are currently connected.
When a user connects to the application, Socket.IO informs the server and the user's online status can be reflected in the user list.
👤 User Opens Application
          │
          ▼
    Socket Connection
          │
          ▼
    Server Detects User
          │
          ▼
    Online Users Updated
          │
          ▼
       User List
Online User Preview
�
￼ 

⌨️ Typing Indicator
The application provides a real-time typing indicator.
When one user starts typing, a socket event is sent to the other user.
⌨️ User Starts Typing
          │
          ▼
     Typing Event
          │
          ▼
       Socket.IO
          │
          ▼
     Other User
          │
          ▼
     "Typing..."
Typing Preview
�
￼ 

🔔 Unread Messages
The application also handles unread messages.
If a new message arrives while a conversation is not active, the user can see an unread message count.
💬 New Message
      │
      ▼
Chat Not Active
      │
      ▼
🔔 Unread Count
      │
      ▼
👥 User List
Unread Message Preview
�
￼ 

⚡ Socket.IO Architecture
Socket.IO is responsible for the real-time layer of the application.
It handles events related to:
💬 Messages
🟢 Online users
⌨️ Typing
🔔 Unread messages
🔌 User connection
❌ User disconnection
Real-Time Architecture
                CLIENT
                  │
          ┌───────┴────────┐
          │                │
       REST API        Socket.IO
          │                │
          ▼                ▼
       SERVER ◄──────► REAL-TIME EVENTS
          │
          ▼
       MongoDB
🏗️ Project Architecture
The project follows a client-server architecture.
                 💬 CHAT APPLICATION
                         │
          ┌──────────────┴──────────────┐
          │                             │
      ⚛️ CLIENT                     🖥️ SERVER
          │                             │
       React.js                      Node.js
          │                           Express
     Redux Toolkit                     │
          │                       Controllers
     Socket.IO                         │
          │                          Routes
          │                             │
          └──────────────┬──────────────┘
                         │
                    ⚡ Socket.IO
                         │
                    🍃 MongoDB
📁 Project Structure
Chat Application/
│
├── 📁 client/
│   │
│   ├── 📁 components/
│   │   ├── 💬 ChatThread.jsx
│   │   └── 👥 UserList.jsx
│   │
│   ├── 📁 pages/
│   │   ├── 💬 Chat.jsx
│   │   ├── 🔑 Login.jsx
│   │   └── 📝 Register.jsx
│   │
│   ├── 📁 slice/
│   │   ├── 🔐 authService.js
│   │   ├── 🔐 authSlice.js
│   │   ├── 💬 chatSlice.js
│   │   └── 🏪 store.js
│   │
│   ├── 🌐 api.js
│   └── ⚡ socket.js
│
├── 📁 server/
│   │
│   ├── 📁 connection/
│   │   └── 🗄️ database.js
│   │
│   ├── 📁 controllers/
│   │   ├── 💬 chat.js
│   │   └── 👤 user.js
│   │
│   ├── 📁 helper/
│   │   └── 🍪 cookie.js
│   │
│   ├── 📁 middleware/
│   │   └── 🛡️ protect.js
│   │
│   ├── 📁 models/
│   │   ├── 💬 Message.js
│   │   └── 👤 User.js
│   │
│   ├── 📁 routes/
│   │   ├── 🔐 auth.js
│   │   └── 💬 chat.js
│   │
│   ├── 📁 screenshot/
│   │   ├── 🖼️ login.png
│   │   ├── 🖼️ online.png
│   │   ├── 🖼️ register.png
│   │   ├── 🖼️ two terminals.png
│   │   ├── 🖼️ typing.png
│   │   └── 🖼️ unread.png
│   │
│   ├── ⚙️ .env
│   ├── 🖥️ server.js
│   └── ⚡ socket.js
│
├── ⚙️ .env.example
├── 🚫 .gitignore
└── 📖 README.md
🧠 Redux State Management
Redux Toolkit is used to manage important application state.
authSlice.js
Responsible for authentication-related state such as:
User authentication
Login state
Registration state
Authentication errors
chatSlice.js
Responsible for chat-related state such as:
Users
Active user
Online users
Messages
Unread message count
Chat state
store.js
The Redux store combines the application's slices and provides centralized state management.
              Redux Store
                  │
          ┌───────┴───────┐
          │               │
     Auth Slice       Chat Slice
          │               │
          ▼               ▼
     Authentication     Chat Data
🧩 Frontend Components
💬 ChatThread.jsx
Responsible for displaying the active conversation.
It handles:
Messages
Message timestamps
Sending messages
Typing state
Active conversation
👥 UserList.jsx
Displays available users and their current chat-related status.
It can display:
User names
Online status
Active user
Unread message count
🖥️ Backend
The server handles the application's core backend operations.
Controllers
controllers/
├── chat.js
└── user.js
user.js → User-related operations
chat.js → Chat and message operations
Models
models/
├── User.js
└── Message.js
User.js → User data
Message.js → Message data
Routes
routes/
├── auth.js
└── chat.js
auth.js → Authentication routes
chat.js → Chat-related routes
🗄️ MongoDB
MongoDB is used for persistent data storage.
The main collections are represented through:
👤 User
   │
   └── User information

💬 Message
   │
   └── Chat messages
Mongoose is used to define schemas and communicate with MongoDB.
📸 Development Preview
The project also includes a screenshot showing the development environment with two terminals.
�
￼ 

⚙️ Environment Variables
Create a .env file for local configuration.
Example:
PORT=4000
DB_URL=your_database_url
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
⚠️ Never upload your real .env file or secret credentials to GitHub.
🚀 Getting Started
1️⃣ Clone the Repository
git clone <your-repository-url>
cd <project-folder>
2️⃣ Install Server Dependencies
cd server
npm install
3️⃣ Install Client Dependencies
Open another terminal:
cd client
npm install
4️⃣ Start the Server
cd server
npm run dev
5️⃣ Start the Client
In another terminal:
cd client
npm run dev
🔄 Complete Application Flow
                 👤 USER
                    │
                    ▼
             🔐 Authentication
                    │
                    ▼
               💬 Chat Page
                    │
          ┌─────────┴─────────┐
          │                   │
          ▼                   ▼
      👥 User List        💬 Chat Thread
          │                   │
          │                   ▼
          │              ⚡ Socket.IO
          │                   │
          └─────────┬─────────┘
                    ▼
              🖥️ Server
                    │
                    ▼
               🍃 MongoDB
🌟 What This Project Demonstrates
This project demonstrates practical knowledge of:
Frontend
React.js
Component-based architecture
Redux Toolkit
API integration
Socket.IO client
Backend
Node.js
Express.js
REST APIs
Controllers
Middleware
MongoDB
Mongoose
Authentication
JWT
Cookies
Protected routes
Real-Time Communication
Socket.IO
Real-time messaging
Online user tracking
Typing indicators
Unread messages
🎯 Learning Outcomes
Through this project, the following concepts were practically implemented:
Building a complete full-stack application
Connecting React with an Express backend
Working with MongoDB and Mongoose
Implementing authentication
Managing global state with Redux Toolkit
Creating protected backend routes
Understanding Socket.IO events
Building real-time communication
Managing online users and chat status
👩‍💻 Author
Your Name
Full-Stack Development Project
�

💜 Built with React, Node.js, MongoDB & Socket.IO



Learn • Build • Debug • Improve 🚀
�
```
⚠️ One important thing
For the screenshots to actually appear on GitHub, your repository must contain:
server/
└── screenshot/
    ├── login.png
    ├── online.png
    ├── register.png
    ├── two terminals.png
    ├── typing.png
    └── unread.png
And the README.md must be in the main/root folder.
So you don't have to manually paste a long GitHub URL for every picture—the paths in this README point directly to your own images inside your repository.