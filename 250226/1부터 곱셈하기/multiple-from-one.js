const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let prod = 1;
let ans;

for (let i = 1; i <= 10; i++) {
    prod *= i;

    if (prod >= n) {
        ans = i;
        break
    }
}

console.log(ans);