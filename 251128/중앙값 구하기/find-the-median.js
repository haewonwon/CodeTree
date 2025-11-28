const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

arr = arr.sort();

console.log(arr[1]);

