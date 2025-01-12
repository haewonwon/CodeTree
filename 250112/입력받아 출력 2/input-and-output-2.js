const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let numberArr = input.split("-");

let front = numberArr[0];
let back = numberArr[1];

console.log(`${front}${back}`)