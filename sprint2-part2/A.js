const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let n = Number(input);

function A(n) {
  if (n > 1) {
    return A(n - 1) + A(n - 2);
  }
  if (n === 0) {
    return 1;
  }
  return n;
}

console.log(A(n));
