const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:kunal%400987654321@cluster01.idhxuih.mongodb.net/newDB"
);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

module.exports = mongoose.model("user", userSchema);
