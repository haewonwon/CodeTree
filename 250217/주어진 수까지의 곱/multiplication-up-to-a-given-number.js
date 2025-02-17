const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let a = arr[0];
let b = arr[1];

let prod = 1;

for (let i = a; i <= b; i++) {
    prod *= i;
}

console.log(prod);