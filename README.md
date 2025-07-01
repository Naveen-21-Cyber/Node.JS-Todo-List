# Advanced Todo List Application

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A modern, full-stack todo application built with Node.js, Express, MongoDB, and vanilla JavaScript featuring a beautiful responsive UI with glassmorphism design elements.

## 🌟 Demo

![Todo App Demo](https://via.placeholder.com/800x400/1a1a2e/ffffff?text=Advanced+Todo+App+Demo)

*Add your application screenshots here*

## ✨ Features

### 🚀 Core Functionality

- ✅ **CRUD Operations** - Create, read, update, and delete todos
- ✅ **Status Management** - Mark todos as complete/incomplete
- ✅ **Priority Levels** - High, Medium, Low priority assignments
- ✅ **Categories** - Organize todos with custom categories
- ✅ **Real-time Statistics** - Live dashboard with completion metrics

### 🎨 Modern UI/UX

- ✅ **Responsive Design** - Works seamlessly on desktop, tablet, and mobile
- ✅ **Glassmorphism Effects** - Beautiful frosted glass design elements
- ✅ **Smooth Animations** - Fluid transitions and hover effects
- ✅ **Visual Feedback** - Intuitive controls with instant user feedback
- ✅ **Gradient Backgrounds** - Eye-catching modern color schemes

### 📊 Advanced Features

- ✅ **Smart Filtering** - Filter by All, Pending, or Completed status
- ✅ **Multiple Sorting** - Sort by date, priority, or alphabetically
- ✅ **Bulk Operations** - Complete all todos or delete completed items
- ✅ **Progress Tracking** - Completion rate and detailed statistics
- ✅ **Timestamp Management** - Track creation and update times

### 🔒 Security & Performance

- ✅ **Input Validation** - Server-side validation and sanitization
- ✅ **XSS Protection** - Proper output escaping and security headers
- ✅ **CORS Configuration** - Cross-origin resource sharing setup
- ✅ **Error Handling** - Comprehensive error management with user feedback
- ✅ **Database Optimization** - Efficient MongoDB queries and indexing

## 🛠️ Tech Stack

**Frontend:**
- HTML5
- CSS3 (Custom styling with glassmorphism effects)
- Vanilla JavaScript (ES6+)

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose ODM

**Additional Libraries:**
- cors - Cross-origin resource sharing
- body-parser - Request body parsing
- mongoose - MongoDB object modeling

## 📋 Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (v4.0 or higher) - [Download here](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/advanced-todo-app.git
cd advanced-todo-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/todoapp
NODE_ENV=development
```

### 4. Start MongoDB Service

**macOS (with Homebrew):**
```bash
brew services start mongodb-community
```

**Ubuntu/Debian:**
```bash
sudo systemctl start mongod
sudo systemctl enable mongod
```

**Windows:**
Start MongoDB service from Windows Services or run:
```bash
net start MongoDB
```

### 5. Run the Application

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
advanced-todo-app/
├── server.js              # Main server file
├── package.json           # Project dependencies and scripts
├── README.md             # Project documentation
├── .env                  # Environment variables (create this)
├── .gitignore           # Git ignore rules
├── public/              # Static files
│   ├── index.html       # Main HTML file
│   ├── style.css        # Custom styles
│   └── script.js        # Frontend JavaScript
├── models/              # Database models (if using separate files)
│   └── Todo.js          # Todo model schema
└── routes/              # API routes (if using separate files)
    └── todos.js         # Todo routes
```

## 🔧 Configuration

### Database Configuration

The application uses MongoDB as the database. Default configuration:

- **Host:** localhost
- **Port:** 27017
- **Database:** todoapp

To use a different database, update the `MONGODB_URI` in your `.env` file:

```env
MONGODB_URI=mongodb://your-host:your-port/your-database-name
```

### Server Configuration

Default server settings:

- **Port:** 3000
- **Environment:** development

## 📚 API Documentation

### Base URL
```
http://localhost:3000/api
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update a specific todo |
| DELETE | `/todos/:id` | Delete a specific todo |
| PUT | `/todos/:id/toggle` | Toggle todo completion status |

### Request/Response Examples

**GET /api/todos**
```json
{
  "success": true,
  "data": [
    {
      "_id": "60d5ecb54b24a6001f647d8b",
      "text": "Complete project documentation",
      "completed": false,
      "priority": "high",
      "category": "work",
      "createdAt": "2021-06-25T10:30:00.000Z",
      "updatedAt": "2021-06-25T10:30:00.000Z"
    }
  ]
}
```

**POST /api/todos**
```json
{
  "text": "Learn Node.js",
  "priority": "medium",
  "category": "learning"
}
```

## 🎮 Usage

### Creating a Todo

1. Enter your todo text in the input field
2. Select priority level (High, Medium, Low)
3. Choose or create a category
4. Click "Add Todo" or press Enter

### Managing Todos

- **Complete/Uncomplete:** Click the checkbox next to any todo
- **Edit:** Click the edit icon to modify todo text
- **Delete:** Click the delete icon to remove a todo
- **Bulk Actions:** Use "Complete All" or "Delete Completed" buttons

### Filtering and Sorting

- **Filter:** Use the filter dropdown to show All, Pending, or Completed todos
- **Sort:** Use the sort dropdown to organize by Date, Priority, or Alphabetically

## 🧪 Testing

Run the test suite (if implemented):

```bash
npm test
```

## 🚀 Deployment

### Using Heroku

1. Install Heroku CLI
2. Create a new Heroku app:
   ```bash
   heroku create your-app-name
   ```
3. Set environment variables:
   ```bash
   heroku config:set MONGODB_URI=your-mongodb-connection-string
   ```
4. Deploy:
   ```bash
   git push heroku main
   ```

### Using Docker

Create a `Dockerfile`:

```dockerfile
FROM node:14-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t advanced-todo-app .
docker run -p 3000:3000 advanced-todo-app
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow ESLint configuration for code style
- Write clear, descriptive commit messages
- Add comments for complex functionality
- Update documentation for new features
- Test your changes thoroughly

## 🐛 Troubleshooting

### Common Issues

**MongoDB Connection Error:**
```
Error: connect ECONNREFUSED 127.0.0.1:27017
```
**Solution:** Ensure MongoDB service is running

**Port Already in Use:**
```
Error: listen EADDRINUSE :::3000
```
**Solution:** Change port in `.env` file or kill process using port 3000

**Dependencies Installation Issues:**
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Node.js](https://nodejs.org/) - JavaScript runtime
- [Express.js](https://expressjs.com/) - Web framework
- [MongoDB](https://www.mongodb.com/) - Database
- [Mongoose](https://mongoosejs.com/) - MongoDB ODM
- Inspiration from modern todo applications

## 📈 Roadmap

- [ ] User authentication and authorization
- [ ] Cloud storage integration
- [ ] Mobile app development
- [ ] Real-time collaboration features
- [ ] Advanced analytics and reporting
- [ ] Theme customization options
- [ ] Offline functionality with service workers
- [ ] Integration with calendar applications

---

⭐ **If you found this project helpful, please consider giving it a star!** ⭐
