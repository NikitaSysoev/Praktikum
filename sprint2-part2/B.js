const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let n = Number(input);

function A(n) {
  if (n > 1) {
    if (!A[n]) {
      let a = A[n - 1] ? A[n - 1] : A(n - 1);
      let b = A[n - 2] ? A[n - 2] : A(n - 2);
      A[n] = a + b;
    }
    return A[n];
  }
  if (n === 0) {
    A[n] = 1;
    return 1;
  }
  A[n] = n;
  return n;
}

console.log(A(n));
