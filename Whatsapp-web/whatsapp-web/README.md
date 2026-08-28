# 💬 Real-Time Chat Application

> A full-stack real-time chat application built with **React, Node.js, Express, MongoDB and Socket.IO**, providing secure authentication and instant communication between users.

---

## 📌 Overview

This project is a full-stack **Real-Time Chat Application** designed to provide users with a smooth and interactive messaging experience.

The application uses a separate **client** and **server** architecture.

The frontend is responsible for the user interface and client-side state management, while the backend handles authentication, database operations, REST APIs and real-time communication using **Socket.IO**.

The application supports features such as:

- 🔐 User Registration
- 🔑 User Login
- 🍪 Cookie-Based Authentication
- 💬 Real-Time Messaging
- 🟢 Online User Detection
- ⌨️ Typing Indicator
- 🔔 Unread Message Count
- 👥 User List
- 💾 Persistent Chat Messages
- 🔒 Protected Routes
- ⚡ Real-Time Client-Server Communication

---

# ✨ Key Features

## 🔐 Authentication System

The application provides a complete authentication system.

Users can:

- Register a new account
- Login using their credentials
- Logout securely
- Access protected resources only after authentication

Authentication is handled using **JWT (JSON Web Token)** and HTTP-only cookies.

The authentication flow is:

