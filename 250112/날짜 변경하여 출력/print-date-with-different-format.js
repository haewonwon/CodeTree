const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let arr = input.split(".");

let year = arr[0];
let month = arr[1];
let day = arr[2];

console.log(`${month}-${day}-${year}`);