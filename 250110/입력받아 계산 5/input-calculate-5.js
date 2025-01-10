const fs = require("fs");

let n = fs.readFileSync(0).toString();
let arr = n.split(" ");

console.log(Number(arr[0]) + Number(arr[1]));