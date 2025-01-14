const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let h = Number(arr[0]);
let w = Number(arr[1]);

let b = w / (h / 100)**2

if (b >= 25) {
    console.log(Math.floor(b))
    console.log("Obesity")
} else {
    console.log(Math.floor(b))
}