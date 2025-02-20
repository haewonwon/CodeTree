const fs = require("fs");
let n = Number(fs.readFileSync(0).toString());

let cnt = 0;

for (let i = 1; i<= n; i++) {

    cnt ++;

    if (i % 2 === 0) {
        cnt --;
        continue;
    } else if (i % 3 === 0) {
        cnt --;
        continue;
    } else if (i % 5 === 0) {
        cnt --;
        continue;
    }
}

console.log(cnt);