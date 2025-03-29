const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(/\s+/);
let i = 0;

while (true) {
    let width = Number(input[i++]);
    let height = Number(input[i++]);
    let eng = input[i++];

    console.log(width * height);

    if (eng === "C") {
        break;
    }
}