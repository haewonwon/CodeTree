const fs = require("fs");

let input = fs.readFileSync(0).toString().trim();
let arr = input.split("\n");

let arr_1 = arr[0].split(" ")
let arr_2 = arr[1].split(" ")
let arr_3 = arr[2].split(" ")

let coldA = arr_1[0], tempA = Number(arr_1[1]);
let coldB = arr_2[0], tempB = Number(arr_2[1]);
let coldC = arr_3[0], tempC = Number(arr_3[1]);

let situationA, situationB, situationC;
let result;

if (coldA == "Y") {
    if (tempA >= 37) {
        situationA = "A"
    } else {
        situationA = "C"
    }
} else {
    if (tempA >= 37) {
        situationA = "B"
    } else {
        situationA = "D"
    }
}

if (coldB == "Y") {
    if (tempB >= 37) {
        situationB = "A"
    } else {
        situationB = "C"
    }
} else {
    if (tempB >= 37) {
        situationB = "B"
    } else {
        situationB = "D"
    }
}

if (coldC == "Y") {
    if (tempC >= 37) {
        situationC = "A"
    } else {
        situationC = "C"
    }
} else {
    if (tempC >= 37) {
        situationC = "B"
    } else {
        situationC = "D"
    }
}

if (situationA == "A") {
    if (situationB == "A" || situationC == "A") {
        console.log("E")
    } else {
        console.log("N")
    }
} else {
    if (situationB == "A" && situationC == "A") {
        console.log("E")
    } else {
        console.log("N")
    }
}