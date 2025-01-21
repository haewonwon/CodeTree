const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let a = Number(arr[0]);
let b = Number(arr[1]);
let c = Number(arr[2]);

if ((a >= b && a <= c) || (a >= c && a <= b)) {
    console.log(a)
} else if ((b >= a && b <= c) || (b >= c && b <=a)) {
    console.log(b)
} else {
    console.log(c)
}