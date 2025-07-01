const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/todoapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Todo Schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  category: {
    type: String,
    default: "general",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

// API Routes

// Get all todos
app.get("/api/todos", async (req, res) => {
  try {
    const { filter, sort } = req.query;
    let query = {};

    if (filter === "completed") {
      query.completed = true;
    } else if (filter === "pending") {
      query.completed = false;
    }

    let sortOption = { createdAt: -1 };
    if (sort === "priority") {
      sortOption = { priority: -1, createdAt: -1 };
    } else if (sort === "alphabetical") {
      sortOption = { text: 1 };
    }

    const todos = await Todo.find(query).sort(sortOption);
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new todo
app.post("/api/todos", async (req, res) => {
  try {
    const { text, priority, category } = req.body;

    if (!text || text.trim() === "") {
      return res.status(400).json({ error: "Todo text is required" });
    }

    const todo = new Todo({
      text: text.trim(),
      priority: priority || "medium",
      category: category || "general",
    });

    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update todo
app.put("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updates = { ...req.body, updatedAt: new Date() };

    const todo = await Todo.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(todo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete todo
app.delete("/api/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);

    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Bulk operations
app.post("/api/todos/bulk-complete", async (req, res) => {
  try {
    await Todo.updateMany(
      { completed: false },
      { completed: true, updatedAt: new Date() }
    );
    res.json({ message: "All todos marked as completed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/api/todos/bulk-delete-completed", async (req, res) => {
  try {
    const result = await Todo.deleteMany({ completed: true });
    res.json({ message: `${result.deletedCount} completed todos deleted` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Serve frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Visit http://localhost:${PORT} to view the app`);
});
