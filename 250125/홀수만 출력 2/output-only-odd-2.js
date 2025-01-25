const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let b = Number(arr[0]);
let a = Number(arr[1]);

let result = "";

for (i = b; i >= a; i-= 2) {
    result += (i += " ")
}

console.log(result)