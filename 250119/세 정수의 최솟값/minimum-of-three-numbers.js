const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let min;

a >= b ? min = b : min = a;
a >= c ? min = c : min = a;
b >= c ? min = c : min = b;

console.log(min);