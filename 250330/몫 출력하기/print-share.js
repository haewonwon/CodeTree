const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let i = 0;
let cnt = 0;

while (true) {
    let n = Number(input[i]);
    i ++;

    if (n % 2 !== 0) {
        continue;
    } else {
        cnt ++;
        console.log(n / 2)

        if (cnt === 3) {
        break;
    }
    }
}