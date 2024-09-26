const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("This is Main page");
});

app.get("/profile", (req, res) => {
  res.send("This is Profile page");
});

app.listen(3000);
console.log("server is on PORT:3000");
