# Advanced Todo List Application

A modern, full-stack todo application built with Node.js, Express, MongoDB, and vanilla JavaScript with a beautiful responsive UI.

## Features

### 🚀 Core Functionality

- ✅ Create, read, update, and delete todos
- ✅ Mark todos as complete/incomplete
- ✅ Priority levels (High, Medium, Low)
- ✅ Categories for organization
- ✅ Real-time statistics dashboard

### 🎨 Modern UI/UX

- ✅ Responsive design that works on all devices
- ✅ Beautiful gradient backgrounds and glassmorphism effects
- ✅ Smooth animations and hover effects
- ✅ Intuitive controls and visual feedback

### 📊 Advanced Features

- ✅ Filter todos (All, Pending, Completed)
- ✅ Sort by date, priority, or alphabetically
- ✅ Bulk operations (complete all, delete completed)
- ✅ Statistics tracking (completion rate, counts)
- ✅ Timestamp tracking for creation and updates

### 🔒 Security Features

- ✅ Input validation and sanitization
- ✅ XSS protection through proper escaping
- ✅ CORS configuration
- ✅ Error handling and user feedback

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** - [Download here](https://www.mongodb.com/try/download/community)

## Installation & Setup

### 1. Clone or Create Project Directory

```bash
mkdir advanced-todo-app
cd advanced-todo-app
```

### 2. Create Project Structure

```
advanced-todo-app/
├── server.js
├── package.json
├── README.md
└── public/
    └── index.html
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start MongoDB

Make sure MongoDB is running on your system:

```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Ubuntu/Debian
sudo systemctl start mongod

# On Windows, start MongoDB service from Services app
```
