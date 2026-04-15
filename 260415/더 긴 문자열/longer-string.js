const fs = require("fs")
let arr = fs.readFileSync(0).toString().trim().split(" ")

if (arr[0].length > arr[1].length) {
    console.log(arr[0], arr[0].length)
} else if (arr[0].length < arr[1].length) {
    console.log(arr[1], arr[1].length)
} else {
    console.log("same")
}