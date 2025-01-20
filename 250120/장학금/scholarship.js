const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

// 내가 작성한 코드 & 해설
// if (a >= 90 && b >= 95) {
//     console.log("100000")
// } else if (a >= 90 && b >= 90) {
//     console.log("50000")
// } else {
//     console.log("0")
// }

// 효율적인 코드
if (a >= 90) {
    console.log(b >= 95 ? "100000" : b >= 90 ? "50000" : "0");
} else {
    console.log("0");
}