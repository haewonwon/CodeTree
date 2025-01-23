const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

let result = "";

if (a % 2 == 0) {
    for (let i = a+1; i <= b; i += 2) {
        result += (i + " ")
    }

    console.log(result)
} else {
    for (let i = a; i <= b; i += 2) {
        result += (i + " ")
    }

    console.log(result)
}