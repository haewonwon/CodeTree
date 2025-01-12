const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

let sum = a + b;

console.log(sum, (sum / 2).toFixed(1));