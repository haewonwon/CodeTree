const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let arrA = arr[0].split(" ");
let arrB = arr[1].split(" ");

let mathA = Number(arrA[0]);
let engA = Number(arrA[1]);

let mathB = Number(arrB[0]);
let engB = Number(arrB[1]);

console.log(mathA > mathB && engA > engB ? 1 : 0)