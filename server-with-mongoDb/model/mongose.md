Got it 👍 You want to see a **file-to-file structured Mongoose example** (like in a real project).
Here’s a simple **Node.js + Express + Mongoose** setup with proper file separation:

---

## 📂 Project Structure

```
myapp/
│-- server.js         # Main entry point
│-- config/
│    └── db.js        # Database connection
│-- models/
│    └── User.js      # Mongoose Schema & Model
│-- routes/
│    └── userRoutes.js # Routes for CRUD
│-- controllers/
│    └── userController.js # Business logic
│-- package.json
```

---

### 🔹 1. `config/db.js` – MongoDB Connection

```js
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydb');
    console.log("✅ MongoDB Connected");
  } catch (err) {
    console.error("❌ MongoDB Connection Failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
```

---

### 🔹 2. `models/User.js` – User Schema & Model

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  age: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
```

---

### 🔹 3. `controllers/userController.js` – Business Logic

```js
const User = require('../models/User');

// CREATE User
exports.createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET All Users
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// UPDATE User
exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE User
exports.deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
```

---

### 🔹 4. `routes/userRoutes.js` – Routes

```js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.post('/', userController.createUser);
router.get('/', userController.getUsers);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
```

---

### 🔹 5. `server.js` – Main Entry Point

```js
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 5000;

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Routes
app.use('/api/users', userRoutes);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
```

---

✅ Now run:

```bash
npm init -y
npm install express mongoose
node server.js
```

Then test API in **Postman / curl**:

* `POST http://localhost:5000/api/users` → Create User
* `GET http://localhost:5000/api/users` → Get All Users
* `PUT http://localhost:5000/api/users/:id` → Update User
* `DELETE http://localhost:5000/api/users/:id` → Delete User

---
