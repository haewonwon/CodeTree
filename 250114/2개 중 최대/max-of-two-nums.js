const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// };

let result = a > b ? a : b;

console.log(result);