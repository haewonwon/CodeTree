const fs = require("fs");

let year = Number(fs.readFileSync(0).toString().trim());

if (year % 4 !== 0 || (year % 100 == 0 && year % 400 !== 0)) {
    console.log("false")
} else {
    console.log("true")
}