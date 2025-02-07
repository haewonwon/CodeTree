const fs = require("fs");

let arr = fs.readFileSync(0).toString().trim().split(" ");
let a = Number(arr[0]);
let b = Number(arr[1]);

let result = "";               // 소수점 결과를 저장할 문자열
let share = Math.floor(a / b); // 몫 (정수 부분)
let remain = a % b;            // 나머지 부분

for (let i = 0; i < 20; i++) {
    remain *= 10;                      // 나머지를 10배로 확장
    let share2 = Math.floor(remain / b); // 현재 소수점 자리 숫자
    result += share2;                   // 결과 문자열에 추가
    remain %= b;                        // 새로운 나머지 계산
}

console.log(`${share}.${result}`); // 최종 결과 출력