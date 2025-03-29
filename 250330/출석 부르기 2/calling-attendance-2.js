const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;

while (true) {
    let n = Number(input[i]);
    i++

    if (n === 1) {
        console.log("John");
    } else if (n === 2) {
        console.log("Tom");
    } else if (n === 3) {
        console.log("Paul");
    } else if (n === 4) {
        console.log("Sam");
    } else {
        console.log("Vacancy");
        break;
    }
}