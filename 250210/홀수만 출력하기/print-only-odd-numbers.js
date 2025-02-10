const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n").map(Number);

// 첫 번째 값을 제거
arr.shift();

for (let i = 0; i < arr.length; i ++) {
    if (arr[i] % 3 === 0 && arr[i] % 2 !== 0) {
        console.log(arr[i])
    }
}