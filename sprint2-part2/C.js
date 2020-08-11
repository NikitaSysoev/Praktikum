const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let n = Number(input);

function C(n, memo = {}) {
  if (n <= 1) {
    return 1;
  }
  if (n > 1) {
    let a = memo[n - 1] ? memo[n - 1] : C(n - 1, memo);
    let b = memo[n - 2] ? memo[n - 2] : C(n - 2, memo);
    memo[n] = a + b;
  }
  return memo[n];
}

console.log(C(n));
