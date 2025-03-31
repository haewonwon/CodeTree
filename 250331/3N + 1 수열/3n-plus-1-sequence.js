const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let count = 0;

while (true) {
    count ++;

    if (n === 1) {
        break;
    }

    if (n % 2 === 0) {
        n = n * 2
    } else {
        n = n * 3 + 1
    }

    console.log(count);
}