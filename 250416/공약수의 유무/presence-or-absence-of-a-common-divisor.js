const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);

let satisfied = false;

for (i = a; i <= b; i++) {
    if (1920 % i === 0 && 2880 % i === 0) {
        satisfied = true;
    }
}

if (satisfied == true) {
    console.log("1")
} else {
    console.log("0")
}