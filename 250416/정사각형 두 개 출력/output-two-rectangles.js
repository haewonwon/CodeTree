const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

for (let rect = 0; rect < 2; rect++) {
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j < n; j++) {
            line += "*";
        }
        console.log(line);
    }
    console.log();
}