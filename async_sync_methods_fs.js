// https://medium.com/javascript-in-plain-english/understand-how-asynchronous-and-synchronous-methods-differ-in-javascript-through-file-reading-fa90134a990c

const fs = require("fs");

console.log("start");

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("first", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("second", data.toString());
});

fs.readFile("./readme.txt", (err, data) => {
  if (err) {
    throw err;
  }
  console.log("third", data.toString());
});

console.log("end");
