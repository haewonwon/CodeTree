const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

if (n == 2) {
    console.log("28")
} else if ((n <= 6 && n % 2 !== 0) || n == 7 || n == 8 || (n >= 9 && n % 2 == 0)) {
    console.log("31")
} else {
    console.log("30")
}