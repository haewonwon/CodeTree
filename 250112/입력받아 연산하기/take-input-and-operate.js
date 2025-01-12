const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split("\n");

let a = Number(arr[0]);
let b = Number(arr[1]);

a += 87 // 87 증가

console.log(a);
console.log(b % 20);

