const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
let result = "";

for (let i = n; i < 101; i++) {
    if (i >= 90) {
        result += ("A" + " ")
    } else if (i >= 80) {
        result += ("B" + " ")
    } else if (i >= 70) {
        result += ("C" + " ")
    } else if (n >= 60) {
        result += ("D" + " ")
    } else {
        result += ("F" + " ")
    }
}

console.log(result)