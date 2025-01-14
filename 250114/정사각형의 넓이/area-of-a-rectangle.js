const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let extent = input**2;

if (input < 5) {
    console.log(extent)
    console.log("tiny")
} else {
    console.log(extent)
};