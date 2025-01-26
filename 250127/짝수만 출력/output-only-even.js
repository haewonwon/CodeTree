const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);

let result = "";

if (a % 2 == 0) {
    let i = a;

    while (i <= b) {
        result += (i + " ")
        i += 2
    }
} else {
    let i = a + 1

    while (i <= b) {
        result += (i + " ")
        i += 2
    }
}

console.log(result)