const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let sumVal = 0;

for (let i = 0; i < 10; i++) {
    sumVal += Number(arr[i]);
}

console.log(sumVal);