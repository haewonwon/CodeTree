const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split("\n");
let arr1 = arr[0].split(" ");
let arr2 = arr[1].split(" ");

let aMAth = Number(arr1[0]);
let aEnglish = Number(arr1[1]);

let bMath = Number(arr2[0]);
let bEnglish = Number(arr2[1]);

if (aMAth > bMath && aEnglish > bEnglish) {
    console.log("1")
} else {
    console.log("0")
}