const fs = require("fs");

let m = Number(fs.readFileSync(0).toString().trim());

// 내가 작성한 답
// if (m == 3 || m == 4 || m == 5) {
//     console.log("Spring")
// } else if (m == 6 || m == 7 || m == 8) {
//     console.log("Summer")
// } else if (m == 9 || m == 10 || m == 11) {
//     console.log("Fall")
// } else if (m == 12 || m == 1 || m == 2) {
//     console.log("Winter")
// }

// 해설
if (m >= 12 || m <= 2) {
    console.log("Winter")
} else if (m <= 5) {
    console.log("Spring")
} else if (m <= 8) {
    console.log("Summer")
} else {
    console.log("Fall")
}