const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let count = 0;

while (true) {
    if (n === 1) {
        break;
    }

    if (n % 2 === 0) {
        count ++;
        n = n * 2
    } else {
        count ++;
        n = n * 3 + 1
    }
}

console.log(count);