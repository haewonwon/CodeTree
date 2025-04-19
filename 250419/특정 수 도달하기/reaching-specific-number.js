const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

let newArr = [];

for (let elem of arr) {
    if (elem < 250) {
        newArr.push(elem)
    } else {
        break;
    }
}

let sumVal = 0;

for (let i = 0; i < newArr.length; i++) {
    sumVal += Number(newArr[i]);
}

console.log(sumVal, (sumVal / newArr.length).toFixed(1));