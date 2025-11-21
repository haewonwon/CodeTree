const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let sum = (a + b + c);
let ave = sum/3;
let result = sum - ave

console.log(sum);
console.log(ave);
console.log(result);