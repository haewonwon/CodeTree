const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);
let a = arr[0];
let b = arr[1];

let cnt = 0;
let sumVal = 0;
let average = 0;

for (let i = a; i <= b; i++) {
    if (i % 5 === 0 || i % 7 === 0) {
        cnt ++;
        sumVal += i;
    }
}

average = (sumVal / cnt).toFixed(1);

console.log(sumVal, average);