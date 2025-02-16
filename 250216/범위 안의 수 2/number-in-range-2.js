const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let sumVal = 0;
let cnt = 0;
let average = 0;

for (let i = 0; i <= 9; i++) {
    if (arr[i] >= 0 && arr[i] <= 200) {
        cnt ++;
        sumVal += arr[i];
    }
}

average = (sumVal / cnt).toFixed(1);

console.log(sumVal, average);