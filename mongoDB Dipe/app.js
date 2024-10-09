const express = require("express");
const app = express();
const userModel = require("./usermodel");

app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is mongoDB Tutuorial");
});

app.get("/create", async (req, res) => {
  let createdUser = await userModel.create({
    name: "Kunal",
    username: "iamkunal",
    email: "kunal@gmail.com",
  });

  res.send(createdUser);
});

app.listen(3000);
