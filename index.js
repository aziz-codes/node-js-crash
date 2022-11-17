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
console.log(__filename);

//writing file

fs.writeFile(
  path.join(__dirname, "files", "reply.txt"),
  "This is how you can reaf to some files",
  (err) => {
    if (err) {
      console.log("There was an error ", err.message);
    }
    console.log("data");
  }
);
