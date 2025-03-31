const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;
let sum = 0;

while (true) {
    let n = Number(input[i]);

    sum += n;
    i++;

    if (n >= 30) {
        break;
    }
}

console.log((sum / i).toFixed(2));