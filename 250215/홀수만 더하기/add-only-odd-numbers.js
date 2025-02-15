const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let n = arr[0];

let sumVal = 0;

for (let i = 0; i <= n; i++) {
    if (arr[i] % 2 !== 0 && arr[i] % 3 === 0) {
        sumVal += arr[i]
    }
}

console.log(sumVal);