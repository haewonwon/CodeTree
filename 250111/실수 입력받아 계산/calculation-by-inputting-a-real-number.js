const fs = require("fs");

let input = fs.readFileSync(0).toString().split("\n");

let a = input[0];
let b = input[1];
let sum = (a + b).toFixed(2)

console.log(sum)