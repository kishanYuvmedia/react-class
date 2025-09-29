const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const port = 5000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URL & Database
const url = "mongodb://127.0.0.1:27017";
const dbName = "mydatabase";
const client = new MongoClient(url);

// Connect to MongoDB once at startup
let db;
async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("✅ MongoDB connected!");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
  }
}
connectDB();

// Simple API Routes
app.get("/", (req, res) => {
  res.send("Hello from Express + MongoDB 🚀");
});

// Insert user
app.post("/users", async (req, res) => {
  try {
    const result = await db.collection("users").insertOne(req.body);
    res.json({ message: "User added", id: result.insertedId });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await db.collection("users").find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
