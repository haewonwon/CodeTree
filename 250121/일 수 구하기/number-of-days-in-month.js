const fs = require("fs");

let n = Number(fs.readFileSync(0).toString().trim());

// 내가 작성한 답
// if (n == 2) {
//     console.log("28")
// } else if ((n <= 6 && n % 2 !== 0) || n == 7 || n == 8 || (n >= 9 && n % 2 == 0)) {
//     console.log("31")
// } else {
//     console.log("30")
// }

// 해설
if (n === 2) {
    console.log(28);
}
else if (n <= 7) {
    if (n % 2 === 1) {
        console.log(31);
    }
    else {
        console.log(30);
    }
}
else {
    if (n % 2 === 0) {
        console.log(31);
    }
    else {
        console.log(30);
    }
}