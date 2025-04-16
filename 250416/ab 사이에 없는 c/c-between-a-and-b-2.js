const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

let satisfied = false;

for (let i = a; i <=b; i++) {
    if (i % c === 0) {
        satisfied = true;
    }
}

if (satisfied == false) {
    console.log("YES");
} else {
    console.log("NO")
}