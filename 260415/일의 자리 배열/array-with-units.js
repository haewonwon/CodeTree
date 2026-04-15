const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);

let result = [a, b]

for (let i = 2; i < 10; i++) {
    let c = result[i-1] + result[i-2]
    result.push(c % 10)
}

console.log(result.join(" "))