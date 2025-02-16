const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let a = arr[0];
let b = arr[1];

let sumVal = 0;

for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        sumVal += i
    }
}

console.log(sumVal);