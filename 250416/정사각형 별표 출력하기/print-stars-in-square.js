const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = 0; i < 4; i++) {
    str = "";

    for (let i = 0; i < n; i++) {
        str += "*";
    }

    console.log(str)
}