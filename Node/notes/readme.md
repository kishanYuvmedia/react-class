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

### **1. Initialize Project**

```bash
mkdir node-express-class
cd node-express-class
npm init -y
npm install express
```

---

### **2. Create `index.js`**

```js
// Import express
const express = require("express");

// Create an express app
const app = express();

// Define a port
const PORT = 3000;

// Basic GET API
app.get("/", (req, res) => {
  res.send("Welcome to Node.js + Express.js class!");
});

app.get("/student", (req, res) => {
  res.json({
    id: 1,
    name: "John Doe",
    course: "Node.js Basics",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
```

---

### **3. Run the Server**

```bash
node index.js
```

---

### **4. Test in Browser / Postman**

* Open: [http://localhost:3000/](http://localhost:3000/) → shows `"Welcome to Node.js + Express.js class!"`
* Open: [http://localhost:3000/student](http://localhost:3000/student) → shows student JSON



## ✅ Summary

* Node.js lets you use JavaScript to build **server-side applications**.
* You created your **first HTTP server** with just a few lines.
* Next, you can explore **modules, NPM packages, and Express.js**.

---
Perfect 👍 Let’s go step by step and **explain how Node.js executes this example**.

Here’s the code again for reference:

```js
console.log("1. Start");

process.nextTick(() => {
  console.log("2. Next tick");
});

Promise.resolve().then(() => {
  console.log("3. Promise");
});

setTimeout(() => {
  console.log("4. Timeout");
}, 0);

setImmediate(() => {
  console.log("5. Immediate");
});

console.log("6. End");
```

---

## 🔎 Step-by-step Execution Flow in Node.js

### **1. Synchronous code runs first**

```js
console.log("1. Start");
console.log("6. End");
```

* Both are **synchronous** → executed immediately.
  ✅ Output so far:

```
1. Start
6. End
```

---

### **2. process.nextTick()**

* `process.nextTick()` runs **after the current synchronous code** but **before any Promise callbacks**.
* It’s considered the **highest-priority microtask** in Node.js.

✅ Output:

```
2. Next tick
```

---

### **3. Promise (Microtask)**

* Promises are also **microtasks**, but in Node.js they run **after `process.nextTick()`**.
* So the `Promise.resolve().then(...)` executes next.

✅ Output:

```
3. Promise
```

---

### **4. setTimeout()**

* Timers (`setTimeout`) belong to the **Timers phase** of the Event Loop.
* They are executed in the **next iteration of the event loop** (after microtasks are done).

✅ Output:

```
4. Timeout
```

---

### **5. setImmediate()**

* `setImmediate()` callbacks run in the **Check phase** of the Event Loop.
* That’s **after I/O events and after Timers** (usually).

✅ Output:

```
5. Immediate
```

---

## ✅ Final Output

```
1. Start
6. End
2. Next tick
3. Promise
4. Timeout
5. Immediate
```

---

## 📊 Quick Comparison Table

| Function           | Type      | When It Runs                             |
| ------------------ | --------- | ---------------------------------------- |
| `console.log`      | Sync      | Immediately, in order                    |
| `process.nextTick` | Microtask | After sync code, before Promises         |
| `Promise.then`     | Microtask | After `nextTick`, before timers          |
| `setTimeout`       | Macrotask | Timers phase (next event loop iteration) |
| `setImmediate`     | Macrotask | Check phase (after timers)               |

---

👉 Would you like me to also create a **diagram of the Node.js Event Loop phases** so your team can easily visualize how `nextTick`, Promises, and timers are prioritized?
