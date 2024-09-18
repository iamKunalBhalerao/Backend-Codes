const fs = require("fs");

fs.appendFile("new.txt", " hip Hip Hureeeeeeeeeeee", (err) => {
  if (err) console.log(error);
  else console.log("File is Updated");
});
