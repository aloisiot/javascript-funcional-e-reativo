const fs = require("fs");
const path = require("path");
const Logger = require("./legendas/logger");

function getNameListFromFile() {
  const file = path.join(__dirname, "..", "data", "names.txt");
  return new Promise((resolve, reject) => {
    fs.readFile(file, { encoding: "utf-8" }, (error, content) => {
      if (error) {
        reject(error.message);
      } else {
        resolve(content.toString().split("\n"));
      }
    });
  });
}

getNameListFromFile()
  .then(console.log)
  .catch(Logger.error);
