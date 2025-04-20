const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let newArr = Array(10);

let n = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
        n = i;
        newArr.push(arr[i]);
    } else {
        break;
    }
}

let result = "";
newArr = newArr.slice(10)

for (let j = n; j >= 0; j--) {
    result += newArr[j] + " ";
}

console.log(result);