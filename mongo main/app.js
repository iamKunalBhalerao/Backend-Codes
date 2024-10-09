const express = require("express");
const app = express();
const usermodel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await usermodel.create({
    name: "Kunal Bhalerao",
    username: "iamkunal",
    email: "kunalbhalerao789@gmail.com",
  });
  res.send(createduser);
});

app.get("/update", async (req, res) => {
  usermodel.findOneUpdate(
    { username: "iamkunal" },
    { name: "Kunal Balu Bhalerao" },
    { new: true }
  );
});

app.listen(3000);
console.log("server is on PORT:3000");