```text
User
  ↓
Login / Register
  ↓
Server Authentication
  ↓
JWT Token
  ↓
HTTP-Only Cookie
  ↓
Protected Requests
The protected middleware verifies the token before allowing access to protected routes.
💬 Real-Time Chat
The main feature of the application is real-time communication.
Instead of repeatedly refreshing the page to receive messages, Socket.IO maintains a real-time connection between the client and server.
User A
   │
   │ Message
   ↓
Client
   │
   │ Socket.IO
   ↓
Server
   │
   │ Socket Event
   ↓
User B
This allows messages to appear instantly for the recipient.
🟢 Online Users
The application keeps track of users who are currently connected to the server.
When a user connects:
User Login
    ↓
Socket Connection
    ↓
Server detects user
    ↓
User becomes Online
When the user disconnects:
Socket Disconnect
       ↓
Server detects disconnect
       ↓
User becomes Offline
The online status can then be reflected in the user list.
⌨️ Typing Indicator
The application also supports a real-time typing indicator.
When one user starts typing, a socket event is emitted to the server and then delivered to the other user.
Example:
User A starts typing
        ↓
typing event
        ↓
Socket.IO Server
        ↓
User B
        ↓
"Typing..."
This provides a more interactive chat experience.
🔔 Unread Messages
The application keeps track of unread messages.
If a user receives a message while they are not currently viewing that conversation, the message can be represented as unread.
Example:
New Message
     ↓
Recipient is not viewing chat
     ↓
Unread count increases
     ↓
User List displays notification
When the conversation is opened, the unread state can be updated.
🗄️ Database
The application uses MongoDB as its database.
MongoDB stores important application data such as:
User information
Chat messages
Authentication-related user data
The backend communicates with MongoDB using Mongoose.
🏗️ Project Architecture
The project follows a full-stack architecture:
                    REAL-TIME CHAT APPLICATION
                              │
              ┌───────────────┴───────────────┐
              │                               │
           CLIENT                           SERVER
              │                               │
        React Frontend                  Node + Express
              │                               │
        Redux Toolkit                    Controllers
              │                               │
        Socket.IO Client                    Routes
              │                               │
            API.js                       Middleware
              │                               │
              └───────────────┬───────────────┘
                              │
                         Socket.IO
                              │
                          MongoDB
📂 Project Structure
Real-Time-Chat/
│
├── client/
│   │
│   ├── components/
│   │   ├── ChatThread.jsx
│   │   └── UserList.jsx
│   │
│   ├── pages/
│   │   ├── Chat.jsx
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── slice/
│   │   ├── authService.js
│   │   ├── authSlice.js
│   │   ├── chatSlice.js
│   │   └── store.js
│   │
│   ├── socket.js
│   ├── api.js
│   └── ...
│
│
├── server/
│   │
│   ├── connection/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   ├── chat.js
│   │   └── user.js
│   │
│   ├── helper/
│   │   └── cookie.js
│   │
│   ├── middleware/
│   │   └── protect.js
│   │
│   ├── models/
│   │   ├── Message.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── auth.js
│   │   └── chat.js
│   │
│   ├── screenshot/
│   │   ├── login.png
│   │   ├── online.png
│   │   ├── register.png
│   │   ├── two terminals.png
│   │   ├── typing.png
│   │   └── unread.png
│   │
│   ├── .env
│   ├── server.js
│   └── socket.js
│
└── README.md
🖥️ Client Side
The client folder contains the complete React frontend.
It is responsible for:
User interface
Authentication pages
Chat interface
User list
Client-side state
API communication
Socket.IO communication
📡 socket.js
The client-side socket.js is responsible for establishing communication between the React application and the Socket.IO server.
It allows the frontend to send and receive real-time events such as:
New messages
Typing status
Online users
Unread messages
User connection/disconnection
🌐 api.js
The api.js file is responsible for configuring communication between the React frontend and the Express backend.
It provides a central place for making HTTP requests to the server.
Instead of writing the server URL repeatedly throughout the application, the API configuration can be maintained in one place.
🧠 Redux State Management
The application uses Redux Toolkit to manage important client-side state.
The Redux structure contains:
slice/
│
├── authService.js
├── authSlice.js
├── chatSlice.js
└── store.js
🔐 authSlice.js
This slice manages authentication-related state.
Examples include:
Current user
Login state
Registration state
Authentication errors
Loading state
💬 chatSlice.js
The chat slice manages chat-related application state.
It can contain information such as:
Users
Active user
Online users
Messages
Unread message count
Chat loading state
Errors
The chat slice acts as an important connection between the React UI and the backend chat functionality.
🏪 store.js
The Redux store combines the application's slices and provides global state management to the React application.
Conceptually:
Redux Store
    │
    ├── Auth State
    │
    └── Chat State
🧩 Components
The components folder contains reusable UI components.
components/
│
├── ChatThread.jsx
└── UserList.jsx
💬 ChatThread.jsx
The ChatThread component is responsible for displaying the active conversation.
It handles the chat area where users can:
View messages
Send messages
See message timestamps
See typing status
Interact with the current conversation
👥 UserList.jsx
The UserList component displays available users.
It can show information such as:
User name
Online/offline status
Active conversation
Unread message count
This component allows the user to select another person to chat with.
📄 Pages
The application contains three main pages:
pages/
│
├── Chat.jsx
├── Login.jsx
└── Register.jsx
🔑 Login.jsx
Provides the login interface.
The user enters their credentials and sends them to the backend for authentication.
📝 Register.jsx
Provides the registration interface.
New users can create an account before accessing the chat application.
💬 Chat.jsx
The main chat page.
It combines important components such as:
Chat Page
   │
   ├── UserList
   │
   └── ChatThread
This creates the main messaging interface.
🖥️ Server Side
The server folder contains the backend of the application.
The backend is responsible for:
API endpoints
Authentication
Database communication
User management
Message management
Socket.IO events
Protected routes
🗄️ Database Connection
The database connection is located inside:
server/
└── connection/
    └── database.js
This file handles the connection between the Node.js server and MongoDB.
The general flow is:
Express Server
      ↓
Database Connection
      ↓
MongoDB
🎮 Controllers
Controllers contain the application's main backend logic.
controllers/
│
├── chat.js
└── user.js
👤 user.js
The user controller handles user-related operations such as:
User registration
User login
User authentication
User-related operations
💬 chat.js
The chat controller handles chat-related backend operations.
This includes functionality related to:
Sending messages
Retrieving messages
Managing conversations
Chat-related requests
🍪 Cookie Helper
The cookie helper manages cookie-related functionality.
Cookies are important for maintaining authentication securely between the client and server.
The authentication system uses cookies to store the JWT authentication token.
🛡️ Protected Middleware
The protect.js middleware is responsible for protecting private routes.
Conceptually:
Client Request
      ↓
Does request contain valid authentication?
      ↓
   ┌──┴──┐
   │     │
  YES    NO
   │     │
   ↓     ↓
Allow   Reject
Request Request
This prevents unauthenticated users from accessing protected resources.
🧱 Models
The application contains two main MongoDB models:
models/
│
├── Message.js
└── User.js
👤 User.js
The User model represents application users.
It stores user-related information required by the authentication and chat system.
💬 Message.js
The Message model represents chat messages.
It stores information required to persist conversations in MongoDB.
This allows messages to remain available even after users leave the application.
🛣️ Routes
The backend routes are located inside:
routes/
│
├── auth.js
└── chat.js
🔐 auth.js
The authentication routes handle operations such as:
Register
Login
Logout
Authentication-related requests
💬 chat.js
The chat routes handle API requests related to conversations and messages.
These routes communicate with the chat controller and database.
⚡ Socket.IO
Socket.IO is one of the most important parts of this project.
The backend socket.js manages real-time communication.
Instead of relying only on normal HTTP requests:
Client → Request → Server
Server → Response → Client
Socket.IO allows continuous real-time communication:
Client ←──── Socket Connection ────→ Server
This makes features such as:
Real-time messages
Online users
Typing indicator
Unread notifications
possible.
🔄 Real-Time Message Flow
A simplified message flow looks like this:
Sender
  ↓
ChatThread
  ↓
Socket Event
  ↓
Socket.IO Server
  ↓
Recipient
  ↓
ChatThread
The message can also be saved to MongoDB so that the conversation remains persistent.
🟢 Online User Flow
User Opens Application
          ↓
Socket Connection
          ↓
Server Detects Connection
          ↓
User Added To Online Users
          ↓
Online Status Broadcast
          ↓
UserList Updates
⌨️ Typing Event Flow
User Types
    ↓
Typing Event
    ↓
Socket.IO
    ↓
Recipient
    ↓
Typing Indicator
When typing stops, another event can update the recipient's UI.
🔔 Unread Message Flow
New Message
     ↓
Recipient
     ↓
Is Chat Currently Open?
     ↓
 ┌───┴────┐
 │        │
 YES      NO
 │        │
 ↓        ↓
Display   Increase
Message   Unread Count
This makes it easier for users to notice messages they haven't viewed yet.
📸 Screenshots
The project includes a dedicated screenshot folder containing screenshots of the application's major features.
server/
└── screenshot/
    │
    ├── login.png
    ├── online.png
    ├── register.png
    ├── two terminals.png
    ├── typing.png
    └── unread.png
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
HTML/CSS
User Interface
🔐 Security
The application includes several security-related concepts:
JWT-based authentication
HTTP-only cookies
Protected backend routes
Authentication middleware
Server-side validation
Database-backed user authentication
Sensitive environment variables are stored inside .env and should never be committed to a public repository.
⚙️ Environment Variables
Create a .env file inside the server directory.
Example:
PORT=4000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLIENT_URL=http://localhost:5173
Replace the example values with your own configuration.
🚀 Installation & Setup
1️⃣ Clone the Repository
git clone <your-repository-url>
Then open the project:
cd Real-Time-Chat
2️⃣ Install Client Dependencies
cd client
npm install
3️⃣ Install Server Dependencies
Open another terminal:
cd server
npm install
4️⃣ Configure Environment Variables
Create:
server/.env
Add your MongoDB connection string, JWT secret and other required configuration.
▶️ Running the Application
You need to run both the frontend and backend.
Terminal 1 — Server
cd server
npm run dev
Terminal 2 — Client
cd client
npm run dev
The frontend and backend will then communicate with each other.
🧪 Application Flow
The complete application flow can be summarized as:
                 REGISTER
                    ↓
                 LOGIN
                    ↓
             Authentication
                    ↓
              Chat Page
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
      User List           Chat Thread
          ↓                   ↓
   Online Status          Messages
                              ↓
                         Socket.IO
                              ↓
                         Real-Time
                              ↓
                         MongoDB
🌟 Project Highlights
This project demonstrates practical knowledge of modern full-stack development.
Frontend
React component architecture
Redux Toolkit
State management
API integration
Socket.IO client
Reusable components
Backend
Node.js
Express.js
REST APIs
MVC-style organization
Authentication middleware
Controllers
MongoDB/Mongoose
Real-Time Communication
Socket connections
Socket events
Online user tracking
Typing indicators
Real-time messages
Unread message handling
📚 What This Project Demonstrates
This project is more than a simple CRUD application.
It demonstrates how multiple technologies work together:
React
  +
Redux
  +
REST API
  +
Express
  +
MongoDB
  +
JWT
  +
Cookies
  +
Socket.IO
  =
Full-Stack Real-Time Application
The project provides practical experience in building a complete application where the frontend, backend, database and real-time communication layer work together.