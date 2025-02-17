const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);
let n = arr[0];

let sumVal = 0;
let cnt = 0;

for (let i = 1; i <= n; i++) {
    sumVal += arr[i];
    cnt ++;
}

let avg = (sumVal / cnt).toFixed(1);

console.log(sumVal, avg);