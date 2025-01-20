const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

if (a >= 90 && b >= 95) {
    console.log("100000")
} else if (a >= 90 && b >= 90) {
    console.log("50000")
} else {
    console.log("0")
}