const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("my Name is Kunal Bhalerao");
});

app.listen(3000);
console.log("server is on PORT:3000");
