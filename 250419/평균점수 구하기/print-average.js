const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumVal = 0;

for (let i = 0; i < 8; i++) {
    sumVal += input[i];
}

console.log((sumVal / 8).toFixed(1));