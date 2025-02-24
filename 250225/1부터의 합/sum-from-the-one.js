const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let sumVal = 0;
let ans;

for (let i = 1; i <= 100; i++) {
    sumVal += i;

    if (sumVal >= n) {
        ans = i;
        break;
    }
}

console.log(ans);

