const fs = require("fs");
const path = require("path");
fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (err, data) => {
    if (err) {
      console.log("There was an error ", err.message);
    }
    console.log(data);
  }
);
