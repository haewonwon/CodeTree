const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

let resultA, resultB

if (a < b) {
    resultA = 1;
} else {
    resultA = 0;
}

if (a == b) {
    resultB = 1;
} else {
    resultB = 0;
}

console.log(resultA, resultB);