const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let sumVal = 0;
let cnt = 0;

for (const num of arr) {
    if (num === 0) break;
    sumVal += num;
    cnt ++;
}

console.log(sumVal, (sumVal / cnt).toFixed(1));