const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let cnt_classroom = 0;
let cnt_corridor = 0;
let cnt_restroom = 0;

for (let i = 1; i <= n; i ++) {
    if (i % 12 === 0) {
        cnt_restroom ++;
    } else if (i % 3 === 0) {
        cnt_corridor ++;
    } else if (i % 2 === 0) {
        cnt_classroom ++;
    }
}

console.log(cnt_classroom, cnt_corridor, cnt_restroom)