const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);

let result = "";

// 내 답변
// for (let i = a; i <= b; ) {
//     result += (i + " ")

//     if (i % 2 === 1) {
//         i *= 2
//     } else {
//         i += 3
//     }

//     if (i > b) break;  
// }

// 해설
while (a <= b) {
    result += a + " ";
    if (a % 2 === 1) {
        a *= 2;
    }
    else {
        a += 3;
    }
}

console.log(result)