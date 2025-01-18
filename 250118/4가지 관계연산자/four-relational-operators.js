const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

if (a >= b) {
    console.log("1")
} else {
    console.log("0")
}

if (a > b) {
    console.log("1")
} else {
    console.log("0")
}

if (b >= a) {
    console.log("1")
} else {
    console.log("0")
}

if (b > a) {
    console.log("1")
} else {
    console.log("0")
}