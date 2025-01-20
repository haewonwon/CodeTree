const fs = require("fs");

let input = fs.readFileSync(0).toString().trim().split("\n");

let sex = Number(input[0]);
let age = Number(input[1]);

if (sex == 0) {
    if (age >= 19) {
        console.log("MAN")
    } else {
        console.log("WOMAN")
    }
} else {
    if (age >= 19) {
        console.log("BOY")
    } else {
        console.log("GIRL")
    }
}