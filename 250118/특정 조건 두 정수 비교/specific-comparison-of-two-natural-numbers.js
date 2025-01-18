const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

let result = "0"

if (a < b) {
    result = "1";
} else {
    result = "0";
}

if (a == b) {
    console.log(result, "1")
} else {
    console.log(result, "0")
}