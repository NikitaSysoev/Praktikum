const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const number = Number(input[0]);

let result = 1;

for (let i = 1; i <= number; i++) {
  result *= i;
}

console.log(result);
