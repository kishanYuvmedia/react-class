const http = require("http")
const server=http.createServer((req,res)=>{
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello World from Node.js Server 🚀");
})
server.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});


