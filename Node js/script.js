const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("Middleware Chala");
  next();
});

app.get("/", (req, res) => {
  res.send("my Name is Kunal Bhalerao, and This is main page");
});

app.get("/profile", (req, res) => {
  res.send("This is Profile Page page");
});

app.use((err, req, res, next) => {
  console.erroe(err.stack);
  res.status(500).send("something Broke!");
});

app.listen(3000);
console.log("server is on PORT:3000");
