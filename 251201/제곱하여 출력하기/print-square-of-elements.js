const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(arr[0]); // 원소의 개수
let number = arr[1].split(" ").map(Number); // n개의 원소

let result = "";

for (let i = 0; i < number.length; i++) {
    result += number[i]**2 + " "
}

console.log(result);