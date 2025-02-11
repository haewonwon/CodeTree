const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let cnt = 0;

for (let i = 0; i < arr.length; i ++) {
    if (arr[i] % 2 !== 0) {
        cnt ++;
    }
}

console.log(cnt);
