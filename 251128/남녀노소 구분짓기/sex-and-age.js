const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split("\n");

let s = Number(arr[0]);
let n = Number(arr[1]);

// if (s === 0) {
//     if (n >= 19) {
//         console.log("MAN")
//     }

//     if (n < 19) {
//         console.log("BOY")
//     }
// }

// if (s === 1) {
//     if (n >= 19) {
//         console.log("WOMAN")
//     }

//     if (n < 19) {
//         console.log("GIRL")
//     }
// }

console.log(s === 0 ? (n >= 19 ? "MAN" : "BOY") : (n >= 19 ? "WOMAN" : "GIRL"));