const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let a = arr[0];
let b = arr[1];

console.log(a**b);