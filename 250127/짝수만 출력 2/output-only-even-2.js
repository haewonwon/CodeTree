const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let b = Number(arr[0]);
let a = Number(arr[1]);

let result = "";

while (b >= a) {
    result += (b + " ");
    b -= 2;
}

console.log(result)