// 내가 작성한 코드
// const fs = require("fs");
// let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

// let newArr = Array(10);

// let n = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         n = i;
//         newArr.push(arr[i]);
//     } else {
//         break;
//     }
// }

// let result = "";
// newArr = newArr.slice(10)

// for (let j = n; j >= 0; j--) {
//     result += newArr[j] + " ";
// }

// console.log(result);

// 챗지피티가 리팩토링한 코드
const fs = require("fs");
const arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const resultArr = [];

for (const num of arr) {
    if (num === 0) break;
    resultArr.push(num);
}

console.log(resultArr.reverse().join(" "));
