const http = require("http");

const server = http.createServer((rea, res) => {
  res.end("Hello World");
});

server.listen(3000);
console.log("Server is created at PORT:3000");
