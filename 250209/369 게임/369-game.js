const fs = require("fs");
let num = Number(fs.readFileSync(0).toString().trim());

let result = "";

for (let i = 1; i <= num; i ++) {
    let str = i.toString();

    if (i % 3 === 0 || str.includes('3') || str.includes('6') || str.includes('9')) {
        result += (0 + " ")

        // i % 10 === 3 || i % 10 === 6 || i % 10 === 9
    } else {
        result += (i + " ")
    }
}

console.log(result)