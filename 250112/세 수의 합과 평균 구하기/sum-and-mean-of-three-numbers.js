const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let sum = a + b + c;
let avg = parseInt(sum / 3);

console.log(sum);
console.log(avg);