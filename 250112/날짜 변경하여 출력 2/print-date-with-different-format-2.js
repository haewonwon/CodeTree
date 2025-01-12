const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let arr = input.split("-");

let month = arr[0];
let day = arr[1];
let year = arr[2];

console.log(`${year}.${month}.${day}`);