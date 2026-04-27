const fs = require("fs")
const input = fs.readFileSync(0).toString().trim()

let text = ""

for (let i = Number(input); i <= 100; i++) {
    if (i >= 90) {
        text += "A" + " "
    } else if (i >= 80) {
        text += "B" + " "
    } else if (i >= 70) {
        text += "C" + " "
    } else if (i >= 60) {
        text += "D" + " "
    } else {
        text += "F" + " "
    }
}

console.log(text)