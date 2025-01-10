const fs = require("fs");

let a = Number(fs.readFileSync(0).toString());
let arr = a.split(" ");

console.log(arr[0] * arr[1])