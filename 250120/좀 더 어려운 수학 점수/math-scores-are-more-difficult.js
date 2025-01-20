const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split("\n")
let arr_1 = arr[0].split(" ")
let arr_2 = arr[1].split(" ")

let mathA = Number(arr_1[0]);
let englishA = Number(arr_1[1]);

let mathB = Number(arr_2[0]);
let englishB = Number(arr_2[1]);

if (mathA > mathB) {
    console.log("A")
} else if (mathA == mathB) {
    console.log(englishA > englishB ? "A" : "B")
} else {
    console.log("B")
}