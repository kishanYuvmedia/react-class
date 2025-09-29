mongoose all model method
https://mongoosejs.com/docs/api/model.html

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("User", userSchema);



const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User
    required: true,
  },
});

module.exports = mongoose.model("Post", postSchema);



const postSchema = new mongoose.Schema({
  title: String,
  content: String,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  posts: [postSchema], // Embedded
});

const User = mongoose.model("User", userSchema);


const user = await User.create({
  name: "Kishan",
  email: "kishan@example.com",
  posts: [{ title: "First Post", content: "Hello World" }],
});




Got it 👍 You want an **API that calls an external API** and then sends that data through **your own API**.
Here’s a simple **Node.js (Express)** example:

---

### Example: API with External API Call

```javascript
// server.js
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 5000;

// Your API route
app.get("/my-api", async (req, res) => {
  try {
    // Call external API (Example: JSONPlaceholder fake API)
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    // You can filter/modify data here if needed
    const filteredData = data.slice(0, 5); // send only first 5 posts

    // Send data back from your API
    res.json({
      success: true,
      source: "External API",
      count: filteredData.length,
      data: filteredData,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching external API",
      error: error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

---

### How It Works

1. Start your server:

   ```bash
   node server.js
   ```
2. Call your API:

   ```
   http://localhost:5000/my-api
   ```
3. Your API will fetch data from **JSONPlaceholder** and return it as your own API response.

---

👉 Do you want me to also create a **Python FastAPI** version of this example, or should I keep it only in **Node.js/Express**?
