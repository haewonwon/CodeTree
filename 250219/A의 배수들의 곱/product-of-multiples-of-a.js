const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = arr[0];
let b = arr[1];

let prod = 1;

for (let i = 1; i <= b; i ++) {
    if (i % a === 0) {
        prod *= i
    }
}

console.log(prod)
