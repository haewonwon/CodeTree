const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

let cnt_3 = 0;
let cnt_5 = 0;

for (let i = 0; i < input.length; i ++) {
    if (input[i] % 3 === 0) {
        cnt_3 ++;
    }
    
    if (input[i] % 5 === 0) {
        cnt_5 ++;
    }
}

console.log(cnt_3, cnt_5)