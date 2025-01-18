const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();

let arr = input.split("\n");
let arr2 = arr[1].split(" ")

let a = Number(arr[0]);
let b = Number(arr2[0]);
let c = Number(arr2[1]);
let d = Number(arr2[2]);
let e = Number(arr2[3]);

if (a > b) {
    console.log("1")
} else {
    console.log("0")
}

if (a > c) {
    console.log("1")
} else {
    console.log("0")
}

if (a > d) {
    console.log("1")
} else {
    console.log("0")
}

if (a > e) {
    console.log("1")
} else {
    console.log("0")
}