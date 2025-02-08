const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);

let result = "";

for (let i = a; i <= b; ) {
    result += (i + " ")

    if (i % 2 === 1) {
        i *= 2
    } else {
        i += 3
    }

    if (i > b) break;  
}

console.log(result)