const fs = require("fs");
let a = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (let i = 1; i <= a; i ++) {
    let n = Math.floor(i / 8);
    let m = i % 7;

    if ((i % 2 === 0 && i % 4 !== 0) || n % 2 === 0 || m < 4) {
        continue;
    }

    result += (i + " ");
    
}

console.log(result);