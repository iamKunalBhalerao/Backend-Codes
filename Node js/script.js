const fs = require("fs");

fs.writeFile(
  "new.txt",
  "This is new file created using node js fie system",
  (err) => {
    if (err) console.log(err);
    else console.log("Done! File is created");
  }
);
