const express = require("express");
const app = express();
const usermodel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await usermodel.create({
    name: "Prem Borawake",
    username: "iamPrem",
    email: "premborawake234@gmail.com",
  });
  res.send(createduser);
});

app.get("/users", async (req, res) => {
  let users = await usermodel.find();
  res.send(users);
});

app.get("/update", async (req, res) => {
  let updateduser = await usermodel.findOneAndUpdate(
    { username: "iamPrem" },
    { name: "Prem Girish Borawake" },
    { new: true }
  );
  res.send(updateduser);
});

app.get("/delete", async (req, res) => {
  let duser = await usermodel.findOneAndDelete({ username: "iamPrem" });
  res.send(duser);
});

app.listen(3000);
console.log("server is on PORT:3000");
