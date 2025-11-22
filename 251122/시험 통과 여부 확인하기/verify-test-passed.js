const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
 
let rest = 80 - n

console.log(n >= 80? "pass": `${rest} more score`);