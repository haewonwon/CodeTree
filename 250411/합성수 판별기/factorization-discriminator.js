const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let satisfied = false;

for (i = 2; i <= (n-1); i++) {
    if (n % i === 0) {
        satisfied = true;
    }
}

if (satisfied == true) {
    console.log("C")
} else {
    console.log("N")
}