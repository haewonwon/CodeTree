const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

let sum = a + b;
let sub = a - b;

let result = (sum / sub).toFixed(2);

console.log(result);