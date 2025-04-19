const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let count = Number(input[0]);
let arr = input[1].split(" ").map(Number);

let sumVal = 0;

for (let i = 0; i < count; i++) {
    sumVal += arr[i];
}

let average = (sumVal / count).toFixed(1)

console.log(average)

if (average > 4.0) {
    console.log("Perfect")
} else if (average > 3.0) {
    console.log("Good")
} else {
    console.log("Poor")
}