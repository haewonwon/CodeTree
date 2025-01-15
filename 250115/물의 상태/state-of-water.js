const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let a = Number(input);

if (a < 0) {
    console.log("ice");
} else if (0 < a < 100) {
    console.log("water");
} else if (a >= 100) {
    console.log("vapor");
};