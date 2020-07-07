const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

const number = Number(input[0]);

function factorial(n) {
  if (!n) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(number))