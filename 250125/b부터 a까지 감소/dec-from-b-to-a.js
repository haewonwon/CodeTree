const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);

let result = "";

for (i = b; i > (a - 1); i--) {
    result += (i += " ")
}

console.log(result)