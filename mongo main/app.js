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
  let updateduser = await usermodel.findOneAndUpdate(
    { username: "iamkunal" },
    { name: "Kunal Balu Bhalerao" },
    { new: true }
  );
  res.send(updateduser);
});

app.listen(3000);
console.log("server is on PORT:3000");
