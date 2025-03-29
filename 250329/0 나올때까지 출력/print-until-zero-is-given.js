const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let n;
let i = 0;
let result = "";

while (true) {
    n = Number(input[i]);

    if (n === 0) {
        break;
    }

    result += (n + "\n")
    i++
}

console.log(result)