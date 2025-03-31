const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let count = 0;

while (n !== 1) {
    if (n % 2 === 0) {
        n = n / 2;
    } else {
        n = n * 3 + 1;
    }
    count++;
}

console.log(count);
