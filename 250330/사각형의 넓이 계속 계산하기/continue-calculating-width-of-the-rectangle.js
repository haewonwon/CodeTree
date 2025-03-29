const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let i = 0;

while (i < input.length) {
    let width = Number(input[i]);
    i++;
    let height = Number(input[i]);
    i++;
    let eng = input[i];
    i++;

    console.log(width * height);

    if (eng === "C") {
        break;
    }
}