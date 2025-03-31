const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;
let sum = 0;

while (true) {
    let n = Number(input[i]);

    if (n >= 20 && n < 30) {
        sum += n;
        i++;
    } else {
        break;
    }
}

console.log((sum / i).toFixed(2));