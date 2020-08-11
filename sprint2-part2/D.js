const fs = require('fs');
const os = require('os');
const input = fs.readFileSync('input.txt', 'utf-8').split(os.EOL);

let n = Number(input);

function D(n) {
  let a = 1;
  let b = 1;
  for (let i = 2; i <= n; i++) {
    if (String(a).length > 2) {
      a = convertToOne(a);
    }
    if (String(b).length > 2) {
      b = convertToOne(b);
    }
    let c = convertToOne(a + b);
    a = b;
    b = c;
  }
  return b;
}

function convertToOne(number) {
  return +number.toString().split('').pop();
}

console.log(D(n));
