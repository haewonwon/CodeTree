const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let arr = input.split("-");

let num = arr[0]; // 010
let front = arr[1];
let back = arr[2];

console.log(`${num}-${back}-${front}`);