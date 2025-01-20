const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split("\n");
let arr_1 = arr[0].split(" ");
let arr_2 = arr[1].split(" ");

let age_1 = Number(arr_1[0]);
let sex_1 = arr_1[1];
let age_2 = Number(arr_2[0]);
let sex_2 = arr_2[1];

if (age_1 >= 19 && sex_1 == "M" || age_2 >= 19 && sex_2 == "M") {
    console.log("1")
} else {
    console.log("0")
}