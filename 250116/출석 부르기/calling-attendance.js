const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let number = Number(input);

if (number == 1) {
    console.log("John");
} else if (number == 2) {
    console.log("Tom");
} else if (number == 3) {
    console.log("Paul");
} else {
    console.log("Vacancy");
}