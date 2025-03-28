const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let number = n;
let cnt = 0; // 나눗셈을 진행한 횟수

for (let i = 1; i <= number; i++) {
    n = n / i
    cnt ++;

    if (n <= 1) {
        break
    }
}

console.log(cnt)