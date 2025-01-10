const fs = require("fs");

let n = fs.readFileSync(0).toString();
let arr = n.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

[a, b] = [b, a];

console.log(a, b);