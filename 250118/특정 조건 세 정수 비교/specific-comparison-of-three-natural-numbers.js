const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let min;

if (a >= b) {
    min = b;
} else if (b >= c) {
    min = c;
} else {
    min = a;
}

let resultA, resultB;

if (a == min) {
    resultA = "1"
} else {
    resultA = "0"
}

if (a == b && b == c) {
    resultB = "1"
} else {
    resultB = "0"
}

console.log(resultA, resultB)