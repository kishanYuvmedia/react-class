Got it 👍 You want just a **simple MongoDB schema (table-like structure)** for a student example in your Express + Node app.

Here’s a **basic Student Schema** using **Mongoose**:

---

### 📌 Example: `studentModel.js`

```js
const mongoose = require("mongoose");

// Define schema for Student
const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  course: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Export Model
module.exports = mongoose.model("Student", studentSchema);
```

---

### 📌 Example: Use in Routes (`server.js`)

```js
const express = require("express");
const mongoose = require("mongoose");
const Student = require("./studentModel"); // import student schema

const app = express();
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/schoolDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.log(err));

// Add Student
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Students
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
```

---

### 📌 Example JSON for Adding a Student (POST `/students`)

```json
{
  "name": "Rahul Sharma",
  "age": 21,
  "course": "Computer Science",
  "email": "rahul@example.com"
}
```

---

This will create a **students collection** in MongoDB with documents like:

```json
{
  "_id": "64ef9b1c2f3d1a9b7c98e7a4",
  "name": "Rahul Sharma",
  "age": 21,
  "course": "Computer Science",
  "email": "rahul@example.com",
  "createdAt": "2025-09-11T10:30:00.000Z"
}
```

---

👉 Do you want me to also add **Update** and **Delete** routes for the Student schema so you can practice full CRUD?
