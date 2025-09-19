# ✨ Modern Task Manager

A beautiful, responsive task management application built with Node.js, Express, and MongoDB. Features a modern glassmorphism UI design with smooth animations and real-time updates.

![Task Manager Preview](https://img.shields.io/badge/Status-Active-brightgreen) ![Node.js](https://img.shields.io/badge/Node.js-v22.18.0-green) ![MongoDB](https://img.shields.io/badge/Database-MongoDB-green) ![License](https://img.shields.io/badge/License-MIT-blue)

## 🚀 Features

- ✅ **Create, Read, Update, Delete** tasks with full CRUD operations
- 🎨 **Modern UI Design** with glassmorphism effects and gradient backgrounds
- 📱 **Responsive Design** that works on all devices
- ⚡ **Real-time Updates** with optimized DOM manipulation
- 🔄 **Smooth Animations** for better user experience
- 💾 **Persistent Storage** with MongoDB database
- 🛡️ **Error Handling** with user-friendly feedback
- 📝 **Input Validation** with character limits and required fields

## 🛠️ Tech Stack

### Backend

- **Node.js** - Runtime environment
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling

### Frontend

- **Vanilla JavaScript** - No frameworks, pure JS
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Axios** - HTTP client for API requests
- **Font Awesome** - Icon library

### Development Tools

- **Nodemon** - Development server with auto-restart
- **dotenv** - Environment variable management

## 📦 Installation

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB installation
- Git

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/task-manager.git
   cd task-manager
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory:

   ```env
   MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/TASK-MANAGER?retryWrites=true&w=majority
   PORT=3000
   ```

4. **Start the application**

   Development mode:

   ```bash
   npm run dev
   ```

   Production mode:

   ```bash
   npm start
   ```

5. **Open your browser**

   Navigate to `http://localhost:3000`

## 📁 Project Structure

```
task-manager/
├── controllers/
│   └── tasksController.js     # Task CRUD operations
├── db/
│   └── connect.js            # Database connection
├── models/
│   └── taskModel.js          # Task schema definition
├── public/
│   ├── index.html           # Main page
│   ├── task.html            # Edit task page
│   ├── main.css             # Styles with glassmorphism
│   ├── normalize.css        # CSS reset
│   ├── browser-app.js       # Main page JavaScript
│   ├── edit-task.js         # Edit page JavaScript
│   └── favicon.ico          # App icon
├── routes/
│   └── tasks.js             # API routes
├── .env                     # Environment variables
├── app.js                   # Main application file
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 🔧 API Endpoints

| Method | Endpoint            | Description             |
| ------ | ------------------- | ----------------------- |
| GET    | `/api/v1/tasks`     | Get all tasks           |
| POST   | `/api/v1/tasks`     | Create a new task       |
| GET    | `/api/v1/tasks/:id` | Get a specific task     |
| PATCH  | `/api/v1/tasks/:id` | Update a task (partial) |
| PUT    | `/api/v1/tasks/:id` | Replace a task (full)   |
| DELETE | `/api/v1/tasks/:id` | Delete a task           |

### Request/Response Examples

**Create Task (POST)**

```json
// Request
{
  "name": "Buy groceries"
}

// Response
{
  "task": {
    "_id": "66eafc6b3e0a6a0a8d6e7c21",
    "name": "Buy groceries",
    "completed": false
  }
}
```

**Update Task (PATCH)**

```json
// Request
{
  "completed": true
}

// Response
{
  "task": {
    "_id": "66eafc6b3e0a6a0a8d6e7c21",
    "name": "Buy groceries",
    "completed": true
  }
}
```

## 🎨 UI Features

### Design Elements

- **Glassmorphism Cards** - Semi-transparent cards with backdrop blur
- **Gradient Backgrounds** - Beautiful purple-blue gradient
- **Smooth Animations** - CSS transitions and keyframe animations
- **Interactive Buttons** - Hover effects with shimmer animations
- **Responsive Layout** - Mobile-first design approach

### User Experience

- **Instant Feedback** - Loading states and success/error messages
- **Optimized Performance** - DOM manipulation instead of full page reloads
- **Accessibility** - Proper semantic HTML and keyboard navigation
- **Visual Hierarchy** - Clear typography and spacing

## 🔒 Environment Variables

| Variable    | Description               | Example             |
| ----------- | ------------------------- | ------------------- |
| `MONGO_URI` | MongoDB connection string | `mongodb+srv://...` |
| `PORT`      | Server port number        | `3000`              |

## 📋 Task Schema

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 20
  },
  completed: {
    type: Boolean,
    default: false
  }
}
```

## 🚀 Deployment

### Heroku Deployment

1. **Install Heroku CLI**
2. **Create Heroku app**
   ```bash
   heroku create your-app-name
   ```
3. **Set environment variables**
   ```bash
   heroku config:set MONGO_URI=your_mongodb_uri
   ```
4. **Deploy**
   ```bash
   git push heroku main
   ```

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```
2. **Deploy**
   ```bash
   vercel
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**

- GitHub: [@ismailumutluoglu](https://github.com/ismailumutluoglu)
- LinkedIn: [İsmail Umutluoğlu](https://www.linkedin.com/in/ismail-umutluoglu-a82955262)

## 🙏 Acknowledgments

- Font Awesome for beautiful icons
- MongoDB Atlas for database hosting
- Express.js community for excellent documentation
- CSS-Tricks for glassmorphism inspiration

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Task categories and tags
- [ ] Due dates and reminders
- [ ] Dark/Light theme toggle
- [ ] Task search and filtering
- [ ] Drag and drop reordering
- [ ] Task priority levels
- [ ] Export tasks to CSV/PDF
- [ ] Progressive Web App (PWA) features
- [ ] Real-time collaboration

---

⭐ **Star this repository if you found it helpful!**
