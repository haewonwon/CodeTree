const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let arr = input.split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);

// 내가 작성한 코드
// let result = "";

// if (a % 2 == 0) {
//     for (let i = a+1; i <= b; i += 2) {
//         result += (i + " ")
//     }

//     console.log(result)
// } else {
//     for (let i = a; i <= b; i += 2) {
//         result += (i + " ")
//     }

//     console.log(result)
// }

// 챗지피티가 리팩토링해 준 코드
let start = (a % 2 === 0) ? a + 1 : a;
let result = "";

for (let i = start; i <= b; i += 2) {
    result += (i + " ");
}

console.log(result);
