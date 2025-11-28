const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(String);

const newArr = [];

for (let i = 9; i >= 0; i--) {
    newArr.push(arr[i]);
}

console.log(newArr.join(""));