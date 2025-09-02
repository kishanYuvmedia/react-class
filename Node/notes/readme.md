## 📌 Introduction to Node.js

* **Node.js** is an open-source, cross-platform JavaScript runtime environment.
* It allows you to **run JavaScript outside of a browser** (on the server side).
* Built on **Google Chrome’s V8 engine** (fast execution).
* Uses **non-blocking, event-driven I/O**, making it perfect for scalable and real-time applications (like chat apps, APIs, streaming, etc.).

---

## ✨ Key Features

1. **Asynchronous & Event-Driven** → Handles multiple requests without blocking.
2. **Fast Execution** → Powered by the V8 engine.
3. **Single-Threaded but Scalable** → Uses event loop & worker threads internally.
4. **NPM (Node Package Manager)** → A huge library ecosystem.
5. **Cross-Platform** → Runs on Windows, macOS, Linux.

---

## ⚡ First Example: "Hello World" in Node.js

### Step 1: Check Node.js

```bash
node -v
```

### Step 2: Create a File (`app.js`)

```js
// app.js

// Import http module
const http = require("http");

// Create a server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from Node.js Server 🚀");
});

// Start server on port 3000
server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
```

### Step 3: Run the file

```bash
node app.js
```

👉 Open **[http://localhost:3000](http://localhost:3000)** in your browser → You’ll see
`Hello World from Node.js Server 🚀`

---

## ✅ Summary

* Node.js lets you use JavaScript to build **server-side applications**.
* You created your **first HTTP server** with just a few lines.
* Next, you can explore **modules, NPM packages, and Express.js**.

---
