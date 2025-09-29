const { MongoClient, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = 3001;

app.use(express.json());

const url = "mongodb://127.0.0.1:27017";
const dbName = "collage";
const client = new MongoClient(url);
let db;

// Connect MongoDB
async function connectDB() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log("✅ MongoDB Connected");
  } catch (error) {
    console.log("❌ DB Connection Error:", error);
  }
}
connectDB();


// ==================== ROUTES ====================

// GET all users
app.get("/api/users", async (req, res) => {
  try {
    const users = await db.collection("user").find().toArray();
    res.json(users);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET user by ID
app.get("/api/users/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const user = await db.collection("user").findOne({ _id: id });
    if (!user) return res.status(404).send("User not found");
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// CREATE user
app.post("/api/users", async (req, res) => {
  try {
    const result = await db.collection("user").insertOne(req.body);
    res.json({ message: "User created", id: result.insertedId });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// UPDATE user
app.put("/api/users/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await db.collection("user").updateOne(
      { _id: id },
      { $set: req.body }
    );
    res.json({ message: "User updated", modifiedCount: result.modifiedCount });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE user
app.delete("/api/users/:id", async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);
    const result = await db.collection("user").deleteOne({ _id: id });
    res.json({ message: "User deleted", deletedCount: result.deletedCount });
  } catch (err) {
    res.status(500).send(err.message);
  }
});


// ==================== START SERVER ====================
app.listen(port, () => {
  console.log(`🚀 Example app listening on port ${port}`);
});
