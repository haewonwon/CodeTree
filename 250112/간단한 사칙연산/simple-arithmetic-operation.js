const fs = require("fs");

let input = fs.readFileSync(0).toString().trim()
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

console.log(a + b);
console.log(a - b);
console.log(parseInt(a / b));
console.log(a % b);