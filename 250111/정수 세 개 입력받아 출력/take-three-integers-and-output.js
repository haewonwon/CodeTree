const fs = require("fs");

let input = fs.readFileSync(0).toString().split(" ");

let a = input[0];
let bc = input[1].split("\n");

let b = bc[0];
let c = bc[1];

console.log(a, b, c)