const fs = require("fs");
let arr = fs.readFileSync(0).toString().trim().split(" ");

arr = arr.sort(function(a,b) {
return a-b
});

console.log(arr[1]);

